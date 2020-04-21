import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">Logo</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
