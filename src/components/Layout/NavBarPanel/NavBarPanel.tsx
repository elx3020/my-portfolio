import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./NavPanel.sass";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

export default function NavBarPanel(props: { currentPage: string }) {
  const [navPanelOpen, setNavPanel] = useState("close");

  const { currentPage } = props;

  function togglePanel(e: React.MouseEvent) {
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
      <input type="checkbox" role="button" aria-label="Display the menu" className={`nav-button ${navPanelOpen}`} onClick={togglePanel}></input>
      <div className="bar">
      </div>
      <NavPanel toggleClass={navPanelOpen} togglePanel={togglePanel} />
    </div>
  );
}

function NavPanel(props: { toggleClass: string, togglePanel?: (e: any) => void }) {


  const globalContext = useGlobalContext();

  function changeLanguage(lang: 'en' | 'es') {
    if (lang === globalContext.language) return;
    globalContext.setLanguage(lang);
    props.togglePanel && props.togglePanel('close');
  }

  let navBarContent = { work: '', about: '', blog: '', contact: '', language: '' }
  const homeTranslation = globalContext.language === "en" ? "Home" : "Inicio";

  if (globalContext.language === "en") {
    navBarContent = { work: 'My Work', about: 'About me', blog: "Blog", contact: 'Contact', language: 'Language' }
  } else if (globalContext.language === "es") {
    navBarContent = { work: 'Mi Trabajo', about: 'Sobre mi', blog: "Blog", contact: 'Contacto', language: 'Idioma' }
  }

  const links = Object.entries(navBarContent).filter(([k, v]) => k !== 'language').map(([key, value]) => { return (<Link key={key} to={key}>{value}</Link>) }).filter((link) => link.props.to !== "studies");
  const linksNoBlog = links.filter((link) => link.props.to !== "blog")
  return (
    <div id="navpanel" className={`nav-panel ${props.toggleClass}`}>
      <Link to="/">{homeTranslation}</Link>

      {globalContext.blogActive ? links : linksNoBlog}
      <div>{navBarContent.language} <span onClick={(e) => { changeLanguage('en') }}>EN</span> <span>/</span> <span onClick={(e) => { changeLanguage('es') }}>ES</span></div>

    </div>
  );
}
