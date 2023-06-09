import React from "react";
import Header from "./Header.js";
import HelperBanner from "./HelperBanner.js";
import Card from "./Card.js";
import "./SearchPage.css"
import YelpCampIcon from "./media/Logo.svg";
import {database} from "./firebase.js";

function SearchPage({filteredCamps, setSearchPageIsShown, setSignUpPageIsShown,
    user, setLoginPageIsShown, setSingleCampPageIsShown, setCurrCamp, setCurrID,
    setAddCommentPageIsShown, setAddCampPageIsShown,campData, setFilteredCamps,
    setCurrSearch, currSearch}) {

        function getId(campName) {
            const campsRef = database.ref("camps");
            var key;

            campsRef.on("value", snapshot => {
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
            <Header setSearchPageIsShown={setSearchPageIsShown}
                setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown}
                setSingleCampPageIsShown={setSingleCampPageIsShown}
                setAddCommentPageIsShown={setAddCommentPageIsShown}
                setAddCampPageIsShown={setAddCampPageIsShown}
                campData={campData} setFilteredCamps={setFilteredCamps}
                currSearch={currSearch} setCurrSearch={setCurrSearch}/>
            <HelperBanner user={user} setAddCampPageIsShown={setAddCampPageIsShown} 
                setSearchPageIsShown={setSearchPageIsShown} campData={campData} setFilteredCamps={setFilteredCamps}
                setCurrSearch={setCurrSearch} currSearch={currSearch}/>
            <div className="gallery-container">
                {Object.keys(filteredCamps).length !== 0 && filteredCamps.map((camp) => (
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