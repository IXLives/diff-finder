// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import AboutMe from './Components/About/AboutMe';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import './App.css'
import PlayerList from './Components/PlayerList/PlayerList';
import TeamList from './Components/TeamList/TeamList';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='player-stats' element={<PlayerList />} />
          <Route path='team-stats' element={<TeamList />} />
          <Home />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
