import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

export default function Footer() {
    return(
        <footer>
        <p>reading is not a crime</p>
        <ul className='nav'>
            <li><Link to='/faq' className='nav__item'>FAQ</Link></li>
            <li><Link to='/contact' className='nav__item'>CONTACT</Link></li>
            <li><Link to='/signin' className='nav__item'>SIGN IN</Link></li>
            <li><Link to='/signup' className='nav__item'>SIGN UP</Link></li>
        </ul>
        </footer>
    )
}