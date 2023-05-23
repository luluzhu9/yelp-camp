import React from 'react';
import './HelperBanner.css';

function HelperBanner (){
    return(
        <div className="helper-banner-container">
            <div className="helper-banner-inner">   
                <h1>Welcome to YelpCamp!</h1>
                <p className="info">View our hand-picked campgrounds from all over the world, or add your own.</p>
                <form className="search-bar">
                    <i class="icon fa fa-search"></i>
                    <input type="search" placeholder="Search for camps"></input>
                    <button type="submit">Search</button>
                </form>
                <p className="add-campground">Or add your own campground</p>
            </div>
        </div>
    )
}

export default HelperBanner;

/* todo: add container with 40% width inside helper-banner-container */