import React, {useState} from 'react'
import { BsFillLightningFill } from "react-icons/bs";
import {Link} from 'gatsby'
import "../pages/mystyles.scss"


const Nav = () => {

  const [burger1, setBurger] = useState(false);
  const burger_value = burger1 ? 'is-active' : '';

    return (
      <nav className="navbar uber">
        <div className="container is-max-desktop">
          <div className="navbar-brand">
            <div className="ug ">
              <Link to="/">
                <h1 className="navbar-item nav-logo">
                    GROWTH HACKER TOOLS
                </h1>
              </Link>
              <div className="text">
                Newest marketing tools in one place
              </div>
            </div>
            <a onClick={()=>{
                setBurger(!burger1)  
              }} role="button" className={`navbar-burger ${burger_value}`}aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${burger_value}`}>
            <div className="navbar-end nav-responsive">
                <Link className="navbar-item nav-item is-active" to="/blog">
                   About
                </Link>
                <Link className="navbar-item nav-item is-active" to="/category">
                   All categories
                </Link>
                <Link className="navbar-item nav-item is-active" to="/signup">
                   Get the newest tools to your inbox
                </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Nav
