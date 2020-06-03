import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  if (localStorage.length > 1) {
    return (
      <footer>
        <p>reading is not a crime</p>
        <ul className="footer__nav">
          <li>
            <Link to="/faq" className="footer__nav__item">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer__nav__item">
              CONTACT
            </Link>
          </li>
          <li
            onClick={() => {
              localStorage.clear();
              history.push("/");
              window.location.reload();
            }}
            className="footer__nav__item"
          >
            SIGN OUT
          </li>
        </ul>
      </footer>
    );
  } else {
    return (
      <footer>
        <p>reading is not a crime</p>
        <ul className="footer__nav">
          <li>
            <Link to="/faq" className="footer__nav__item">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer__nav__item">
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/signin" className="footer__nav__item">
              SIGN IN
            </Link>
          </li>
          <li>
            <Link to="/signup" className="footer__nav__item">
              SIGN UP
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}
