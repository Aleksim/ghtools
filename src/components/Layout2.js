import React from 'react'
import Footer from "./Footer"
import "../pages/mystyles.scss"



const Layout2 = ({children}) => {
    return (
        <div className="generic-background">
            {children}
            <Footer />
        </div>
    )
}

export default Layout2
