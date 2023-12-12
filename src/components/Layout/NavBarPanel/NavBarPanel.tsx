import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./NavPanel.sass";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

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

function NavPanel(props: { toggleClass: string }) {
  

  const globalContext = useGlobalContext();
  let navBarContent = { home: '', work: '', about: '', contact: '', language: ''}	

  if (globalContext.language === "en") {
    navBarContent = { home: 'Home', work: 'My Work', about: 'About me', contact: 'Contact', language: 'Language' }
  } else if (globalContext.language === "es") { 
    navBarContent = { home: 'Inicio', work: 'Mi Trabajo', about: 'Sobre mi', contact: 'Contacto', language: 'Idioma' }
  }

  return (
    <div id="navpanel" className={`nav-panel ${props.toggleClass}`}>
      <Link to="/">{navBarContent.home}</Link>
      <Link to="work">{navBarContent.work}</Link>
      <Link to="about">{navBarContent.about}</Link>
      <Link to="contact">{navBarContent.contact}</Link>
      <div>{navBarContent.language} <span onClick={(e) => {globalContext.setLenguage('en')}}>EN</span> <span>/</span> <span onClick={(e) => {globalContext.setLenguage('es')}}>ES</span></div>

    </div>
  );
}
