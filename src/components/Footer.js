import React from 'react'
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"


const Footer = () => {
    return (
        <footer class="footer">
        <div class="content has-text-centered footer-style">
            <div>
                <div>
                    Created and curated for <span style={{fontFamily: "Permanent Marker", marginLeft:"2px", marginRight:"3px"}}>hackers</span> by <span><a>@aleksimmonen</a></span> in Helsinki, Finland. 
                </div>
                <div className="icons-footer">
                    <a href="https://twitter.com/aleksimmonen">
                        <FaTwitter size={30} style={{marginRight:"15px", color:"#1DA1F2"}}/>
                    </a>
                    <a href="https://github.com/Aleksim">
                        <FaGithub size={30} style={{marginRight:"15px", color:"#fff"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/aleksi-immonen-31132233/">
                        <FaLinkedinIn size={30} style={{color:"#2867B2"}}/>
                    </a>
                </div>
            </div>
            <div className="middle-footer">
                Message me in twitter or talk to me at <span><a href="https://discord.gg/tz9TwhBxeD">Discord</a></span> if I am missing something.
            </div>
            <div className="bottom-footer">
                A 
                <span style={{marginLeft:"4px", marginRight:"4px"}}>
                    <a href="https://www.grew.dev/">
                        Grew
                    </a>
                </span>
                hustle
            </div>
        </div>
        </footer>
    )
}

export default Footer
