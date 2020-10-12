import React, {useEffect, useState} from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

function Profil(){
    const config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    const mentors = useState({})
    const [isVisible, setIsVisible] = useState()
    var classNameIcon = "iconSideBar"
    var classNameSideBar = "sideBar"
    var classNameBurn = ""
    if(isVisible == true){
      classNameIcon += " animVisibleIconeSideBar"
      classNameSideBar += " animVisibleSideBar"
      classNameBurn += " burn"
    }else if(isVisible == false){
      classNameIcon += " animHiddenIconeSideBar"
      classNameSideBar += " animHiddenSideBar"
      classNameBurn = "form-control"
    }

    useEffect(()=>{
        var token =  localStorage.getItem('token')
        var data = qs.stringify({
            'token': localStorage.getItem('token')
           });
           var config = {
             method: 'get',
             url: 'http://localhost:8000/user/get/mentors?token='+localStorage.getItem('token'),
             headers: { 
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             body : data
           };
           
           axios(config)
           .then(function (response) {
             console.log(response.data)
           })
           .catch(function (error) {
             console.log(error.response);
           });
           
    })
    return (
        <div>
            <div className={classNameBurn}></div>
            <div className="header">
              <header className="container">
                <div>
                  <nav className="navbar container-fluid">
                      <Link to="/">
                          <img src="/assets/images/logo.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                      </Link>
                      <Form>
                        <Form.Control className={classNameBurn} placeholder="Search" />
                      </Form>
                      <FontAwesomeIcon
                        onClick={()=>{setIsVisible(!isVisible)}}
                        className={classNameIcon}
                        size="2x"
                        icon={faBars}
                      />
                  </nav>
                </div>
              </header>
            </div>
            <main>
              <div className="container-mentor container">
                <div className="item">
                  <img src="/assets/images/photo2.jpg" />
                  <p>Mathieu</p>
                </div>
              </div>
            </main>
            <footer></footer>
            <div className={classNameSideBar}>
              
            </div>
        </div>
    )
}

export default Profil