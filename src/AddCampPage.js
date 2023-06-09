import React from "react";
import "./AddCampPage.css";
import Header from "./Header.js";
import YelpCampIcon from "./media/Logo.svg";
import {database} from "./firebase.js";

function AddCampPage({setSearchPageIsShown, setSignUpPageIsShown,
    user, setLoginPageIsShown, setSingleCampPageIsShown,
    setAddCommentPageIsShown, setAddCampPageIsShown, campData,
    setFilteredCamps, setCurrSearch}) {

    var campName = "";
    var price = "";
    var imageLink = "";
    var mainDescrip = "";

    function handleSubmitCamp (event) {
        event.preventDefault();

        /* Format price string */
        price = price.replace("$", "");

        /* Chop off mainDescrip at first period for description */
        let descrip = mainDescrip.split(".")[0];

        /* Calculate new ID based on how many camps there are */
        let newID;
        const campsRef = database.ref("camps");
        campsRef.on("value", snapshot => {
            newID = Object.keys(snapshot.val()).length + 1;
        })

        try {
            database.ref("camps/" + newID).set({
                descripBy: user.email.split("@")[0],
                description: descrip,
                mainDescrip: mainDescrip,
                name: campName,
                picture: imageLink,
                price: price,
                reviews: ""
            })
            alert("Success");
            setSearchPageIsShown(true);
            setSingleCampPageIsShown(false);
            setSignUpPageIsShown(false);
            setLoginPageIsShown(false);
            setAddCommentPageIsShown(false);
            setAddCampPageIsShown(false);
            window.scrollTo(0, 0);
        } catch (err) {
            alert("Add Campground Failed");
        }
    }

    return(
        <div className="add-camp-container">
            <Header setSearchPageIsShown={setSearchPageIsShown}
                setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown}
                setSingleCampPageIsShown={setSingleCampPageIsShown}
                setAddCommentPageIsShown={setAddCommentPageIsShown}
                setAddCampPageIsShown={setAddCampPageIsShown}
                campData={campData} setFilteredCamps={setFilteredCamps}
                setCurrSearch={setCurrSearch}/>
            <div className="add-camp-center">
                <h1>Add New Campground</h1>
                <form onSubmit={handleSubmitCamp}>
                    <label for="camp-name">Campground Name</label>
                    <input type="text" name="camp-name" onChange={(e) => campName=e.target.value} placeholder="Seven Sisters Waterfall" required/>

                    <label for="price">Price</label>
                    <input type="text" name="price" onChange={(e) => price=e.target.value} placeholder="$149" required/>

                    <label for="image">Image</label>
                    <input type="text" name="image" onChange={(e) => imageLink=e.target.value} 
                        placeholder="https://www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html" required/>

                    <label for="descrip">Description</label>
                    <textarea type="text" name="descrip" onChange={(e) => mainDescrip=e.target.value}
                        placeholder="The Seven Sisters is the 39th 
                        tallest waterfall in Norway. The 410-metre tall waterfall consists of seven 
                        separate streams, and the tallest of the seven has a free fall that measures 
                        250 metres. The waterfall is located along the Geirangerfjorden in Stranda 
                        Municipality in More og Romsdal county, Norwav." required/>

                    <button>Add Campground</button>
                </form>
            </div>
            <img className="yelp-camp-icon" src={YelpCampIcon} alt="yelp camp icon"/>
        </div>
    )
}

export default AddCampPage;