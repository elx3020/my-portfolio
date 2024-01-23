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
import StudiesPage from "./pages/Studies Page/StudiesPage";
import GlobalStateProvider from "./hooks/useGlobalContext";
import BlogPage from "./pages/Blog Page/BlogPage";
import BlogPostPage from "./pages/Blog Page/BlogPostPage";
import { marked, use } from "marked";
import ScrollStateProvider from "./hooks/useScrollContext";


function App() {
  // functionality

  const scrollRef = createRef<HTMLDivElement>();

  const [currentPage, setCurrentpage] = useState("");


  function handlePage(currentPage: string) {
    setCurrentpage(currentPage);
  }

 

  // set marked options
  marked.setOptions({
    breaks: true,
    async: true,
  });

 
  // Dom Render
  return (
    <div className="content-page">
      <GlobalStateProvider>
        <Router>
          
            <ScrollStateProvider scrollElementRef={scrollRef} currentPage={currentPage}>
        <div className="page-content" id="main-container" data-scroll-container ref={scrollRef}>
              
        <NavBar />
          <NavBarPanel
            currentPage={currentPage}
            />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage  handlePage={handlePage} />
              }
              />
            <Route
              path="work"
              element={
                <WorkPage handlePage={handlePage} />
              }
              />
             <Route
              path="studies"
              element={
                <StudiesPage />
              }
              />
              <Route path="about/" element={<About handlePage={handlePage} />} />
              <Route path="blog" element={<BlogPage handlePage={handlePage} />} />
            <Route path="blog/post/:postId" element={<BlogPostPage handlePage={handlePage}  />} />
              
              
            <Route
              path="contact"
              element={
                <ContactPage handlePage={handlePage} />
              }
              />
            <Route
              path="projects/:arr_handle/:project_handle"
              element={
                <ProjectDescriptionPage
                handlePage={handlePage}
                />
              }
              />
            <Route path="404" element={<Page404 handlePage={handlePage} />} />
            <Route path="*" element={<Navigate replace={true} to="404" />} />
          </Routes>
          <Footer />
        </div>
              </ScrollStateProvider>
        </Router>
      </GlobalStateProvider>
        
    </div>
  );
}

export default App;
