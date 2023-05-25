import React from 'react';
import './Card.css';

function Card({camp, setCurrCamp, setSearchPageIsShown}) {
    function handleViewCamp (event) {
        setCurrCamp(camp);
        setSearchPageIsShown(false);
    }

    return(
        <div className="card-container">
            <img src={camp.picture} alt="camp"></img>
            <h1>{camp.name}</h1>
            <p>{camp.description}</p>
            <button onClick={handleViewCamp}>View Campground</button>
        </div>
    )
}

export default Card;