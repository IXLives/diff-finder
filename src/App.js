// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import AboutMe from './Components/About/AboutMe';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import './App.css'
// import {Projects} from './components/Projects/Projects';
// import {Contact} from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects" component={Projects} />}
          {/* Add more routes for other sections */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
