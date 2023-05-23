import React from 'react';
import Header from './Header.js';
import HelperBanner from './HelperBanner.js';
import Card from './Card.js';
import './SearchPage.css'
import YelpCampIcon from './media/Logo.svg';

function SearchPage({campData, setSearchPageIsShown, setSignUpPageIsShown}) {
    return(
        <div className="search-page">
            <Header setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}/>
            <HelperBanner />
            <div className="gallery-container">
                {Object.keys(campData).length !== 0 && campData.map((camp) => (
                    <Card camp={camp} />
                ))}
            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default SearchPage;