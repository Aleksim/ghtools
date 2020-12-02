import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {Link} from 'gatsby'


const Error = () => {
    return (
        <div className="section">
            <div className="content movetocenter">
                <h1 className="error">
                    Sorry! Nothing here. <span><Link to="/">Try going back.</Link></span>
                </h1>
                
            </div>
        </div>
    )
}

export default Error
