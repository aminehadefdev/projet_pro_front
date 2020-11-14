import React,{useState} from 'react'

import qs from 'qs'

import HeaderProfil from './HeaderProfil'
import SideBar from './SideBar'
function ProfileTarget(props){
    const [userTarget, setUserTarget] = useState(qs.parse(localStorage.getItem('profilTarget')))

    return(
        <div>
            <HeaderProfil />
            <SideBar />
        </div>
    )
}

export default ProfileTarget