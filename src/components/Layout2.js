import React from 'react'
import Nav from "./Nav"
import Footer from "./Footer"
import "../pages/mystyles.scss"



const Layout2 = ({children}) => {
    return (
        <div className="generic-background">
            <Nav/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout2
