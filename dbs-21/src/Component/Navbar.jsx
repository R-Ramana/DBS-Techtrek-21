import React from 'react';
import './Navbar.css'

function NavBar (){
    return(
        <div className = 'navbar'>
            <div className = 'navlinks'>
                <a className = 'menu-item' href = '/'>
                    HOME
                </a>
                <form className = 'login-component' action="/login-page">
                    <button className = 'login-button'>Log in</button>
                    <button className = 'login-button'>Register</button>
                    <button className = 'login-button'>Log out</button>
                </form>
            </div>
        </div>

    )
}

export default NavBar