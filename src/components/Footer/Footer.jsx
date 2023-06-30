import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title waviy">
            <span>M</span>
            <span>a</span>
            <span>h</span>
            <span>m</span>
            <span>u</span>
            <span>d</span>
          </h1>

          <ul className="footer__list animate-link">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/almahmudsarkerbd/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/almahmudsarker7/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://twitter.com/almahmudsarker7"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>

          <span className="footer__copy animate-link">
            &#169; Al Mahmud Sarker. All rigths reserved
          </span>
        </div>
      </footer>
    );
};

export default Footer;