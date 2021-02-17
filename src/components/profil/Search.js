import React, {useState } from 'react'
import {BrowserRouter as Redirect} from "react-router-dom" //Router,

import qs from 'qs'

import HeaderProfil from './HeaderProfil'
import SideBar from './SideBar'

function Search(){
    const [users, setUsers] = useState(Object.values(qs.parse(localStorage.getItem('searche'))))
    const [targetId, setTargetId] = useState(null)
    const [redirect, setRedirect] = useState(false)

    return (
        <div>
            <HeaderProfil />
            <SideBar />
            <div className="container-search">
                {users.map(user=>{
                    return (
                        <div onClick={()=>{
                            localStorage.setItem('profilTarget', qs.stringify(user))
                            setRedirect(true)
                            setTargetId(user.id)
                        }} className="item-search" key={user.id}>
                            <img src={"http://localhost:8000/static/" + user.photoProfile} />
                            <p>{user.firstname}</p>
                            <p>{user.job}</p>
                            <p>{user.description}</p>
                            {redirect === true? <Redirect exact to={"/search/" + targetId} />:null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search