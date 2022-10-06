import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="logo-box">
            <img src="" alt="logo" className="logo-box__img" />
          </div>
          <p className="footer__left-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, at. Lorem ipsum.
          </p>
          <ul className="footer__left-list">
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Tw
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Li
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                In
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Ma
              </a>
            </li>
          </ul>
        </div>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <h4 className="footer__nav-heading">Services</h4>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Tour guide
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Tour planing
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Explore nature
              </a>
            </li>
          </ul>

          <ul className="footer__nav-list">
            <h4 className="footer__nav-heading">Company</h4>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                About Us
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Terms
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Privacy Policy
              </a>
            </li>
          </ul>

          <ul className="footer__nav-list">
            <h4 className="footer__nav-heading">More</h4>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Documentation
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                Products
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                License
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
