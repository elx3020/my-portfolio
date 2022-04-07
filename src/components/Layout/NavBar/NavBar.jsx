import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.sass";
const Navbar = (props) => {
  // function AnimateNavBar(e) {
  //   const navbar = document.getElementById("navbar");
  //   if (window.scrollY < 1) {
  //     navbar.classList.remove("hide");
  //   } else {
  //     navbar.classList.add("hide");
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", AnimateNavBar);
  // });

  const links = (
    <div className="nav_links">
      <Link to="work">Work</Link> <Link to="about">About</Link>{" "}
      <Link to="contact">Contact</Link>
    </div>
  );

  return (
    <div id="navbar" className="Navbar" data-scroll data-scroll-section>
      <div className="nav_links">
        <Link to="/">Home</Link>
      </div>
      {links}
    </div>
  );
};

export default Navbar;
