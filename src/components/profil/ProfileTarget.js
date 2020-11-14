import React,{useState} from 'react'
import qs from 'qs'
function ProfileTarget(props){
    const [userTarget, setUserTarget] = useState(qs.parse(localStorage.getItem('profilTarget')))

    return(
        <div>
            
        </div>
    )
}

export default ProfileTarget