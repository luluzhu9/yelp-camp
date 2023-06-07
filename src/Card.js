import React from 'react';
import './Card.css';

function Card({camp, setSingleCampPageIsShown, setSearchPageIsShown, setCurrCamp, id, setCurrID}) {
    function handleViewCamp (event) {
        setSingleCampPageIsShown(true);
        setSearchPageIsShown(false);
        setCurrCamp(camp);
        setCurrID(id);
        window.scrollTo(0, 0);
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