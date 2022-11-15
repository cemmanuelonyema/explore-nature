import React from "react";
import { FiSearch, FiBookmark } from "react-icons/fi";
import { MdOutlineNotifications, MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-box">
        <img src="img2/logo.png" alt=" logo" className="header__logo" />
      </Link>

      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <MdOutlineSearch />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <FiBookmark />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <MdOutlineNotifications />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img
            src="img2/user.jpg"
            alt="User photo"
            className="user-nav__user-photo"
          />
          {/* <span className="user-nav__user-name">Jonas</span> */}
        </div>
      </nav>
    </header>
  );
};
