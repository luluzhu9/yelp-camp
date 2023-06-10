import React, {useState} from "react";
import YelpCampIcon from "./media/Logo.svg";
import "./Header.css";
import {auth} from "./firebase.js";

function Header({setSearchPageIsShown, setSignUpPageIsShown, user,
    setLoginPageIsShown, setSingleCampPageIsShown,
    setAddCommentPageIsShown, setAddCampPageIsShown, campData,
    setFilteredCamps, setCurrSearch}) {

    const [dropDownIsShown, setDropDownIsShown] = useState(false);

    const toggleSideBar = () => {
        setDropDownIsShown(!dropDownIsShown);
    }

    function handleCreateAccount (event) {
        setSearchPageIsShown(false);
        setSignUpPageIsShown(true);
        setLoginPageIsShown(false);
        setSingleCampPageIsShown(false);
        setAddCommentPageIsShown(false);
        setAddCampPageIsShown(false);
        window.scrollTo(0, 0);
    }

    function handleLogin (event) {
        setSearchPageIsShown(false);
        setLoginPageIsShown(true);
        setSignUpPageIsShown(false);
        setSingleCampPageIsShown(false);
        setAddCommentPageIsShown(false);
        setAddCampPageIsShown(false);
        window.scrollTo(0, 0);
    }

    function handleHome(event) {
        setCurrSearch("");
        setFilteredCamps(campData);
        setSearchPageIsShown(true);
        setSignUpPageIsShown(false);
        setLoginPageIsShown(false);
        setSingleCampPageIsShown(false);
        setAddCommentPageIsShown(false);
        setAddCampPageIsShown(false);
        window.scrollTo(0, 0);
    }

    async function handleLogout (event) {
        await auth.signOut()
        .then(value => {
            alert("Signed Out")
            setSearchPageIsShown(true);
            setSignUpPageIsShown(false);
            setLoginPageIsShown(false);
            setSingleCampPageIsShown(false);
            setAddCommentPageIsShown(false);
            setAddCampPageIsShown(false);
            setCurrSearch("");
            window.scrollTo(0, 0);
        })
        .catch(error => console.log(error));
    }

    return(
        <div className="all-header-container">
            <div className="header-container">
                <div className="header-left">
                    <img src={YelpCampIcon} alt="yelp camp icon"/>
                    <button onClick={handleHome}>Home</button>
                </div>
                <div className="header-right">
                    {user == null && (<button className="login-button" onClick={handleLogin}>Login</button>)}
                    {user == null && (<button className="create-account-button" onClick={handleCreateAccount}>Create an account</button>)}
                    {user != null && (<p className="user-email">{user.email}</p>)}
                    {user != null && (<p className="logout" onClick={handleLogout}>Logout</p>)}
                </div>
            </div>
            {<div className="mobile-header-container">
                <img src={YelpCampIcon} alt="yelp camp icon"/>
                {dropDownIsShown !== true && (
                    <i class="fa fa-bars" onClick={toggleSideBar}aria-hidden="true"></i>
                )}
                {dropDownIsShown === true && (
                    <i class="fa fa-times" style={{fontSize: 28}} onClick={toggleSideBar} aria-hidden="true"></i>
                )}
                
                {/*<i class="fa fa-bars" onClick={toggleSideBar}aria-hidden="true"></i>*/}
                {dropDownIsShown &&  (
                    <div className="drop-down">
                        {user == null && (<div onClick={handleHome}>Home</div>)}
                        {user == null && (<div onClick={handleLogin}>Login</div>)}
                        {user == null && (<div onClick={handleCreateAccount}>Create an account</div>)}

                        {user != null && (<p>{user.email}</p>)}
                        {user != null && (<div onClick={handleHome}>Home</div>)}
                        {user != null && (<div onClick={handleLogout}>Logout</div>)}
                    </div>
                )}
            </div>}
        </div>
    )
}

export default Header;