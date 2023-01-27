import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 bg-dark   ">
            <div className="container fluid">
                <a class="navbar-brand brand text-white" href="/">HubLIfe</a>
                
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link-dark fw-semibold text-white" href="">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/list-menu' className="nav-link link-dark fw-semibold text-white" href="">List Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-dark fw-semibold text-white" href="">Contact</Link>
                    </li>

                    <li>
                        <button className={`btn ${isDarkMode ? 'btn-secondary' : 'btn-light'}`} onClick={toggleDarkMode}>
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                </ul>
            </div>


        </nav>
    );
}
