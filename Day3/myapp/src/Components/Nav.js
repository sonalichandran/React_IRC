import React from 'react';
import { FaCamera } from 'react-icons/fa';

function Nav() {
  return (
    <div className="hello">
        <div className="topic">

      <h1>
        <FaCamera />
      </h1>
      <h2>

        WiLdLeNsCaPtUrEs 
      </h2>
        </div>

      <a href="Home">Home</a>
      <a href="Explore">Explore</a>
      <a href="About">Gallery</a>
      <a href="Contact us">ContactUs</a>
    </div>
  );
}

export default Nav;