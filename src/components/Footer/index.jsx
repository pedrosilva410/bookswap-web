import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  if (localStorage.length > 1) {
    return (
      <footer>
        <p>reading is not a crime</p>
        <ul className='nav'>
          <li>
            <Link to='/faq' className='nav__item'>
              FAQ
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav__item'>
              CONTACT
            </Link>
          </li>
          <li
            onClick={() => {
              localStorage.clear();
              history.push("/");
              window.location.reload();
            }}
            className='nav__item'
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
        <ul className='nav'>
          <li>
            <Link to='/faq' className='nav__item'>
              FAQ
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav__item'>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to='/signin' className='nav__item'>
              SIGN IN
            </Link>
          </li>
          <li>
            <Link to='/signup' className='nav__item'>
              SIGN UP
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}
