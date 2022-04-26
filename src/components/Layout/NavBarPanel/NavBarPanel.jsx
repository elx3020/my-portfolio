import React from "react";
import { Link } from "react-router-dom";
export default function NavBarPanel() {
  function togglePanel() {
    //   add functionality to hide show panel
    // toggle animations
  }

  return (
    <div>
      <div className="Nav-menu" onClick={togglePanel}>
        M
      </div>
      <NavPanel />
    </div>
  );
}

function NavPanel() {
  return (
    <div className="nav-panel-wrapper">
      <Link to="/">Home</Link>
      <Link to="work">Work</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}
