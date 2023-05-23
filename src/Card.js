import React from 'react';
import './Card.css';

function Card({camp}) {
    return(
        <div className="card-container">
            <img src={camp.picture} alt="camp"></img>
            <h1>{camp.name}</h1>
            <p>{camp.description}</p>
            <button>View Campground</button>
        </div>
    )
}

export default Card;