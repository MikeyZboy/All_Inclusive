import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => 
    (
    //     <header>
    //         <div>Welcome Back</div>
    //         <nav>
    //             <NavLink>Trips</NavLink>
    //             <NavLink>Places</NavLink>
    //             <Navlink>Friends</Navlink>
    //             <NavLink>Sign Out</NavLink>
    //         </nav>
    //     </header>
    // ) : 
        <header>
            <div></div>
            <nav>
                <NavLink activeClassName="nav-active" to="/trips">Trips</NavLink>
                <NavLink activeClassName="nav-active" to="/register">Sign Up</NavLink>
                <NavLink activeClassName="nav-active" to="/login">Sign In</NavLink>
            </nav>
        </header>
    )
export default Nav