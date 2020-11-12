import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const LandingPage = () => {
    return (
        <div>
            <section>
                <div>
                    <h3>Where am I?</h3>
                </div>
                <div>
                    <Hero />
                </div>
            </section>
            <section>
                <div>
                    <Nav />
                </div>
            </section>
        </div>
    )
}

export default LandingPage