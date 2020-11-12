import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div>
                <h1>"All-Inclusives" only for the exclusive!</h1>
                <p>Why not plan everything perfectly in advance, rather than fly by the seat of your pants.</p>
            </div>
            <div>
                <Link to="/register">Join</Link>
            </div>
        </div>    
    )
}

export default Hero