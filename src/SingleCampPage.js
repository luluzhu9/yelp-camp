import React from 'react';
import './SingleCampPage.css';
import Header from './Header.js';
import YelpCampIcon from './media/Logo.svg';
import Map from './media/Map.png';

function SingleCampPage ({setSearchPageIsShown, setSignUpPageIsShown, user, setLoginPageIsShown}) {
    return(
        <div className="single-camp-page-container">
            <Header setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown}/>
            <div className="single-camp-column">
                <img src={Map} alt="map"></img>

            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default SingleCampPage;