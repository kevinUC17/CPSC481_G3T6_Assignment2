import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';
import { ReactComponent as Search } from './assets/navbar/SearchIcon.svg';
import { ReactComponent as Toolbar } from './assets/navbar/Toolbar.svg';
import { ReactComponent as UserIcon } from './assets/navbar/UserIcon.svg';

const Navbar = () => {
    return (
        <header>
        <nav>
          <ul>
            <li><a id = "textLink" href="home">Home</a></li>
            <li><a id = "textLink" href="about">About Us</a></li>
            <li><a id = "textLink" href="contact">Contact</a></li>
            <li className='iconLinks'>
              <a id = "icon" href="#home"><Search /></a>
              <a className = "userIcon" href="#home"><UserIcon /></a>
              <a id = "icon" href="#home"><Toolbar /></a>
            </li>
          </ul>
        </nav>
      </header>
    );
    
}

export default Navbar;