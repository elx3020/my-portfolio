import { Link } from "react-router-dom";
// styles
import "./Footer.sass";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
// assets
const myPhoto = "/images/yo.jpg";

export default function Footer() {

  const globalContext = useGlobalContext();
  const footerContent = globalContext.content.footer;


  function getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  return (
    <footer className="footer" >
      <div className="end-footer">
        <div className="img-wrapper">
          <img src={myPhoto} alt="me" />
        </div>
        <Link className="contact-button" to="contact">
          {footerContent.titles.title_2}
        </Link>
        <div className="end-layout">
          <a
            className="social-item"
            href="https://github.com/elx3020"
            target="_blank"
            rel="noreferrer"
          >
            <span className="logo-social"></span> Github
          </a>
          <a
            className="social-item"
            href="https://www.linkedin.com/in/esteban-lasso-l%C3%B3pez-b580a8161/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="logo-social"></span>LinkedIn
          </a>
          <a
            className="social-item"
            href="https://twitter.com/teb_dev"
            target="_blank"
            rel="noreferrer"
          >
            <span className="logo-social"></span>Twitter
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', padding: '10px 0 ', justifyContent: 'center' }}>
        <p style={{ fontWeight: 200, fontSize: '14px' }}>{`© ${getYear()} Esteban Lasso. All rights reserved.`}</p>
      </div>
    </footer>
  );
}
