import React from "react";
import logo from "../../assets/SVG/bookSwapLogo.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import UserInfo from "../../components/UserInfo";

export default function Header() {
  if (localStorage.length > 1) {
    return (
      <header>
        <UserInfo />
        <Link to="/">
          <img className="header__logo" src={logo} alt="Book Swap Logo" />
        </Link>
      </header>
    );
  } else {
    return (
      <header>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Book Swap Logo" />
        </Link>
      </header>
    );
  }
}
