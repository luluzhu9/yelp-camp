import React from 'react';
import './AddCommentPage.css';
import Header from './Header.js';
import YelpCampIcon from './media/Logo.svg';

function AddCommentPage ({setSearchPageIsShown, setSignUpPageIsShown, user, setLoginPageIsShown, setCurrCamp}) {
    return(
        <div className="comment-page">
            <Header setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown} setCurrCamp={setCurrCamp}/>
            <div className="comment-page-center">
                <h1>Add New Comment</h1>
                <p>Description</p>
                <textarea placeholder="This was probably the best camp I've visited this past year, definitely recommend visiting anytime soon."></textarea>
                <button>Post Comment</button>
            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default AddCommentPage;