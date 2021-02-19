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
                   The newest and UGest tools to give you an edge.
                </h1>
                <p>
                    Hello, <span><a href="https://twitter.com/aleksimmonen">@aleksimmonen</a></span> here.
                </p>
                <p>
                    I created this site to help fellow indiehackers/entrepreneurs to find the newest growth hacking / marketing tools. 
                </p>
                <p>
                    The way this site works is that I have a <span style={{fontWeight:"600"}}>bunch of scripts and crawlers</span> looking at the usual places and updating the "daily stream" <span style={{fontWeight:"600"}}>daily</span>!

                </p>

                 <p>
                    In addition, <span style={{fontWeight:"600"}}>I test and hand pick promising tools</span> and post them to the "hacker's picks" list.            
                </p>
                <p>
                    I am myself a coding entrepreneur/marketer with 7+ years experience in technical marketing.

                </p>
                

                <p>
                    Many valuable tools remain undiscovered because there is just too little time to spend looking for them and too much noise in ShowHN, IH, Reddit and Product Hunt etc.
                </p>
                <p>
                    <span style={{fontWeight:"600"}}>But now there is a way to keep track of all the newest marketing tools 🦾🦾<span><Link to="/"></Link></span>.</span>
                </p>

                <p>
                    I hope you find value from here. Let's rock!
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
