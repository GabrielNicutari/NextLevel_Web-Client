import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./footer.styles.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/logo.svg";

const Footer = () => (
  <div className="footer">
    <div className="grid">
      <div className="grid-header"></div>
      <Link className='logo-container' to="/">
        <Logo className='logo'/>
      </Link>
    </div>

    <div className="grid">
      <div className="grid-header">
        Social
        <br />
      </div>
      <div className="item">
        <Link
          className="item"
          to={{ pathname: "https://www.facebook.com/" }}
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size={"1x"} /> Facebook
          <br />
        </Link>
      </div>

      <div className="item">
        <Link
          className="item"
          to={{ pathname: "https://www.instagram.com/" }}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size={"1x"} /> Instagram
          <br />
        </Link>
      </div>

      <div className="item">
        <Link
          className="item"
          to={{ pathname: "https://twitter.com/" }}
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size={"1x"} /> Twitter
          <br />
        </Link>
      </div>

      <Link
        className="item"
        to={{ pathname: "https://www.youtube.com/" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} size={"1x"} /> Youtube
        <br />
        <br />
      </Link>
    </div>

    <div className="grid">
      <div className="grid-header">Press</div>

      <div>Logos</div>

      <div>GDPR</div>
    </div>

    <div className="grid">
      <div className="grid-header">Contact</div>

      <div className="item">12 34 56 78</div>

      <div className="item">info@nextlevel.com</div>

      <div className="item">Guldbergsgade 29N, 2200 Copenhagen</div>
    </div>
  </div>
);

export default Footer;
