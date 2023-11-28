import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.sass";
import React, { useState } from "react";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
const Navbar = (props: { scrollDirection: any}) => {
  const { scrollDirection } = props;

  const location = useLocation();
  const navigate = useNavigate();
  const globalContext = useGlobalContext();

  let navTextContent = { home: '', work: '', studies: '', about: '', contact: '' }
  if (globalContext.language === 'en') { 
    navTextContent = { home: 'Home', work: 'Work', studies: 'Studies', about: 'About', contact: 'Contact' };
  } else if (globalContext.language === 'es') { 
    navTextContent = { home: 'Inicio', work: 'Trabajo', studies: 'Estudios', about: 'Acerca de', contact: 'Contacto' };
  }

  const changeLanguage = (value) => {
    globalContext.setLenguage(value);
    closeDropdown();
  }

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
      <Link to="contact">{navTextContent.contact}</Link>
      
     
    </div>
  );

  return (
    <nav id="navbar" className={`Navbar ${scrollDirection}`} >
      <div className="nav_links">
        <Link to="/">{ navTextContent.home}</Link>
      </div>
      {links}
      <div className={`custom-dropdown `}>
      <div className="selected-option" onClick={toggleDropdown}>
        {globalContext.language === 'en' ? 'English' : 'Español'}
      </div>
      <div className={`options ${isOpen ? 'open' : ''}`}>
        <div onClick={() => changeLanguage('en')}>English</div>
        <div onClick={() => changeLanguage('es')}>Español</div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
