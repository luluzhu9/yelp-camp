import React from 'react';
import Header from './Header.js';
import HelperBanner from './HelperBanner.js';
import Card from './Card.js';
import './SearchPage.css'

function SearchPage({campData}) {
    return(
        <div className="search-page">
            <Header />
            <HelperBanner />
            <div className="gallery-container">
                {console.log('here')}
                {console.log(campData)}
                {Object.keys(campData).length !== 0 && campData.map((camp) => (
                    <Card camp={camp} />
                ))}
            </div>
        </div>
    )
}

export default SearchPage;