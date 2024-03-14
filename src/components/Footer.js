import React from "react";
import Typical from "react-typical";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <p>{""}</p>
        <Typical
          loop={Infinity}
          steps={["Wilgner", 1200, "Wilgner Souza", 1200, ]}
        ></Typical>
      </div>

      <div className="footer__social">
        <a
          href="https://www.facebook.com/wilgner.souza.stw"
          target="_blank"
          className="footer__icon"
          rel="noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/showtimewill97/"
          target="_blank"
          className="footer__icon"
          rel="noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
      <p className="footer__copy">
        Copyright &#169; 2024 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
