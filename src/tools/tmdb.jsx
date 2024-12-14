import React, { useState } from 'react';
import axios from 'axios';

function TMDB() {
    const [actorName, setActorName] = useState('');
    const [actorData, setActorData] = useState([]);

    const searchActor = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/search/${actorName}`);
            setActorData([response.data]);
        } catch (error) {
            console.error(error);
            alert('Actor not found or error fetching data.');
        }
    };

    return (
        <div className="container">
            <h1>Search Actor</h1>
            <input
                type="text"
                placeholder="Enter actor's name"
                value={actorName}
                onChange={(e) => setActorName(e.target.value)}
            />
            <button onClick={searchActor}>Search</button>

            {actorData.map((actor, index) => (
                <div key={index} className="actor-card">
                    <h2>{actor.name}</h2>
                    {actor.image_url && <img src={actor.image_url} alt={actor.name} />}
                    <div className="accordion">
                        <button
                            onClick={(e) => {
                                const creditsDiv = e.target.nextElementSibling;
                                creditsDiv.style.display =
                                    creditsDiv.style.display === 'none' ? 'block' : 'none';
                            }}
                        >
                            Show Acting Credits
                        </button>
                        <div style={{ display: 'none' }}>
                            <ul>
                                {actor.acting_credits.map((credit, idx) => (
                                    <li key={idx}>
                                        {credit.title} ({credit.release_date}) - {credit.character}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TMDB;
