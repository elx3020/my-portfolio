import { Link } from "react-router-dom";
import "./Navbar.sass";
import React from "react";
const Navbar = (props: { scrollDirection: any}) => {
  const { scrollDirection } = props;

  const links = (
    <div className="nav_links">
      <Link to="work">Work</Link> 
      {/* <Link to="studies">Studies</Link>  */}
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </div>
  );

  return (
    <nav id="navbar" className={`Navbar ${scrollDirection}`} >
      <div className="nav_links">
        <Link to="/">Home</Link>
      </div>
      {links}
    </nav>
  );
};

export default Navbar;
