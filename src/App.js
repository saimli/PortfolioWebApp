import logo from './logo.svg';
import './App.css';
import backimg from './img/background.jpg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Popup from './views/popup'
import InnerPopup from './views/innerpopup'

import Error from './views/errorPage';
import {useState} from 'react';



function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);

  return (
    <Router>
      <div>
      <div class="background-image"></div>

        <main>
        <h1>Trying this out</h1>
      <br></br>
      <button onClick={() => setButtonPopup(true)}>Open Monitor</button>
        </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>my popup</h3>
        <button onClick={() => setAboutPopup(true)}>Open About Popup</button>

<InnerPopup class="innerpopup" trigger={aboutPopup} setTrigger={setAboutPopup}>
  <h3>About Popup</h3>
  <p>This is the about popup.</p>
</InnerPopup>
      </Popup>

        {/* <nav>
          <Link to="/home2">Monitor</Link>
          <Link to="/home2">Hi</Link>
          <Link to="/room">Room</Link>
        </nav> */}

      </div>
      {/* <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/home2" element = {<Home2/>} />
        <Route path = "/room" element = {<Room/>} />
        <Route path = "*" element = {<Error/>} />
      </Routes> */}
    </Router>
  );
}

export default App;
