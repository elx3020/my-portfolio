import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/biography.css';
import './styles/background.css';

// pages

import About from './pages/AboutPage';
// import Blog from './pages/Blog';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
// layout components

import NavBar from './components/Layout/NavBar';

function App() {
  return (
    
    <div>
      <Router>
        <NavBar />
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="work" element={ <WorkPage />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={< ContactPage/>} />
          
           
        </Routes>
      </Router> 
  
    </div>
  );
}

export default App;
