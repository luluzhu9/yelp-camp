import React from 'react';
import YelpCampIcon from './media/Logo.svg';
import HeroImage from './media/Hero Image.jpg';
import AirbnbLogo from './media/Airbnb.svg';
import BookingLogo from './media/Booking.svg';
import PlumLogo from './media/Plum Guide.svg';
import './LandingPage.css';

function LandingPage({setLandingIsShown, setSearchPageIsShown}) {
    function handleViewCampgrounds(event) {
        setLandingIsShown(false);
        setSearchPageIsShown(true);
        window.scrollTo(0, 0);
    }

    return(
        <div className="landing-page">
            <div className="landing-page-left">
                <img src={YelpCampIcon} alt="yelp camp icon"/>
                <div className="landing-page-left-centered">
                    <h1>Explore the best camps on Earth.</h1>
                    <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                    <ul className="landing-page-list">
                        <li>Add your own camp suggestions.</li>
                        <li>Leave reviews and experiences.</li>
                        <li>See locations for all camps.</li>
                    </ul>
                    <button onClick={handleViewCampgrounds}>View Campgrounds</button>
                    <p>Partnered with:</p>
                    <div className="sponsor-gallery">
                        <img src={AirbnbLogo} alt="airbnb-logo"/>
                        <img src={BookingLogo} alt="booking-logo"/>
                        <img src={PlumLogo} alt="plum-logo"/>
                    </div>
                </div>
            </div>
            <img src={HeroImage} alt="yelp camp icon"/>
        </div>
    )
}

export default LandingPage;