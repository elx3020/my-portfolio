import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./NavPanel.sass";

export default function NavBarPanel(props: {currentPage: string, scrollDirection: string}) {
  const [navPanelOpen, setNavPanel] = useState("close");

  const { currentPage, scrollDirection } = props;

  function togglePanel(e: React.MouseEvent ) {
    if (navPanelOpen === "close") {
      setNavPanel("open");
    } else if (navPanelOpen === "open") {
      setNavPanel("close");
    }
  }

  useEffect(() => {
    setNavPanel("close");
  }, [currentPage]);

  return (
    <div className="nav-panel-wrapper">
      <div
        className={`nav-button ${navPanelOpen} ${scrollDirection}`}
        onClick={togglePanel}
      >
        <span>M</span>
      </div>
      <NavPanel toggleClass={navPanelOpen} />
    </div>
  );
}

function NavPanel(props: {toggleClass: string}) {
  return (
    <div id="navpanel" className={`nav-panel ${props.toggleClass}`}>
      <Link to="/">Home</Link>
      <Link to="work">My Work</Link>
      <Link to="about">About me</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}
