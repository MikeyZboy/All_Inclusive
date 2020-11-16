import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landing.css'

const Hero = () => {
    return (
        <div className="hero flex-col">
            <div className="hero-message">
                <h1>Inclusive experiences only for the exclusive!</h1>
                <p>Plan in advance, don't fly by the seat of your pants.</p>
            </div>
            <div className="hero-action">
                <Link to="/register">Start Planning!</Link>
            </div>
        </div>    
    )
}

export default Hero