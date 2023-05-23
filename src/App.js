import React, {useState, useEffect} from 'react';
import database from './firebase.js';
import './App.css';
import LandingPage from './LandingPage.js';
import SearchPage from './SearchPage.js';
import SignUpPage from './SignUpPage.js';

function App() {
  const [campData, setCampData] = useState([]);
  const [landingIsShown, setLandingIsShown] = useState(true);
  const [searchPageIsShown, setSearchPageIsShown] = useState(false);
  const [signUpPageIsShown, setSignUpPageIsShown] = useState(false);
  
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

  return (
    <div className="App">
      {landingIsShown && (<LandingPage setLandingIsShown={setLandingIsShown} setSearchPageIsShown={setSearchPageIsShown}/>)}
      {searchPageIsShown && (<SearchPage campData={campData} setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}/>)}
      {signUpPageIsShown && (<SignUpPage />)}
    </div>
  );
}

export default App;
