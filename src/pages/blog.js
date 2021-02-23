import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import {Link} from 'gatsby'

const blog = () => {
    return (
        <>
            <SEO title="Blog" description="This site collects newest marketing tools to one place."/>
            <Nav/>
                    <div className="section">
            <div className="container">
        <div className="section">
            <div className="main-blog">
            <div className="content">
                <h1>
                   Everyday a new marketing tool is launched in the internet.
                </h1>

                <p>
                    <span style={{fontWeight:"600"}}>This site brings all those tools to one place!</span> 

                </p>

                 <p>
                    The way this site works is that I have set up a bunch of scripts and crawlers monitoring the “usual places” where people launch software products. 
                </p>
                <p>
                    When a marketing tool is identified, it is automatically picked up and placed in the “daily stream”. The daily stream is updated twice a day.
                </p>
                <p>
                In addition, I hand pick the COOLEST new marketing tools to the “top picks” list. In the top picks, there is a quick comment why I selected a certain tool.
                </p>
                <p>
                    <span style={{fontWeight:"600"}}>This site is still a work in progress </span>
                 and I admit that there is some garbage among the daily stream selections currently (this is a limited time, side project of mine). However, I think that this site is already a better way to find newest marketing tools than going to the usual places and doing the filtering yourself. 
                </p>

                <p>
                There is an option to sign-up to an email list as well to get the top tools straight to your inbox.
                </p>

                <p>
                    I hope you get value out of this!

                </p>

                <p>
    If you have some feedback or anything else, lets connect <span><a href="https://twitter.com/aleksimmonen">@aleksimmonen</a></span>
                </p>

            </div>
            </div>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default blog
