import React from 'react';
import './SignUpInPage.css';
import UserTestimonial from './media/User Testimonial.svg';
import YelpCampIcon from './media/Logo.svg';
import {auth} from './firebase.js';

function SignUpInPage({email, setEmail, password, setPassword, setSignUpPageIsShown, 
    setSearchPageIsShown, loginPageIsShown, setLoginPageIsShown}) {

    async function handleSubmit (event) {
        event.preventDefault();

        if(loginPageIsShown) {
            await auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result.user);
                alert('Login Successful!')
            })
            .catch(error => alert(error.message))
            setEmail('');
            setPassword('');
        } else {
            await auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result.user);
                alert('Sign Up Successful!')
            })
            .catch(error => alert(error.message))
            setEmail('');
            setPassword('');
        }
    }

    function handleSignIn (event) {
        event.preventDefault();
        setSignUpPageIsShown(false);
        setLoginPageIsShown(true);
    }

    function handleCreateAccount (event) {
        event.preventDefault();
        setSignUpPageIsShown(true);
        setLoginPageIsShown(false);
    }

    function handleBackToCamp (event) {
        setSignUpPageIsShown(false);
        setLoginPageIsShown(false);
        setSearchPageIsShown(true);
    }

    return(
        <div className="sign-up-page-container">
            <div className="sign-up-left">
                <div className="sign-up-header">
                    <img src={YelpCampIcon} alt="yelp camp icon"/>
                    <div className="arrow-back-to-campgrounds">  
                        <i class="fa fa-long-arrow-left"></i>
                        <p onClick={handleBackToCamp}>Back to campgrounds</p>
                    </div>
                </div>
                <div className="sign-up-left-center">
                    <h1>Start exploring camps from all around the world.</h1>
                    {/* Sign up/login form */}
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <label for="email">Username</label>
                        <input type="text" className="email-field"placeholder="johndoe_91" name="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        <label for="password">Password</label>
                        <input type="password" className="password-field" placeholder="Choose Password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                        {loginPageIsShown === true ? 
                            (<button type="submit" className="login">Login</button>) : 
                            (<button type="submit" className="create-an-account">Create an account</button>)}
                        <div className="toggle-sign-in-up">
                            {loginPageIsShown === true ? (<p>Not a user yet?</p>) : (<p>Already a user?</p>)}
                            {loginPageIsShown === true ? (<button onClick={handleCreateAccount}>Create an account</button>) : (<button onClick={handleSignIn}>Sign in</button>)}
                        </div>
                    </form>
                </div>
            </div>
            <div className="sign-up-right">
                <h1 className="user-review">"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."</h1>
                <div className="sign-up-row">
                    <img src={UserTestimonial} alt="user testimonial"/>
                    <div className="sign-up-column">
                        <h1>May Andrews</h1>
                        <p>Professional Hiker</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpInPage;