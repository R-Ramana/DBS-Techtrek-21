import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar (){
    return(
        <div className = 'navbar'>
            <div className = 'navlinks'>
                <a className = 'menu-item' href = '/'>
                    HOME
                </a>
                <form className = 'login-component' action="/login-page">
                    <Link className = 'login-button' to="/login">Log in</Link>
                    <Link className = 'login-button' to="/register">Register</Link>
                    <button className = 'login-button'>Log out</button>
                </form>
            </div>
        </div>

    )
}

export default NavBar