import React, { useState } from 'react';
import "../Stylesheets/nasadate.css"

const NasaImagesByDate = () => {
    const [choice, setChoice] = useState('');
    const [imageData, setImageData] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setChoice(event.target.value);
    };

    const getImagesByDate = () => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=kBma1GvOcRws3yF58vrbYGNjoQJmHd1NrR6JaE9b&date=${choice}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setImageData(data);
                setError(null);
            })
            .catch(err => {
                setError(`Error: ${err}`);
            });
    };

    return (
        <div className="container-date">
            <h1>🚀 Búsqueda por fecha 🚀</h1>

            <div className='search'>
                <input type="date" value={choice} onChange={handleChange} />
                <button onClick={getImagesByDate}>Obtener Imagen</button>
            </div>

            {error && <p>{error}</p>}
            
            {imageData && (
                <div>
                    <h2>{imageData.title}</h2>
                    <img src={imageData.hdurl} alt={imageData.title} />
                    <p>{imageData.explanation}</p>
                </div>
            )}
        </div>
    );
};

export default NasaImagesByDate;
