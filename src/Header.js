import React from 'react';
import YelpCampIcon from './media/Logo.svg';
import './Header.css';
import {auth} from './firebase.js';

function Header({setSearchPageIsShown, setSignUpPageIsShown, user, setLoginPageIsShown, setCurrCamp}) {
    function handleCreateAccount (event) {
        setSearchPageIsShown(false);
        setSignUpPageIsShown(true);
        setLoginPageIsShown(false);
    }

    function handleLogin (event) {
        setSearchPageIsShown(false);
        setLoginPageIsShown(true);
        setSignUpPageIsShown(false);
    }

    function handleHome(event) {
        setSearchPageIsShown(true);
        setSignUpPageIsShown(false);
        setLoginPageIsShown(false);
        setCurrCamp(null);
    }

    async function handleLogout (event) {
        await auth.signOut()
        .then(alert('Signed Out'))
        .catch(error => console.log(error));
    }

    return(
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
    )
}

export default Header;