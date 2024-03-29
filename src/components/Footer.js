import React from 'react'
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"


const Footer = () => {
    return (
        <footer class="footer">
        <div class="content has-text-centered footer-style">
            <div>
                <div>
                    Created and curated for <span style={{fontFamily: "Permanent Marker", marginLeft:"2px", marginRight:"3px"}}>marketers</span> by <span><a>@aleksimmonen</a></span> . 
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
                Message me in <span><a href="https://twitter.com/aleksimmonen">Twitter</a></span> or talk to me at <span><a href="https://discord.gg/tz9TwhBxeD">Discord</a></span> if I am missing something.
            </div>

            <div className="privacy-footer">
                <a href="https://github.com/Grew-dev/grew-privacy-policy/blob/main/README.md">Privacy Policy</a>
            </div>
        </div>
        </footer>
    )
}

export default Footer
