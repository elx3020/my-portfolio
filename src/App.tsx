import { useState } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
// import "./App.css";

import "./styles/bodyStyle/BodyStyle.sass";
import "./styles/global.sass"

// pages


import Footer from "./components/Layout/Footer/Footer";
import NavBar from "./components/Layout/NavBar/NavBar";
import NavBarPanel from "./components/Layout/NavBarPanel/NavBarPanel";
// data
import { marked } from "marked";
import AppRoutes from "./Routes";
import "./code_theme.css";
import GlobalStateProvider from "./hooks/useGlobalContext";
import GoToTop from "./components/functional/GoToTop";
import browserDetect from "browser-detect";
function App() {
  // functionality

  const [currentPage, setCurrentpage] = useState("");

  const result = browserDetect();

  function handlePage(currentPage: string) {
    setCurrentpage(currentPage);
  }

  // set marked options
  marked.setOptions({
    breaks: true,
    async: true,
  });

  const header = result.mobile ? <NavBarPanel currentPage={currentPage} /> : <NavBar />;

  // Dom Render
  return (
    <GlobalStateProvider>
      <Router>
        {header}
        <AppRoutes handlePage={handlePage} />
        <Footer />
        <GoToTop />
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
