import React from "react"
import Layout3 from "../components/Layout3"
import SEO from '../components/SEO'
import { Link} from 'gatsby'


const marketingresources= () => {  
 

  return (
    <Layout3>
        <SEO title="The ultimate source for the newest martech tools and innovations" description="Everyday a new marketing tool is launched in the internet. This site brings all those tools to one place, on a daily basis."/>
        <div className="section item-bg">
            <div className="container is-max-desktop">
                <ul className="item">
                    <li className="list-items">
                            <div className="section-topic-picks">
                                <Link to=""><h2 className="daily-title">75+ Best Startup Marketing Tools for any budget by Dan Siepen</h2></Link>
                            </div>
                            <div className="upper-row ">
                                <span className="">
                                    <p to="" className="tool-text">"I created this ever-growing list of marketing tools for startups & small businesses that I personally have used + really like and have included reasons why. I hope you find it useful :)"</p>
                                </span>
                                <span className="url-gh">https://www.dansiepen.io/best-startup-marketing-tools</span>
                            </div>

                    </li>
                </ul>
                <ul className="item">
                    <li className="list-items">
                            <div className="section-topic-picks">
                                <Link to=""><h2 className="daily-title">Free resources you may use to promote your next startup</h2></Link>
                            </div>
                            <div className="upper-row ">
                                <span className="">
                                    <p to="" className="tool-text">First build a great product and then spread the word using these channels</p>
                                </span>
                                <span className="url-gh">https://github.com/trekhleb/promote-your-next-startup</span>
                            </div>
                    </li>
                </ul>
                <ul className="item">
                    <li className="list-items">
                            <div className="section-topic-picks">
                                <Link to=""><h2 className="daily-title">Places To Post Your Startup</h2></Link>
                            </div>
                            <div className="upper-row ">
                                <span className="">
                                    <p to="" className="tool-text">Compiled list of links from "Ask HN: Where can I post my startup to get beta users?"</p>
                                </span>
                                <span className="url-gh">https://github.com/mmccaff/PlacesToPostYourStartup</span>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    </Layout3>
  )
}



export default marketingresources