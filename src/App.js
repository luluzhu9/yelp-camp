import React, {useState, useEffect} from 'react';
import {database, auth} from './firebase.js';
import './App.css';
import LandingPage from './LandingPage.js';
import SearchPage from './SearchPage.js';
import SignUpInPage from './SignUpInPage.js';
import SingleCampPage from './SingleCampPage.js';

function App() {
  const [campData, setCampData] = useState([]);

  /* State that control which pages are open/closed */
  const [landingIsShown, setLandingIsShown] = useState(true);
  const [searchPageIsShown, setSearchPageIsShown] = useState(false);
  const [signUpPageIsShown, setSignUpPageIsShown] = useState(false);
  const [loginPageIsShown, setLoginPageIsShown] = useState(false);

  /* Campsite for single camp page, used to toggle page on and off */
  const [currCamp, setCurrCamp] = useState(null);

  /* User auth states*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  
  /* GET data from Firebase Realtime Database */
  useEffect(() => {
        let ref = database.ref("/camps");
        try {
          ref.on("value", snapshot => {
            let data = snapshot.val();
            setCampData(data);
          })
        } catch (error) {
          console.log(error);
        }
  }, []);

  /* Check if user is logged in or not */
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, []);

  return (
    <div className="App">
      {landingIsShown && (<LandingPage setLandingIsShown={setLandingIsShown} 
        setSearchPageIsShown={setSearchPageIsShown}/>)}
      {searchPageIsShown && (<SearchPage campData={campData} setSearchPageIsShown={setSearchPageIsShown} 
        setSignUpPageIsShown={setSignUpPageIsShown} user={user} setLoginPageIsShown={setLoginPageIsShown}
        setCurrCamp={setCurrCamp}/>)}
      {(signUpPageIsShown || loginPageIsShown) && (<SignUpInPage email={email} setEmail={setEmail} password={password} 
        setPassword={setPassword} setSignUpPageIsShown={setSignUpPageIsShown} 
        setSearchPageIsShown={setSearchPageIsShown} loginPageIsShown={loginPageIsShown}
        setLoginPageIsShown={setLoginPageIsShown}/> )}
      {currCamp != null && (<SingleCampPage setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
                user={user} setLoginPageIsShown={setLoginPageIsShown}/>)}
    </div>
  );
}

export default App;
