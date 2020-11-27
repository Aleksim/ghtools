import React from 'react'
import Nav from "./Nav"
import Footer from "./Footer"
import Hero from './Hero'
import "../pages/mystyles.scss"



const Layout = ({children}) => {
    return (
        <div className="generic-background">
            <Nav/>
            <Hero/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout
