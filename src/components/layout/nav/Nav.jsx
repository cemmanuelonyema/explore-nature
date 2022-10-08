import React from "react";
import "./nav.scss";

export const Nav = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-box">
          <img src="" alt="logo" />
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#about">
              About Us
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#features">
              Features
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#plans">
              Plans
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#about">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
