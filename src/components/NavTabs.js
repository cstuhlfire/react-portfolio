import React from "react";
import { Link } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // track the current URL with lo
  // const location = useLocation();

  return (
    <ul className="subnav-hero-subnav">
      <li className="is-active">
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>  
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>

  );
}

export default NavTabs;
