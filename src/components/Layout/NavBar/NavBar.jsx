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
    <nav id="navbar" className="Navbar" data-scroll-section>
      <div className="nav_links">
        <Link to="/">Home</Link>
      </div>
      {links}
    </nav>
  );
};

export default Navbar;
