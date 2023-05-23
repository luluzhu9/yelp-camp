import React, {useState, useEffect} from 'react';
import database from './firebase.js';
import './App.css';
import LandingPage from './LandingPage.js';
import SearchPage from './SearchPage.js';

function App() {
  const [landingIsShown, setLandingIsShown] = useState(true);
  const [campData, setCampData] = useState([]);
  
  /* GET data from Firebase Realtime Database */
  useEffect(() => {
        let ref = database.ref("/camps");
        try {
          ref.on("value", snapshot => {
            let data = snapshot.val();
            setCampData(data);
            /*let tempArray = [];
            snapshot.forEach((childSnapshot) => {
              tempArray[childSnapshot.key] = childSnapshot.val();
              setCampData(JSON.stringify(tempArray));
            });*/
          })
        } catch (error) {
          console.log(error);
        }
  }, []);

  return (
    <div className="App">
      {landingIsShown && (<LandingPage setLandingIsShown={setLandingIsShown}/>)}
      {!landingIsShown && (<SearchPage campData={campData}/>)}
    </div>
  );
}

export default App;
