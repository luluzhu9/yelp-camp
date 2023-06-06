import React from 'react';
import './AddCampPage.css';
import Header from './Header.js';
import YelpCampIcon from './media/Logo.svg';

function AddCampPage({setSearchPageIsShown, setSignUpPageIsShown, 
    user, setLoginPageIsShown, setSingleCampPageIsShown, setAddCommentPageIsShown, setAddCampPageIsShown, 
    campData, setFilteredCamps, setCurrSearch}) {

    /* Note: strip dollar sign from price to make sure input style is correct */

    return(
        <div className="add-camp-container">
            <Header setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown} setSingleCampPageIsShown={setSingleCampPageIsShown}
                setAddCommentPageIsShown={setAddCommentPageIsShown} setAddCampPageIsShown={setAddCampPageIsShown}
                campData={campData} setFilteredCamps={setFilteredCamps} setCurrSearch={setCurrSearch}/>
            <div className="add-camp-center">
                <h1>Add New Campground</h1>
                <form>
                    <label for="camp-name">Campground Name</label>
                    <input type="text" name="camp-name" placeholder="Seven Sisters Waterfall"/>

                    <label for="price">Price</label>
                    <input type="text" name="price" placeholder="$149"/>

                    <label for="image">Image</label>
                    <input type="text" name="image" placeholder="https://www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html"/>

                    <label for="descrip">Description</label>
                    <textarea type="text" name="descrip" placeholder="The Seven Sisters is the 39th 
                        tallest waterfall in Norway. The 410-metre tall waterfall consists of seven 
                        separate streams, and the tallest of the seven has a free fall that measures 
                        250 metres. The waterfall is located along the Geirangerfjorden in Stranda 
                        Municipality in More og Romsdal county, Norwav."/>

                    <button>Add Campground</button>
                </form>
            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default AddCampPage;