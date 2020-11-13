import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import '../styles/Landing.css'

const LandingPage = () => {
    return (
        <div className="landing-page flex-row">
            <section className="left flex-sm flex-col">
                <div className="mask flex-col">
                    <h3 className="logo">*INSERT LOGO HERE*</h3>
                </div>
                <div className="hero-wrapper flex-row">
                    <Hero />
                </div>
            </section>
            <section className="right flex-sm">
                    <Nav />
            </section>
            <section className="">
                    <Home />
            </section>
        </div>
    )
}

export default LandingPage