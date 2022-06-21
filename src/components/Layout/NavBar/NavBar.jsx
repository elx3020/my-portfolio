import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import "./Navbar.sass";
const Navbar = (props) => {
  const { scrollDirection } = props;

  const links = (
    <div className="nav_links">
      <Link to="work">Work</Link> <Link to="about">About</Link>{" "}
      <Link to="contact">Contact</Link>
    </div>
  );

  return (
    <nav id="navbar" className={`Navbar ${scrollDirection}`}>
      <div className="nav_links">
        <Link to="/">Home</Link>
      </div>
      {links}
    </nav>
  );
};

export default Navbar;
