import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import '../styles/Landing.css'

const LandingPage = ({ children }) => {
    return (
        <div className="">
            <section className="">
                <div className="">
                    <div className="">
                        <h3 className="logo">All Inclusive</h3>
                    </div>
                    <div className="">
                    <div className="">
                        <Hero />
                    </div>
                    </div>
                </div>
                    <div className="">
                    </div>    
            </section>
            <section className="">
                    <Nav />
                    {children}
            </section>
        </div>
    )
}

export default LandingPage
