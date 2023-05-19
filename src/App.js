import React, {useState} from 'react';
import './App.css';
import LandingPage from './LandingPage.js';
import SearchPage from './SearchPage.js';

function App() {

  const [landingIsShown, setLandingIsShown] = useState(true);

  return (
    <div className="App">
      {landingIsShown && (<LandingPage setLandingIsShown={setLandingIsShown}/>)}
      {!landingIsShown && (<SearchPage />)}
    </div>
  );
}

export default App;
