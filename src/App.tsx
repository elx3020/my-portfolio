import { createRef, useRef, useState } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
// import "./App.css";

import "./styles/bodyStyle/BodyStyle.sass";
// pages


import Footer from "./components/Layout/Footer/Footer";
import NavBar from "./components/Layout/NavBar/NavBar";
import NavBarPanel from "./components/Layout/NavBarPanel/NavBarPanel";
// data
import { marked } from "marked";
import AppRoutes from "./Routes";
import "./code_theme.css";
import GlobalStateProvider from "./hooks/useGlobalContext";
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

  // TODO use ref to make the fade in effect


  // Dom Render
  return (
    <div className="content-page">
      <GlobalStateProvider>
        <Router>
          <div className="page-content" id="main-container" ref={scrollRef}>
            <NavBar />
            <NavBarPanel currentPage={currentPage} />
            <AppRoutes handlePage={handlePage} />
            <Footer />
          </div>
        </Router>
      </GlobalStateProvider>

    </div>
  );
}

export default App;
