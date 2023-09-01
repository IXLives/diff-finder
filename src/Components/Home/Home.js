import React from 'react';
import FeaturedMatches from '../FeaturedMatches/FeaturedMatches';
import SummonerLookup from '../SummonerLookup/SummonerLookup';
import BuildPlanner from '../BuildPlanner/BuildPlanner';
import FreeChampionRotation from '../FreeChampionRotation/FreeChampionRotation';
import PlayerList from '../PlayerList/PlayerList';
import './Home.css'; // Import the Home-specific CSS

function Home() {
  return (
    <div className="home-container">
      <div className="section-top">
        <PlayerList />
      </div>
    </div>
  );
}

export default Home;