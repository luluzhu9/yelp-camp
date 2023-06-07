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

    var updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)

    dayjs.updateLocale('en', {
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: 'a few seconds',
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        }
    });

    function handleComment (event) {
        event.preventDefault();
        /* Calculate new ID based on number of items in reviews object */
        let newID = currCamp.reviews.length;

        let currTime = dayjs();
        currTime = currTime.format();

        try {
            database.ref('camps/' + currID + '/reviews/' + newID).set({
                datePosted: currTime,
                reviewer: user.email,
                submission: submission
            })
            alert('success');
            setAddCommentPageIsShown(false);
            setSingleCampPageIsShown(true);
            window.scrollTo(0, 0);
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