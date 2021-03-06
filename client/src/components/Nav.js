import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = ( { authenticated, currentUser, className }) => {
    return authenticated && currentUser ? 
    (
        <header className="newnav">
            <div className="">Welcome Back <NavLink activeClassName="nav-active" to="/profile">{currentUser.name}</NavLink></div>
            <nav>
                <NavLink activeClassName="nav-active" to="/places">Discover</NavLink>
                <NavLink activeClassName="nav-active" to="/profile">Upcoming Trips</NavLink>
                <NavLink activeClassName="nav-active" to="/friends">Friends</NavLink>
                <NavLink activeClassName="nav-active" to="/" onClick={() => localStorage.clear()}>Sign Out</NavLink>
            </nav>
        </header>
    ) : (
        <header className="newnav">
            <div className=""></div>
            <nav>
                <NavLink activeClassName="nav-active" to="/places">Discover</NavLink>
                <NavLink activeClassName="nav-active" to="/login">Sign In</NavLink>
            </nav>
        </header>
    )
}

export default Nav