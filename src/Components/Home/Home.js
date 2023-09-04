import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // You can create a CSS file for styling

function Home() {
  return (
    <div className="homepage-container">
      <Link to="/player-stats" className="banner player-stats">
        <div className="banner-content">
          <h2>Player Stats</h2>
          <p>Explore individual player statistics.</p>
        </div>
      </Link>
      <Link to="/team-stats" className="banner team-stats">
        <div className="banner-content">
          <h2>Team Stats</h2>
          <p>Discover in-depth team statistics.</p>
        </div>
      </Link>
      <Link to="/about" className="banner about">
        <div className="banner-content">
          <h2>About</h2>
          <p>Learn more about our journey and mission.</p>
        </div>
      </Link>
      <Link to="/contact" className="banner contact">
        <div className="banner-content">
          <h2>Contact</h2>
          <p>Get in touch with us for inquiries and collaborations.</p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
