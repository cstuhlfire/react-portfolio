import React from "react";
import NavTabs from "./NavTabs";
import "../styles/styles.css";
import BitmojiPic from './projects/images/Bit1.PNG';

function Header() {
  return (
    <header className="subnav-hero-section">
      <div className="my-hero-container">
        <h2 className="subnav-hero-headling my-heading">Hi, I'm Coleen</h2>
        <img className="my-pic" src={BitmojiPic} alt="Profile" />
        <h5 className="my-htext">I'm a full-stack web developer</h5>
        <h5 className="my-htext">Welcome to my profile</h5>
      </div>
      <NavTabs />
    </header>
    )
}

export default Header;