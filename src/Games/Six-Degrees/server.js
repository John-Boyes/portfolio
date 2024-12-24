const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const mysql = require('mysql2/promise');
dotenv.config();

// Configure MySQL connection
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'columbo',
    password: 'Y9R6otUX31PZiqgIvaFw',
    database: 'tmdb_cache_db',
    waitForConnections: true,
    connectionLimit: 300, // Increase if necessary
    queueLimit: 0, // Unlimited queue
    connectionTimeout: 10000, // 10 seconds
});

const app = express();
const PORT = 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const locks = new Map();


// Load SSL certificates
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/johnboyes.dev/privkey.pem'),  // SSL private key
  cert: fs.readFileSync('/etc/letsencrypt/live/johnboyes.dev/fullchain.pem'), // SSL certificate
  ca: fs.readFileSync('/etc/letsencrypt/live/johnboyes.dev/chain.pem')       // Optional: CA certificate chain
};

app.use(cors());
app.use(express.json());

// Mutex for preventing concurrent writes to the same cache entry
async function acquireLock(key) {
    while (locks.has(key)) {
        await new Promise((resolve) => setTimeout(resolve, 50)); // Wait 50ms
    }
    locks.set(key, true);
}

function releaseLock(key) {
    locks.delete(key);
}

async function retryOperation(operation, retries = 3) {
    let lastError;
    while (retries > 0) {
        try {
            return await operation();
        } catch (err) {
            lastError = err;
            retries -= 1;
            console.warn('Retrying operation, attempts left:', retries);
        }
    }
    throw lastError;
}


// Search Actor and Fetch Details with Caching
app.get('/api/search/:name', async (req, res) => {
    const { name } = req.params;
    try {
        // Check database connection health
        const connection = await db.getConnection();
        connection.release();
        console.log('Database connection is healthy');

        // Step 1: Check cache for actor data
        // const [cacheRows] = await retryOperation(() => db.query('SELECT response FROM tmdb_cache_db.tmdb_cache WHERE query = ?', [name]), 3);

        // if (cacheRows.length > 0) {
        //     console.log('Cache hit');
        //     return res.json(JSON.parse(cacheRows[0].response));
        // }

        // console.log('Cache miss, calling TMDB API');

        // Step 2: Search for actor using TMDB API
        const searchResponse = await retryOperation(() => axios.get('https://api.themoviedb.org/3/search/person', {
            params: { api_key: TMDB_API_KEY, query: name },
        }), 3);
        const actor = searchResponse.data.results[0];
        if (!actor) {
            return res.status(404).json({ message: 'Actor not found' });
        }

        const { id, name: actorName, profile_path } = actor;
        const image_url = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : null;

        // Step 3: Get acting credits
        const creditsResponse = await retryOperation(() => axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits`, {
            params: { api_key: TMDB_API_KEY },
        }), 3);
        const actingCredits = creditsResponse.data.cast
            .filter((credit) => credit.release_date)
            .map((credit) => ({
                release_date: credit.release_date,
                title: credit.title,
                character: credit.character,
            }))
            .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

        // Step 4: Prepare response
        const response = { name: actorName, image_url, acting_credits: actingCredits };

        // Step 5: Cache response in database
        await acquireLock(name); // Acquire lock before writing to cache
        try {
            await retryOperation(() => db.query(
                'INSERT INTO tmdb_cache (query, response) VALUES (?, ?) ON DUPLICATE KEY UPDATE response = VALUES(response), updated_at = CURRENT_TIMESTAMP',
                [name, JSON.stringify(response)]
            ), 3);
            console.log('Cache updated for query:', name);
        } catch (err) {
            console.error('Error caching response:', err);
            // Recheck the cache after failure
            const [cacheRows] = await db.query('SELECT response FROM tmdb_cache WHERE query = ?', [name]);
            if (cacheRows.length > 0) {
                console.log('Cache entry found after write failure');
                return res.json(JSON.parse(cacheRows[0].response));
            }
            throw err; // Propagate if no cache found
        } finally {
            releaseLock(name); // Release lock after operation
        }

        res.json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error fetching actor details' });
    }
});


// Create HTTPS server
https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on https://localhost:${PORT}`);
});

// Graceful shutdown to close database connections
process.on('SIGINT', async () => {
    console.log('Received SIGINT. Closing database pool...');
    try {
        await db.end(); // Closes all database connections in the pool
        console.log('Database pool closed.');
        process.exit(0); // Exit the process successfully
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1); // Exit the process with an error code
    }
});