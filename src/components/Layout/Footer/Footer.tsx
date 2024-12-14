import React from "react";

import { Link } from "react-router-dom";
import { triangleDown } from "../../../utils/svgFigures";
// styles
import "./Footer.sass";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
// assets
const myPhoto = "/images/yo.jpg";

export default function Footer() {

  const globalContext = useGlobalContext();
  const footerContent = globalContext.content.footer;


  return (
    <footer className="footer"  >
      <div className="footer-content">
        <h2 data-scroll data-scroll-speed="1.5">
          {footerContent.titles.title_1}
          <span className="spam-triangle">{triangleDown} </span>
        </h2>
        {/* <div className="figure-wrapper">{lineFigure}</div> */}

        <div className="content-info">
          <div className="content-in-info">
            <div className="img-wrapper">
              <img src={myPhoto} alt="me" />
            </div>
            <Link className="contact-button" to="contact">
              {footerContent.titles.title_2}
            </Link>
            <h3 className="contact-info">estebanl28@gmail.com</h3>
          </div>

        </div>
      </div>

      <div className="line-footer"></div>
      <div className="end-footer">
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
    </footer>
  );
}
