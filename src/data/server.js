const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
dotenv.config();

const app = express();
const PORT = 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Load SSL certificates (replace with your actual paths)
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/johnboyes.dev/privkey.pem'),  // SSL private key
  cert: fs.readFileSync('/etc/letsencrypt/live/johnboyes.dev/fullchain.pem'), // SSL certificate
  ca: fs.readFileSync('/etc/letsencrypt/live/johnboyes.dev/chain.pem')       // Optional: CA certificate chain
};

app.use(cors());
app.use(express.json());

// Search Actor and Fetch Details
app.get('/api/search/:name', async (req, res) => {
    const { name } = req.params;
    try {
        // Step 1: Search for actor
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

        // Step 2: Get acting credits
        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits`, {
            params: { api_key: TMDB_API_KEY },
        });
        const actingCredits = creditsResponse.data.cast.map((credit) => ({
            title: credit.title,
            release_date: credit.release_date,
            character: credit.character,
        }));

        res.json({ name: actorName, image_url, acting_credits: actingCredits });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching actor details' });
    }
});

// Create HTTPS server
https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on https://localhost:${PORT}`);
});
