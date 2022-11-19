import React from "react";
import { Link } from "react-router-dom";
import { FiMap, FiHome, FiKey } from "react-icons/fi";
import { MdCarRental, MdTrackChanges } from "react-icons/md";
import "./nav.scss";

export const Nav = () => {
  return (
    <header className="header-nav">
      <nav className="nav">
        <div className="logo-box">
          <img src="/img2/logo.png" alt="logo" />
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

export const SideNav = () => {
  return (
    <nav className="sideNav">
      <ul className="sideNav__list">
        <li className="sideNav__item">
          <a href="" className="sideNav__link">
            <FiMap />
            <span>Tour</span>
          </a>
        </li>
        <li className="sideNav__item">
          <a href="" className="sideNav__link">
            <FiHome />
            <span>Hotel</span>
          </a>
        </li>
        <li className="sideNav__item">
          <a href="" className="sideNav__link">
            <MdCarRental />
            <span>Car rental</span>
          </a>
        </li>
        <li className="sideNav__item">
          <a href="" className="sideNav__link">
            <MdTrackChanges />
            <span>Tracker</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
