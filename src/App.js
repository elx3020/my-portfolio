import React, { createRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

import "./styles/bodyStyle/BodyStyle.sass";
// pages

import About from "./pages/About Page/AboutPage";
// import Blog from './pages/Blog';
import HomePage from "./pages/Home Page/HomePage";
import WorkPage from "./pages/Work Page/WorkPage";
import ContactPage from "./pages/Contact Page/ContactPage";
import ProjectDescriptionPage from "./pages/ProjectDescriptionPage";
// layout components

import NavBar from "./components/Layout/NavBar/NavBar";
import Footer from "./components/Layout/Footer/Footer";

// data
import ProjectsData from "./data/project_data.json";
import useLocoScroll from "./hooks/useLocoScroll";

function App(props) {
  // functionality

  const scrollRef = createRef();

  const [currentPage, setCurrentpage] = useState("");
  const [LocoScroll, setLocoScroll] = useState(null);

  function handlePage(currentPage) {
    setCurrentpage(currentPage);
  }

  function handleLocoScroll() {}

  useLocoScroll(currentPage, scrollRef, setLocoScroll);

  // data
  const projectsData = JSON.parse(JSON.stringify(ProjectsData));

  // Dom Render

  return (
    <div>
      <Router>
        <div className="page-content" id="main-container" ref={scrollRef}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage projectsData={projectsData} handlePage={handlePage} />
              }
            />
            <Route
              path="work"
              element={
                <WorkPage projectsData={projectsData} handlePage={handlePage} />
              }
            />
            <Route path="about" element={<About handlePage={handlePage} />} />
            <Route
              path="contact"
              element={<ContactPage handlePage={handlePage} />}
            />
            <Route
              path="projects/:arr_handle/:project_handle"
              element={
                <ProjectDescriptionPage
                  projectsData={projectsData}
                  handlePage={handlePage}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;