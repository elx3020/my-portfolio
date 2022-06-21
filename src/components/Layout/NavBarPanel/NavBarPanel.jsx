import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./NavPanel.sass";

export default function NavBarPanel(props) {
  const [navPanelOpen, setNavPanel] = useState("close");

  const { currentPage, scrollDirection } = props;

  function togglePanel(e) {
    if (navPanelOpen === "close") {
      setNavPanel("open");
    } else if (navPanelOpen === "open") {
      setNavPanel("close");
    }
  }

  return (
    <div className="nav-panel-wrapper">
      <div
        className={`nav-button ${navPanelOpen} ${scrollDirection}`}
        onClick={togglePanel}
      >
        <span>M</span>
      </div>
      <NavPanel state={navPanelOpen} />
    </div>
  );
}

function NavPanel(props) {
  return (
    <div id="navpanel" className={`nav-panel ${props.state}`}>
      <Link to="/">Home</Link>
      <Link to="work">My Work</Link>
      <Link to="about">About me</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}
