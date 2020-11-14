import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Redirect} from "react-router-dom"

import qs from 'qs'
function Search(){
    const [users, setUsers] = useState(Object.values(qs.parse(localStorage.getItem('searche'))))
    const [targetId, setTargetId] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [redirectProfil, setRedirectProfil] = useState(false)

    return (
        <div>
            <button onClick={()=>{
                setRedirectProfil(true)
            }}>profil</button>
            {redirectProfil === true? <Redirect exact to={"/profil/"} />:null}
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