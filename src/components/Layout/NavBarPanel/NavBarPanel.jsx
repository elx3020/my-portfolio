import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./NavPanel.sass";
import { addClass } from "../../../utils/utils";
export default function NavBarPanel(props) {
  const [navPanelOpen, setNavPanel] = useState(false);

  const { currentPage } = props;
  function togglePanel() {
    //   add functionality to hide show panel
    // toggle animations
    addClass(["nav-panel", "nav-button"], "open", navPanelOpen, setNavPanel);

    // const navPanelElement = document.getElementById("navpanel");
    // if (!navPanelOpen) {
    //   navPanelElement.classList.add("open");
    //   setNavPanel(true);
    // } else {
    //   navPanelElement.classList.remove("open");
    //   setNavPanel(false);
    // }
  }

  useEffect(() => {
    if (navPanelOpen !== false) {
      togglePanel();
    }
  }, [currentPage]);

  return (
    <div className="nav-panel-wrapper">
      <div className="nav-button" onClick={togglePanel}>
        <span>M</span>
      </div>
      <NavPanel />
    </div>
  );
}

function NavPanel() {
  return (
    <div id="navpanel" className="nav-panel">
      <Link to="/">Home</Link>
      <Link to="work">My Work</Link>
      <Link to="about">About me</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}
