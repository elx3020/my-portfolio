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
import ProjectDescriptionPage from "./pages/ProjectDescription Page/ProjectDescriptionPage";
import Page404 from "./pages/Page404/Page404";
// layout components

import Footer from "./components/Layout/Footer/Footer";
import NavBarPanel from "./components/Layout/NavBarPanel/NavBarPanel";
import NavBar from "./components/Layout/NavBar/NavBar";
// data
import ProjectsData from "./data/project_data.json";
import useLocoScroll from "./hooks/useLocoScroll";
import LocomotiveScroll from "locomotive-scroll";
import StudiesPage from "./pages/Studies Page/StudiesPage";
import { log } from "console";
type LMScrollEvent = LocomotiveScroll.OnScrollEvent & {
  direction: 'up' | 'down' | null;
}

function App() {
  // functionality

  const scrollRef = createRef<HTMLDivElement>();

  const [currentPage, setCurrentpage] = useState("");
  const [scrollDirection, setScrollDirection] = useState("up");

  function handlePage(currentPage: string) {
    setCurrentpage(currentPage);
  }

  const scroll = useLocoScroll(currentPage);
  // console.log(locoInstance);
  // data
  const projectsData: GlobalDataT = JSON.parse(JSON.stringify(ProjectsData));

  useEffect(() => {
    if (scroll !== null) {
      scroll.on("scroll", (args) => {
        const event = args as LMScrollEvent
        const scrollHorizontal = event.direction;
        // ignore when the event return null
        if (scrollHorizontal === null) return;
        setScrollDirection(scrollHorizontal);
      });
    }
  }, [scroll]);

  // Dom Render
  return (
    <div>
      <Router>
        <div className="page-content" id="main-container" ref={scrollRef}>
        <NavBar scrollDirection={scrollDirection} />
          <NavBarPanel
            currentPage={currentPage}
            scrollDirection={scrollDirection} 
          />

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
             <Route
              path="studies"
              element={
                <StudiesPage />
              }
            />
            <Route path="about" element={<About handlePage={handlePage} />} />
            <Route
              path="contact"
              element={
                <ContactPage scrollObject={scroll} handlePage={handlePage} />
              }
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
