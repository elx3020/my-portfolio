import { Link } from "react-router-dom";
import "./Navbar.sass";
import React, { useState } from "react";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { useScrollContext } from "../../../hooks/useScrollContext";
const Navbar = () => {

  const scrollDirection = useScrollContext().scrollDirection;
  const globalContext = useGlobalContext();


  let navTextContent = {
    work: "",
    studies: "",
    about: "",
    contact: "",
    blog: "",
  };

  const homeTranslation = globalContext.language === "en" ? "Home" : "Inicio";

  if (globalContext.language === "en") {
    navTextContent = {
      work: "Work",
      studies: "Studies",
      about: "About",
      contact: "Contact",
      blog: "Blog",
    };
  } else if (globalContext.language === "es") {
    navTextContent = {
      work: "Trabajo",
      studies: "Estudios",
      about: "Acerca de",
      contact: "Contacto",
      blog: "Blog",
    };
  }

  const changeLanguage = (value) => {
    globalContext.setLenguage(value);
    closeDropdown();
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const links = Object.entries(navTextContent).map(([key, value]) => { return (<Link key={key} to={key}>{value}</Link>) }).filter((link) => link.props.to !== "studies");

  const linksNoBlog = links.filter((link) => link.props.to !== "blog")

  return (
    <nav id="navbar" className={`Navbar ${scrollDirection}`}>
      <div className="nav_links">
        <Link to="/">{homeTranslation}</Link>
      </div>
      <div className="nav_links">
        {globalContext.blogActive ? links : linksNoBlog}
      </div>

      <div className={`custom-dropdown `} onMouseLeave={toggleDropdown}>
        <div className="selected-option" onMouseEnter={toggleDropdown} >
          {globalContext.language === "en" ? "Language" : "Lenguaje"}
        </div>
        <div className={`options ${isOpen ? "open" : ""}`}>
          <div onClick={() => changeLanguage("en")}>English</div>
          <div onClick={() => changeLanguage("es")}>Español</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
