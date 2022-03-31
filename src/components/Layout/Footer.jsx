import React from "react";

import { Link } from "react-router-dom";

// styles
import "../../styles/Footer.css";

// assets
import placeholder from "../../images/place-holder.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Contact me and I will work for you:</h2>
        <div className="contact-wrapper">
          <div className="img-wrapper">
            <img src={placeholder} alt="me" />
          </div>
          <Link className="contact-button" to="contact">
            Contact
          </Link>
        </div>

        <div className="contact-info-wrapper">
          <h3 className="contact-info">+49 177504296</h3>
          <h3 className="contact-info">estebanl28@gmail.com</h3>
        </div>
      </div>

      <div className="end-footer">
        <div className="end-layout">
          <a className="social-item" href="#">
            <span className="logo-social">W</span> Github
          </a>
          <a className="social-item" href="#">
            <span className="logo-social">L</span>LinkedIn
          </a>
          <a className="social-item" href="#">
            <span className="logo-social">T</span>Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
