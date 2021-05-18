import React from "react";
import "../styles/styles.css";
import pic from '../images/Bit1.PNG';

function Header() {
  return (
    <header className="subnav-hero-section">
      <div className="my-hero-container">
        <h2 className="subnav-hero-headling my-heading">Hi, I'm Coleen</h2>
        <img className="my-pic"src={pic} alt="Profile Picture" />
        <h5 className="my-htext">I'm a full-stack web developer</h5>
        <h5 className="my-htext">Welcome to my profile</h5>
      </div>
      <ul class="subnav-hero-subnav">
        <li><a href="#my-work" class="is-active">Work</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#contact-me">Contact</a></li>
      </ul>
    </header>
    )
}

export default Header;