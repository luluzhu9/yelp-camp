import React from 'react';
import Header from './Header.js';
import HelperBanner from './HelperBanner.js';
import Card from './Card.js';
import './SearchPage.css'
import YelpCampIcon from './media/Logo.svg';
import {database} from './firebase.js';

function SearchPage({campData, setSearchPageIsShown, setSignUpPageIsShown, user, setLoginPageIsShown, 
    setSingleCampPageIsShown, setCurrCamp, setCurrID, setAddCommentPageIsShown}) { 
    
        function getId(campName) {
            const campsRef = database.ref('camps');
            var key; 

            campsRef.on('value', snapshot => {
                snapshot.forEach(child => {
                    if(child.val().name === campName){
                        key = child.key;
                    }
                })
            })
            return key;
        }
        
        return(
        <div className="search-page">
            <Header setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown} setSingleCampPageIsShown={setSingleCampPageIsShown}
                setAddCommentPageIsShown={setAddCommentPageIsShown}/>
            <HelperBanner user={user}/>
            <div className="gallery-container">
                {Object.keys(campData).length !== 0 && campData.map((camp) => (
                    <Card camp={camp} setSingleCampPageIsShown={setSingleCampPageIsShown} 
                    setSearchPageIsShown={setSearchPageIsShown} setCurrCamp={setCurrCamp}
                    id={getId(camp.name)} setCurrID={setCurrID}/>
                ))}
            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default SearchPage;