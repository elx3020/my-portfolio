import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "./styles/bodyStyle/BodyStyle.css";
import "./styles/uniqueElements/uniqueElements.css";
// pages

import About from "./pages/AboutPage";
// import Blog from './pages/Blog';
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import ProjectDescriptionPage from "./pages/ProjectDescriptionPage";
// layout components

import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="projects/:arr_handle/:project_handle"
            element={<ProjectDescriptionPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
