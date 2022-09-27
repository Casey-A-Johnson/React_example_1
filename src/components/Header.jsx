import React from 'react';
import { Link } from 'react-router-dom';
import '../static/Header.css';

const Header = () => {
  return (
    <div className="navbar">
      <div className="Name">
        <h1>Casey Johnson</h1>
      </div>
      <div className="List">
        <ul className="items">
          <Link
            className="link"
            style={{ textDecoration: 'none', color: 'black' }}
            to="/About"
          >
            <li>About Me</li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: 'none', color: 'black' }}
            to="/Portfolio"
          >
            <li>Portfolio</li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: 'none', color: 'black' }}
            to="/Contact"
          >
            <li>Contact</li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: 'none', color: 'black' }}
            to="/Resume"
          >
            <li>Resume</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
