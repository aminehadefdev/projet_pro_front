import React, {useState} from 'react'
import qs from 'qs'

import 'react-pro-sidebar/dist/css/styles.css';

import HeaderProfil from './HeaderProfil'
import SideBar from './SideBar'

function Profil(){
    const [user] = useState(qs.parse(localStorage.getItem('user')))
    return(
      <div>
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