import React, {useState} from 'react'
import {BrowserRouter as Router, Redirect} from "react-router-dom"
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import qs from 'qs'

import ModalCrud from "./ModalCrud"

function SideBar(){
    const [show, setShow] = useState(true)
    const [user, setUser] = useState(qs.parse(localStorage.getItem('user')))
    const [redirectProfil, setRedirectProfil] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const [showCrud, setShowCrud] = useState(false);
    const handleCloseCrud = () => setShowCrud(false);
    const handleShowCrud = () => setShowCrud(true);

    return(
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
                <img onClick={()=>{setRedirectProfil(true)}} src={"http://localhost:8000/static/" + user.photoProfile} />
                {redirectProfil === true? <Redirect exact to={"/profil/"} />:null}
                <p>{user.firstname}</p>
                <p>{user.lastname}</p>
                <p>{Math.floor(((new Date()).getTime() - new Date(user.age)) / (1000 * 60 * 60 * 24 * 365))} ans</p>
                <p>{user.job}</p>
              </SidebarContent>
            </div>
            <div className='footerSideBar'>
              <SidebarFooter>
                <div className="container-btn">
                  <button className="btn btn-outline-dark btn-nav btn-side-bar">Mes deamndes</button>
                  <button className="btn btn-outline-dark btn-nav btn-side-bar">deamndes de mentoring</button>
                  <button onClick={()=>{
                    handleShowCrud()
                  }} className="btn btn-outline-dark btn-nav btn-side-bar">CRUD</button>
                  <button onClick={()=>{
                    setUser('')
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                    localStorage.removeItem('token')
                    setRedirect(true)

                  }} className="btn btn-outline-dark btn-nav btn-side-bar">logout</button>
                </div>
                {redirect === true ? <Redirect exact to = {"/"} /> : null}
              </SidebarFooter>
            </div>
          </div>
          <ModalCrud showCrud={showCrud} handleCloseCrud={handleCloseCrud} />
        </ProSidebar>
        
      </div>
    )
}

export default SideBar