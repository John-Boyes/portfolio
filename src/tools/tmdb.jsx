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
        <div className="m-4 min-w-full mx-auto overflow-auto">
            <h1>Search Actor</h1>
            <div className='min-w-full'>
            <input
                className='pl-4 py-2 rounded-l-xl ml-2 mt-2 border text-black font-semibold tracking-wide'
                type="text"
                placeholder="Enter actor's name"
                value={actorName}
                onChange={(e) => setActorName(e.target.value)}
            />
            <button className='bg-blue-500 hover:bg-green-700 text-white font-bold
                p-2 rounded-r-xl border 
                focus:outline-none focus:shadow-outline' 
              onClick={searchActor}>Search</button>
            </div>

            {actorData.map((actor, index) => (
                <div key={index} className="flex flex-col sm:flex-row actor-card m-2 pt-4 overflow-auto">
                    <div className='flex flex-col'>
                        {actor.image_url && <img className='max-w-md' src={actor.image_url} alt={actor.name} />}
                        <span className='p-2 text-center'>{actor.name}</span>
                    </div>
                    <div className="flex flex-col accordion p-4 mx-auto rounded-xl ">
                        <button className='mb-2 px-4 py-2 border-b border-black'
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
                                    <li className='pt-1 pl-2' key={idx}>
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
