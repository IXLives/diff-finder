// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Create this CSS file

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
      <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        {/* Add more navigation links for other sections */}
      </ul>
    </nav>
  );
};

export default Navigation;
