import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="">
            <div className="hero-message">
                <h1>One MERN Travel Planner!</h1>
                <p>Plan in advance, don't fly by the seat of your pants.</p>
            </div>
            <div className="hero-action">
                <Link to="/register">Start Planning!</Link>
            </div>
        </div>    
    )
}

export default Hero