import React, { useState, useEffect } from 'react';
import "../Stylesheets/nasaneo.css"



const NasaNeo = () => {
    const [asteroid, setAsteroid] = useState(null);

    const getAsteroid = () => {
        const asteroidSelect = document.getElementById('asteroidSelect');
        const asteroidId = asteroidSelect.value;
        const apiKey = 'kBma1GvOcRws3yF58vrbYGNjoQJmHd1NrR6JaE9b';
        const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${apiKey}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAsteroid(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    useEffect(() => {
        getAsteroid();
    }, []);

    // Dynamic NASA link
    const nasaJplUrl = 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/';
    const linkElement = <a href={nasaJplUrl}>Ver más información en la NASA - LOOKUP</a>;

    return (
        <div className='container-neo'>
            <select id="asteroidSelect">
                {/* Options for asteroid selection */}
            </select>
            <button onClick={getAsteroid}>Buscar Asteroide</button>

            {/* Display asteroid data */}
            {asteroid && (
                <div>
                    <h2>{asteroid.name}</h2>
                    <h3>{asteroid.id}</h3>
                </div>
            )}

            {/* Display dynamic NASA link */}
            <div id="nasaJplUrlSection">{linkElement}</div>
        </div>
    );
}

export default NasaNeo;
