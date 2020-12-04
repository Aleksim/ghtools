import React from 'react'
import Nav4 from '../components/Nav4'
import SEO from '../components/SEO'


const signup = () => {
    return (
        <div className="signup-bg-1">
            <SEO title="Subscribe"/>
            <Nav4/>
            <div className="section">
            <div className="container">

                <div className="section signup-bg">
                <div className="container signupwidth">
                    <form action="https://formspree.io/f/xgeplnly" method="POST">
                        <div className="">
                            <h1 className="sign-up-header">
                                Sign up to get the newest tools to your inbox
                            </h1>
                            <h2 className="sign-up-header2">
                                I will send the newsletter once per month or more often if there is enough material.
                            </h2>
                            <input className="input input-style sign-up-box" type="email" name="email" placeholder="email"/>
                            
                            <button type="submit" className="button is-link sign-up-box">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default signup
