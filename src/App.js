import React, {useState, useEffect} from "react";
import {database, auth} from "./firebase.js";
import "./App.css";
import LandingPage from "./LandingPage.js";
import SearchPage from "./SearchPage.js";
import SignUpInPage from "./SignUpInPage.js";
import SingleCampPage from "./SingleCampPage.js";
import AddCommentPage from "./AddCommentPage.js";
import AddCampPage from "./AddCampPage.js";

function App() {
  const [filteredCamps, setFilteredCamps] = useState([]);
  const [campData, setCampData] = useState([]);

  /* State that control which pages are open/closed */
  const [landingIsShown, setLandingIsShown] = useState(true);
  const [searchPageIsShown, setSearchPageIsShown] = useState(false);
  const [signUpPageIsShown, setSignUpPageIsShown] = useState(false);
  const [loginPageIsShown, setLoginPageIsShown] = useState(false);
  const [addCommentPageIsShown, setAddCommentPageIsShown] = useState(false);
  const [singleCampPageIsShown, setSingleCampPageIsShown] = useState(false);
  const [addCampPageIsShown, setAddCampPageIsShown] = useState(false);

  /* Stores what campsite user is currently viewing */
  const [currCamp, setCurrCamp] = useState(null);

  /* ID of campsite user is currently viewing */
  const [currID, setCurrID] = useState(null);

  /* Search value for resetting when leaving search page*/
  const [currSearch, setCurrSearch] = useState("");

  /* User auth states*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  /* GET data from Firebase Realtime Database */
  useEffect(() => {
        let ref = database.ref("/camps");
        try {
          ref.on("value", snapshot => {
            let data = snapshot.val();
            setFilteredCamps(data);
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
      
      {searchPageIsShown && (<SearchPage filteredCamps={filteredCamps} setSearchPageIsShown={setSearchPageIsShown} 
        setSignUpPageIsShown={setSignUpPageIsShown} user={user} setLoginPageIsShown={setLoginPageIsShown}
        setSingleCampPageIsShown={setSingleCampPageIsShown} setCurrCamp={setCurrCamp} setCurrID={setCurrID}
        setAddCommentPageIsShown={setAddCommentPageIsShown} setAddCampPageIsShown={setAddCampPageIsShown}
        campData={campData} setFilteredCamps={setFilteredCamps} setCurrSearch={setCurrSearch}
        currSearch={currSearch}/>)}
      
      {(signUpPageIsShown || loginPageIsShown) && (<SignUpInPage email={email} setEmail={setEmail} password={password} 
        setPassword={setPassword} setSignUpPageIsShown={setSignUpPageIsShown} 
        setSearchPageIsShown={setSearchPageIsShown} loginPageIsShown={loginPageIsShown}
        setLoginPageIsShown={setLoginPageIsShown} setCurrSearch={setCurrSearch}
        campData={campData} setFilteredCamps={setFilteredCamps} setSingleCampPageIsShown={setSingleCampPageIsShown}/> )}
      
      {singleCampPageIsShown && (<SingleCampPage setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
        user={user} setLoginPageIsShown={setLoginPageIsShown} setSingleCampPageIsShown={setSingleCampPageIsShown} currCamp={currCamp}
        setAddCommentPageIsShown={setAddCommentPageIsShown} setAddCampPageIsShown={setAddCampPageIsShown} campData={campData}
        setFilteredCamps={setFilteredCamps} setCurrSearch={setCurrSearch}/>)}
      
      {addCommentPageIsShown && (<AddCommentPage setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
        user={user} setLoginPageIsShown={setLoginPageIsShown} setSingleCampPageIsShown={setSingleCampPageIsShown} currCamp={currCamp}
        currID={currID} setAddCommentPageIsShown={setAddCommentPageIsShown} setAddCampPageIsShown={setAddCampPageIsShown}
        campData={campData} setFilteredCamps={setFilteredCamps} setCurrSearch={setCurrSearch}/>)}

      {addCampPageIsShown && (<AddCampPage setSearchPageIsShown={setSearchPageIsShown} setSignUpPageIsShown={setSignUpPageIsShown}
        user={user} setLoginPageIsShown={setLoginPageIsShown} setSingleCampPageIsShown={setSingleCampPageIsShown}
        setAddCommentPageIsShown={setAddCommentPageIsShown} setAddCampPageIsShown={setAddCampPageIsShown}
        campData={campData} setFilteredCamps={setFilteredCamps} setCurrSearch={setCurrSearch}/>)}
    </div>
  );
}

export default App;
