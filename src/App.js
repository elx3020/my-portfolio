import React, { createRef, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import "./App.css";

import "./styles/bodyStyle/BodyStyle.sass";
// pages

// import Blog from './pages/Blog';
import About from "./pages/About Page/AboutPage";
import HomePage from "./pages/Home Page/HomePage";
import WorkPage from "./pages/Work Page/WorkPage";
import ContactPage from "./pages/Contact Page/ContactPage";
import ProjectDescriptionPage from "./pages/ProjectDescriptionPage";
import Page404 from "./pages/Page404/Page404";
// layout components

import Footer from "./components/Layout/Footer/Footer";
import NavBarPanel from "./components/Layout/NavBarPanel/NavBarPanel";
// data
import ProjectsData from "./data/project_data.json";
import useLocoScroll from "./hooks/useLocoScroll";

function App(props) {
  // functionality

  const scrollRef = createRef();

  const [currentPage, setCurrentpage] = useState("");

  function handlePage(currentPage) {
    setCurrentpage(currentPage);
  }

  useLocoScroll(currentPage, scrollRef);

  // data
  const projectsData = JSON.parse(JSON.stringify(ProjectsData));

  // Dom Render

  return (
    <div>
      <Router>
        <div className="page-content" id="main-container" ref={scrollRef}>
          <NavBarPanel currentPage={currentPage} />
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
            <Route path="404" element={<Page404 handlePage={handlePage} />} />
            <Route path="*" element={<Navigate replace={true} to="404" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
