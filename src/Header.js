import React from 'react';
import YelpCampIcon from './media/Logo.svg';
import './Header.css';

function Header({setSearchPageIsShown, setSignUpPageIsShown}) {
    function handleCreateAccount (event) {
        setSearchPageIsShown(false);
        setSignUpPageIsShown(true);
    }

    return(
        <div className="header-container">
            <div className="header-left">
                <img src={YelpCampIcon} alt="yelp camp icon"/>
                <button>Home</button>
            </div>
            <div className="header-right">
                <button className="login-button">Login</button>
                <button className="create-account-button" onClick={handleCreateAccount}>Create an account</button>
            </div>
            
        </div>
    )
}

export default Header;