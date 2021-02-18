import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {BrowserRouter as Router, Redirect} from "react-router-dom"
import 'react-pro-sidebar/dist/css/styles.css';
import HeaderProfil from './HeaderProfil'
import SideBar from './SideBar'

function Profil(){
    const [redirect, setRedirect] = useState(false)
    const [user] = useState(qs.parse(localStorage.getItem('user')))
    const [isAut, setIsAut] = useState("")
    useEffect(()=>{
      var data = qs.stringify({
        'token': localStorage.getItem('token') 
       });
       var config = {
         method: 'post',
         url: 'http://localhost:8000/user/ping',
         headers: { 
           'Content-Type': 'application/x-www-form-urlencoded'
         },
         data : data
       };
       
       axios(config)
       .then(function (response) {
         setIsAut(true)
         console.log(isAut)
       })
       .catch(function (error) {
          setIsAut(false)
       });
    }, [])
    
    return(
      <div>
        {isAut === false ? <Redirect exact to="/" /> : null}
        <HeaderProfil />
        <SideBar />
        <div className="main-profile">
          <div className="container-mentores">
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
          </div>
        </div>
      </div>
    )
}

export default Profil