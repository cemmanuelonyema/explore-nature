import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export const SideBar = () => {
  return (
    <nav className="sideBar">
      <ul>
        <li>
          <a href="">
            <span>icon</span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>icon</span>
            <span>Tours</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>icon</span>
            <span>favourites</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>icon</span>
            <span>transactions</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>icon</span>
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
