import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = ( { authenticated, currentUser, className }) => {
    return authenticated && currentUser ? 
    (
        <header className={className}>
            <div className="icon">Welcome Back {currentUser.name}</div>
            <nav>
                <NavLink activeClassName="nav-active" to="/profile">Activity</NavLink>
                <NavLink activeClassName="nav-active" to="/trips">Trips</NavLink>
                <NavLink activeClassName="nav-active" to="/" onClick={() => localStorage.clear()}>Sign Out</NavLink>
            </nav>
        </header>
    ) : (
        <header className={className}>
            <div className="icon"></div>
            <nav>
                <NavLink activeClassName="nav-active" to="/trips">Discover</NavLink>
                <NavLink activeClassName="nav-active" to="/register">Sign Up</NavLink>
                <NavLink activeClassName="nav-active" to="/login">Sign In</NavLink>
            </nav>
        </header>
    )
}

export default Nav

//{ authenticated, currentUser, className }