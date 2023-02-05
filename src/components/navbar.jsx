import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');

    }
    return (
        
            <nav className={`navbar navbar-expand-lg bg-body-tertiary mb-4  shadow ${isDarkMode ? 'bg-dark text-white ' : 'bg-light text-dark'} `} >
                <div className="container fluid ">
                    <a class={`navbar-brand brand ${isDarkMode ? 'bg-dark text-white' : ''}`}  href="/">  HubLIfe</a>

                    <ul className={` nav btn ${isDarkMode ? 'bg-dark' : 'text-white'}`}>
                        <li className="nav-item">
                            <Link to="/" className={`nav-link link-dark fw-semibold ${isDarkMode ? 'bg-dark text-white ' : ''} `} href="">Home</Link>
                        </li>
                        <li className={`nav-item`}>
                            <Link to='/list-menu' className={`nav-link link-dark fw-semibold ${isDarkMode ? 'bg-dark text-white' : ''} `} href="">List Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link link-dark fw-semibold ${isDarkMode ? 'bg-dark text-white' : ''} `} href="">Contact</Link>
                        </li>

                        <li>
                            <button className={`btn ${isDarkMode ? 'btn-dark' : 'btn-dark'}`} onClick={toggleDarkMode}>
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
       
    );
}
