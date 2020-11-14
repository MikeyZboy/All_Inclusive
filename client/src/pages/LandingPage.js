import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import '../styles/Landing.css'

const LandingPage = ({ children }) => {
    return (
        <div className="landing-page flex-row">
            <section className="left flex-sm flex-col">
                <div className="mask flex-col">
                    <div className="content-wrapper flex-col">
                        <h3 className="logo">All_Inclusive</h3>
                    </div>
                    <div className="hero-wrapper flex-row">
                        <Hero />
                    </div>
                </div>
            </section>
            <section className="right flex-sm">
                    <Nav />
                    {children}
            </section>
            <section className="home content-wrapper flex-col">
                    <Home />
            </section>
        </div>
    )
}

export default LandingPage