import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/biography.css';
import './styles/background.css';

// pages

import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Portfolio from './pages/MyWork';

// layout components

import NavBar from './components/Layout/NavBar';

function App() {
  return (
    
    <div>
      <Router>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
      
          <Route path="about" element={<About />}/>
          
          <Route path="portfolio" element={ <Portfolio />}/>
           
        </Routes>
      </Router> 
  
    </div>
  );
}

export default App;
