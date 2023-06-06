import React from 'react';
import './AddCommentPage.css';
import Header from './Header.js';
import YelpCampIcon from './media/Logo.svg';
import {database} from './firebase.js';

function AddCommentPage ({setSearchPageIsShown, setSignUpPageIsShown, user, setLoginPageIsShown, 
    setSingleCampPageIsShown, currCamp, currID, setAddCommentPageIsShown, setAddCampPageIsShown, 
    campData, setFilteredCamps, setCurrSearch}) {
    
    var submission = "";

    const dayjs = require('dayjs');
    var relativeTime = require('dayjs/plugin/relativeTime');
    dayjs().format();
    dayjs.extend(relativeTime);

    function handleComment (event) {
        event.preventDefault();
        /* Calculate new ID based on number of items in reviews object */
        let newID = currCamp.reviews.length;

        /* Get current time and format */
        let month = dayjs().month() + 1;
        if (month < 10){
            month = '0' + month;
        }

        let date = dayjs().date();
        if (date < 10){
            date = '0' + date;
        }
        let currTime = dayjs().year() + '-' + month + '-' + date;

        try {
            /* TODO: I think I need to await this one to make sure it's completely done*/
            database.ref('camps/' + currID + '/reviews/' + newID).set({
                datePosted: currTime,
                reviewer: user.email,
                submission: submission
            })
            alert('success');
            setAddCommentPageIsShown(false);
            setSingleCampPageIsShown(true);
        } catch (err) {
            alert(err);
        }

    }
    
    return(
        <div className="comment-page">
            <Header setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown} setSingleCampPageIsShown={setSingleCampPageIsShown}
                setAddCommentPageIsShown={setAddCommentPageIsShown} setAddCampPageIsShown={setAddCampPageIsShown}
                campData={campData} setFilteredCamps={setFilteredCamps} setCurrSearch={setCurrSearch}/>
            <div className="comment-page-center">
                <h1>Add New Comment</h1>
                <p>Description</p>
                <form className="comment-form" onSubmit={handleComment}>
                    <textarea onChange={(e) => submission=e.target.value} placeholder="This was probably the best camp I've visited this past year, definitely recommend visiting anytime soon." required></textarea>
                    <button>Post Comment</button>
                </form>
            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default AddCommentPage;