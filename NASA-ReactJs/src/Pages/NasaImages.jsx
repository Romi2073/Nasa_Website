import React, { useState, useEffect } from 'react';
import "../Stylesheets/nasaimages.css"

const NasaImages = () => {
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        getImages();

        return () => {
           
        };

    }, []);

    const getImages = () => {
        const Api_key = 'kBma1GvOcRws3yF58vrbYGNjoQJmHd1NrR6JaE9b';
        const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Api_key}&count=10`;

        fetch(ruta)
            .then(response => response.json())
            .then(data => setImagesData(data))
            .catch(error => console.error('Error fetching images:', error));
    };

    return (
        <div className='gallery-nasa'>
            <h2>GALERÍA DE LA NASA  🚀</h2>
            <button className="updateButton" onClick={getImages}>Actualizar</button>
            <div className="gallery">
                {imagesData.map(({ date, explanation, title, url }, index) => (
                    <div key={index}>
                        <h3>{title}</h3>
                        <img src={url} alt={url} />
                        <p>{date}</p>
                        <h5>{explanation}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NasaImages;
