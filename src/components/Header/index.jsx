import React from 'react';
import logo from '../../assets/SVG/bookSwapLogo.svg'
import './styles.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Link to="/" >
            <img className='logo' src={logo} alt="Book Swap Logo"/>
            </Link>
        </header>
    )
}