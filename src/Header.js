import YelpCampIcon from './media/Logo.svg';
import './Header.css';

function Header() {
    return(
        <div className="header-container">
            <div className="header-left">
                <img src={YelpCampIcon} alt="yelp camp icon"/>
                <button>Home</button>
            </div>
            <div className="header-right">
                <button className="login-button">Login</button>
                <button className="create-account-button">Create an account</button>
            </div>
            
        </div>
    )
}

export default Header;