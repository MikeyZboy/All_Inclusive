import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero flex-col">
            <div className="hero-message">
                <h1>"All-Inclusives" only for the exclusive!</h1>
                <p>Why not plan in advance, not fly by the seat of your pants.</p>
            </div>
            <div className="hero-action">
                <Link to="/register">Join</Link>
            </div>
        </div>    
    )
}

export default Hero