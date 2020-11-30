import React from 'react'
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"


const Footer = () => {
    return (
        <footer class="footer">
        <div class="content has-text-centered footer-style">
            <div>
                <div>
                    Created and editored for <span style={{fontFamily: "Permanent Marker"}}>hackers</span> by <span><a>@aleksimmonen</a></span> in Helsinki, Finland. 
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
                Dm me in twitter if I am missing something!
            </div>
            <div className="bottom-footer">
                <a href="https://www.grew.dev/">
                    Grew product
                </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer
