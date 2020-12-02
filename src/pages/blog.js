import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import {Link} from 'gatsby'

const blog = () => {
    return (
        <div>
            <SEO title="Blog" description="This site collects newest marketing tools to one place."/>
            <Nav/>
        <div className="section">
            <div className="main-blog">
            <div className="content">
                <h1>
                    Every indiehacker loves building but selling.. not as much.
                </h1>
                <p>
                    Hello, <span><a href="https://twitter.com/aleksimmonen">@aleksimmonen</a></span> here.
                </p>
                <p>
                    I created this site to help fellow indiehackers/entrepreneurs to find the newest growth hacking / marketing tools. 
                    In other words, <span style={{fontWeight:"600"}}>the tools that I could imagine using myself</span>, as a coding entrepreneur with 7+ years experience in technical marketing.
                </p>

                <p>
                    It is a sad truth that many valuable tools remain undiscovered because there is just too little time to spend looking for them and too much noise in ShowHN, IH, Reddit and Product Hunt etc.
                </p>
                <p>
                    <span style={{fontWeight:"600"}}>This site collects newest marketing tools to one <span><Link to="/">place</Link></span>.</span>
                </p>
                <p>
                     Good growth hacker tools are force multipliers that save us time, energy and give us extra leverage pushing our products to the global market and -helping us to keep our customers satisfied.
                </p>


                <p>
                   There is a clear framework that I follow in the curation of the listed tools:
                </p>
                <p>
                    <ol>
                        <li>
                            I lean towards just launched marketing/sales tools.
                        </li>
                        <li>
                            I consider every tool through the AARRR (pirate metrics) lense.
                        </li>
                        <li>
                            Not every tool has to be "no-code" / github repos are also appreciated!
                        </li>
                    </ol>
                </p>
                <p>
                   This is the first version of Growth Hacker Tools and it is a product of two weeks of hacking. <span style={{fontWeight:"600"}}>I am more of a growth hacker than a programmer</span>, so everything is not perfect YET ;) !
                </p>
                <p>
                    I hope you find value from here. Let's rock!
                </p>
                <p>
                    I used gatsby.js and Airtable to build this site. Check it out in github.
                </p>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default blog
