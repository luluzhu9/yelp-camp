import React from 'react';
import './SingleCampPage.css';
import Header from './Header.js';
import Review from './Review.js';
import YelpCampIcon from './media/Logo.svg';
import Map from './media/Map.png';

function SingleCampPage ({setSearchPageIsShown, setSignUpPageIsShown, user, setLoginPageIsShown, 
    setCurrCamp, currCamp, setAddCommentPageIsShown}) {

    function handleLeaveReview (event) {
        setAddCommentPageIsShown(true);
        setCurrCamp(null);
    }

    return(
        <div className="single-camp-page-container">
            <Header setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown} setCurrCamp={setCurrCamp}/>
            <div className="main-body">
                <img className="map-image" src={Map} alt="map"></img>
                <div className="single-camp-column">
                    <div className="main-descrip">
                        <img className="camp-image" src={currCamp.picture} alt="camp"></img>
                        <div className="main-descrip-row">
                            <h1>{currCamp.name}</h1>
                            <p>${currCamp.price}/night</p>
                        </div>
                        <p className="long-descrip">{currCamp.mainDescrip}</p>
                        <p className="submitted-by">Submitted By {currCamp.descripBy}</p>
                    </div>
                    <div className="reviews-container">
                        {currCamp.reviews.map(review => (
                            <Review review={review}/>
                        ))}
                        {user != null && (
                            <button className="leave-review-btn" onClick={handleLeaveReview}>
                                <i class="fa fa-commenting-o" aria-hidden="true"></i>Leave a Review
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default SingleCampPage;