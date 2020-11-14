import React from 'react'
import {BrowserRouter as Router, Redirect, Link} from 'react-router-dom'

import SearchBar from './SearchBar'

function HeaderProfil(){
    return(
        <div className="header">
        <header className="container">
          <div>
            <nav className="navbar container-fluid">
              <Link to="/">
                <img   width="60" height="60" src="/assets/images/logo.png" className="d-inline-block align-top" alt="" />
              </Link>
              <SearchBar />
              <div></div>
            </nav>
          </div>
        </header>
      </div>
    )
}

export default HeaderProfil