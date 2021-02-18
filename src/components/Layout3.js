import React from 'react'
import Nav from "./Nav"
import Footer from "./Footer"
import Recent from "./Recent"
import "../pages/mystyles.scss"



const Layout = ({children}) => {
    return (
        <div className="generic-background">
            <Nav/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout
