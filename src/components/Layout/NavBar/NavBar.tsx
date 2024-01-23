import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.sass";
import React, { useState } from "react";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { useScrollContext } from "../../../hooks/useScrollContext";
const Navbar = () => {

  const scrollDirection = useScrollContext().scrollDirection;
  const location = useLocation();
  const navigate = useNavigate();
  const globalContext = useGlobalContext();

  let navTextContent = {
    home: "",
    work: "",
    studies: "",
    about: "",
    contact: "",
    blog: "",
  };
  if (globalContext.language === "en") {
    navTextContent = {
      home: "Home",
      work: "Work",
      studies: "Studies",
      about: "About",
      contact: "Contact",
      blog: "Blog",
    };
  } else if (globalContext.language === "es") {
    navTextContent = {
      home: "Inicio",
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

  const links = (
    <div className="nav_links">
      <Link to="work">{navTextContent.work}</Link>
      {/* <Link to="studies">Studies</Link>  */}
      <Link to="about">{navTextContent.about}</Link>
      <Link to="blog">{navTextContent.blog}</Link>
      <Link to="contact">{navTextContent.contact}</Link>
    </div>
  );

  return (
    <nav id="navbar" className={`Navbar ${scrollDirection}`}>
      <div className="nav_links">
        <Link to="/">{navTextContent.home}</Link>
      </div>
      {links}
      <div className={`custom-dropdown `}  onMouseLeave={toggleDropdown}>
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
