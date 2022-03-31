import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../styles/Navbar.css";
const Navbar = (props) => {
  const location = useLocation();
  const links = (
    <div className="nav_links">
      <Link to="work">Work</Link> <Link to="about">About</Link>{" "}
      <Link to="contact">Contact</Link>
    </div>
  );

  return (
    <div className="Navbar">
      <div className="nav_links">
        <Link to="/">Home</Link>
      </div>
      {links}
    </div>
  );
};

export default Navbar;
