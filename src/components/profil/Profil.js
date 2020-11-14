import React, {useEffect, useState} from 'react'
import axios from 'axios'
import qs from 'qs'
import { Form } from 'react-bootstrap';
import {BrowserRouter as Router, Redirect, Link} from 'react-router-dom'

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';


function Profil(){
    const [redirect, setRedirect] = useState(false)

    const [show, setShow] = useState(true)
    const [user, setUser] = useState(qs.parse(localStorage.getItem('user')))

    const [searche, setSearche] = useState('')

    function SerachMentore(){
      var data = qs.stringify({
      'token': localStorage.getItem('token')
      });
      var config = {
        method: 'get',
        url: `http://localhost:8000/user/search?job=${searche}&token=${localStorage.getItem('token')}`,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(response.data.data)
        localStorage.setItem('searche', qs.stringify(response.data.data))
        setRedirect(true)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return(
      <div>
        <div className="header">
          <header className="container">
            <div>
              <nav className="navbar container-fluid">
                <Link to="/">
                  <img   width="60" height="60" src="/assets/images/logo.png" className="d-inline-block align-top" alt="" />
                </Link>
                <div className="container-input">
                  <Form.Control
                      placeholder="Search"
                      value={searche}
                      onChange={(event)=>{
                        setSearche(event.currentTarget.value)
                      }}
                  />
                  <button className="searchBtn" onClick={()=>{
                      SerachMentore()
                  }}>
                    <FontAwesomeIcon className="iconeSearch" icon={faSearch} />
                  </button>
                </div>
                <div></div>
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
        <div className="main-profile">
          <div className="container-mentores">
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
            <div className="item-mentor">
              <img src={"http://localhost:8000/static/" + user.photoProfile}/>
              <p>jean</p>
            </div>
          </div>

          <div className="container-avantages">
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
            <div className="item-avantage">
              <img src={"http://localhost:8000/static/" + user.photoProfile} />
              <p>lqsdblkbdsljhbsvkjfhvbkqjfdvbqfhkjbvkqjfhvbkfjhvbkfjhvbkdfjhvbdfkjhvbfkjvhfbkvjhbvkjfdhvbkjfhbvljfhvbkjqfhvbqfkjgvbkqjfhvbkqjfvbkjfsvbkjqfvbkjqfhvbkjfhbvkjqfhbvkjqfhbv</p>
            </div>
          </div>
        </div>
        {redirect == true? <Redirect exact to="/search" />:null}
      </div>
    )
}

export default Profil