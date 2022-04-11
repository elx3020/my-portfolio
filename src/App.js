import React, { useEffect, useState } from "react";
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
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
// data
import ProjectsData from "./data/project_data.json";

function App(props) {
  // functionality

  const [currentPage, setCurrentpage] = useState("/");

  const [isLoading, setIsLoading] = useState(true);

  function handlePage(currentPage) {
    setCurrentpage(currentPage);
  }

  function Loading() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => {
        clearTimeout(timeout);
        setIsLoading(true);
      };
    }, []);
  }

  // data
  const projectsData = JSON.parse(JSON.stringify(ProjectsData));

  // Dom Render

  return (
    <div>
      <Router>
        <div className="page-content" id="main-container">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  projectsData={projectsData}
                  handlePage={handlePage}
                  loading={isLoading}
                  isLoading={Loading}
                />
              }
            />
            <Route
              path="work"
              element={
                <WorkPage
                  projectsData={projectsData}
                  handlePage={handlePage}
                  loading={isLoading}
                  isLoading={Loading}
                />
              }
            />
            <Route
              path="about"
              element={
                <About
                  handlePage={handlePage}
                  loading={isLoading}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="contact"
              element={
                <ContactPage handlePage={handlePage} loading={isLoading} />
              }
            />
            <Route
              path="projects/:arr_handle/:project_handle"
              element={
                <ProjectDescriptionPage
                  projectsData={projectsData}
                  handlePage={handlePage}
                  loading={isLoading}
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
