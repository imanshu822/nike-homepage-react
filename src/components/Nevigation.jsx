import nikeLogo from "./images/brand_logo.png";
import React from "react";

function Nevigation() {
  return (
    <nav className="container">
      <div className="logo">
        <img src={nikeLogo} alt="brand_logo_image" />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button>LOGIN</button>
    </nav>
  );
}

export default Nevigation;