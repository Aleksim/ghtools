import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {Link} from 'gatsby'


const Error = () => {
    return (
        <div className="error-bg">
        <div className="section">
            <div className="content movetocenter">
                <h1 className="error">
                    Sorry! Nothing here yet. <span><Link to="/">Click here.</Link></span>
                </h1>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Error
