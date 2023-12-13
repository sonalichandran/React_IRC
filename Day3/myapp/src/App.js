import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './Assets/Css/nav.css';
import Home from './Components/Home';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div>
      <div className="back">
        <Nav />
        <Home />
      </div>

      {/* <div>
        <Gallery />
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
