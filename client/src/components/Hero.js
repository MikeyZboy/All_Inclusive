import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="">
            <div className="">
                <h1>Inclusive experiences only for the exclusive!</h1>
                <p>Plan in advance, don't fly by the seat of your pants.</p>
            </div>
            <div className="">
                <Link to="/register">Start Planning!</Link>
            </div>
        </div>    
    )
}

export default Hero