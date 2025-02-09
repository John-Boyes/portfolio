import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import mysql from 'mysql2/promise';

dotenv.config();

const app = express();
const PORT = 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Configure MySQL connection
const db = mysql.createPool({
    host: '147.79.75.195',
    user: 'columbo',
    password: 'Y9R6otUX31PZiqgIvaFw',
    database: 'tmdb_cache_db',
    waitForConnections: true,
});

const sixDegreesDb = mysql.createPool({
    host: '147.79.75.195',
    user: 'columbo',
    password: 'Y9R6otUX31PZiqgIvaFw',
    database: 'SixDegrees',
    waitForConnections: true,
});


app.use(cors());
app.use(express.json());

// Search Actor and Fetch Details with Caching
app.get('/api/search/:name', async (req, res) => {
    const { name } = req.params;
    try {
        // Step 1: Check cache for actor data
        const [cacheRows] = await db.query('SELECT response FROM tmdb_cache WHERE query = ?', [name]);

        if (cacheRows.length > 0) {
            console.log('Cache hit');
            return res.json(JSON.parse(cacheRows[0].response));
        }

        console.log('Cache miss, calling TMDB API');

        // Step 2: Search for actor using TMDB API
        const searchResponse = await axios.get(`https://api.themoviedb.org/3/search/person`, {
            params: {
                api_key: TMDB_API_KEY,
                query: name,
            },
        });
        const actor = searchResponse.data.results[0];
        if (!actor) {
            return res.status(404).json({ message: 'Actor not found' });
        }

        const { id, name: actorName, profile_path } = actor;
        const image_url = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : null;

        // Step 3: Get acting credits
        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits`, {
            params: { api_key: TMDB_API_KEY },
        });
        const actingCredits = creditsResponse.data.cast
            .filter((credit) => credit.release_date) // Exclude entries with no release date
            .map((credit) => ({
                release_date: credit.release_date,
                title: credit.title,
                character: credit.character,
            }));

        // Sort acting credits by descending release date
        actingCredits.sort((a, b) => {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);

            if (isNaN(dateA)) return 1; // Move 'a' to the end
            if (isNaN(dateB)) return -1; // Move 'b' to the end

            return dateB - dateA; // Descending order
        });

        // Step 4: Prepare response
        const response = { name: actorName, image_url, acting_credits: actingCredits };

        // Step 5: Cache response in database
        await db.query('INSERT INTO tmdb_cache (query, response) VALUES (?, ?) ON DUPLICATE KEY UPDATE response = VALUES(response), updated_at = CURRENT_TIMESTAMP', [
            name,
            JSON.stringify(response),
        ]);

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching actor details' });
    }
});

// Example endpoint to interact with SixDegrees database
app.get('/api/sixdegrees/actors', async (req, res) => {
    try {
        const [rows] = await sixDegreesDb.query('SELECT primaryName FROM actors');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data from SixDegrees database' });
    }
});

// Create HTTPS server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
