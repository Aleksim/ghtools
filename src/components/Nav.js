import React from 'react'
import { BsFillLightningFill } from "react-icons/bs";
import "../pages/mystyles.scss"


const Nav = () => {
  
    return (
      <nav className="navbar uber">
        <div className="uber-flex">
            <div className="nav-flex1">
              <a href="/" className="lightning">
                  <BsFillLightningFill size={40}/>
              </a>
            </div>
            <div className="nav-flex2">
              <a className="newsletter " href="/">
                  JOIN THE NEWSLETTER
              </a>
            </div>
          </div>
      </nav>
    )
}

export default Nav
