import React, {useEffect, useState} from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

function Profil(){
    const [show, setShow] = useState(true)
    const [user, setUser] = useState(qs.parse(localStorage.getItem('user')))
    console.log(user)
    return(
      <div>
        <div className="header">
          <header className="container">
            <div>
              <nav className="navbar container-fluid">
                <Link to="/">
                  <img   width="60" height="60" src="/assets/images/logo.png" className="d-inline-block align-top" alt="" />
                </Link>
                <Form>
                  <Form.Control  placeholder="Search" />
                </Form>
                <div>

                </div>

              </nav>
            </div>
          </header>
        </div>
        <div className="container-menu">
          <ProSidebar collapsed={show}>
            <div className="sidebar">
              <div className="headerSideBar">
                <SidebarHeader>
                  <FontAwesomeIcon size="2x" icon={faBars} onClick={()=>{ setShow(!show)}} className="ButtonMenu" />
                </SidebarHeader>
              </div>
              <div className="mainSideBar">
                <SidebarContent className="user">
                  <img src={"http://localhost:8000/static/" + user.photoProfile} />
                  <p>{user.firstname}</p>
                  <p>{user.lastname}</p>
                  <p>{user.age} ans</p>
                  <p>{user.job}</p>
                </SidebarContent>
              </div>
              <div className='footerSideBar'>
                <SidebarFooter>
                  <div className="container-btn">
                    <button className="btn btn-primary">CRUD</button>
                    <button className="btn btn-primary">logout</button>
                  </div>
                </SidebarFooter>
              </div>
            </div>
          </ProSidebar>
        </div>
      </div>
    )
}

export default Profil