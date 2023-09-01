import React from 'react';
import FeaturedMatches from '../FeaturedMatches/FeaturedMatches';
import SummonerLookup from '../SummonerLookup/SummonerLookup';
import BuildPlanner from '../BuildPlanner/BuildPlanner';
import FreeChampionRotation from '../FreeChampionRotation/FreeChampionRotation';
import './Home.css'; // Import the Home-specific CSS

function Home() {
  return (
    <div className="home-container">
      <div className="section-top">
        <FreeChampionRotation />
      </div>
      <div className="section-left">
        <SummonerLookup />
      </div>
      <div className="section-middle">
        <BuildPlanner />
      </div>
      <div className="section-right">
        <FeaturedMatches />
      </div>
    </div>
  );
}

export default Home;