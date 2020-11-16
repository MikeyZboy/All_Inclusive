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
                    <div className="cl-left flex-col">
                        <Hero />
                    </div>
                    </div>
                </div>
                    <div className="img-wrapper">
                    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.reckontalk.com%2Fwp-content%2Fuploads%2F2014%2F11%2FBeautiful-Hotels-Viceroy-Hotel-Bali.jpg&f=1&nofb=1' 
                            alt="beautiful resort" />
                    </div>    
            </section>
            <section className=".newnav">
                    <Nav />
                    {children}
            </section>
        </div>
    )
}

export default LandingPage

//            <section className="home content-wrapper flex-col">
//                    <Home />
//            </section>
