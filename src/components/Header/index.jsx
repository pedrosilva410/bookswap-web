import React from 'react';
import logo from '../../assets/img/BookSwapLogo.png'
import './styles.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Link to="/" >
            <img src={logo} alt="Book Swap Logo"/>
            </Link>
        </header>
    )
}