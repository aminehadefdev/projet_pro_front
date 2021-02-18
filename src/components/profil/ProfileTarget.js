import React,{useState} from 'react'
import qs from 'qs'
import HeaderProfil from './HeaderProfil'
import SideBar from './SideBar'
import ModalRequestMentoring from './ModalRequestMentoring'


function ProfileTarget( ){
    const [target, setTarget] = useState(qs.parse(localStorage.getItem('profilTarget')))

    const [showDM, setShowDM] = useState(false);
    const handleCloseDM = () => setShowDM(false);
    const handleShowDM = () => setShowDM(true);
    return(
        <div>
            <HeaderProfil />
            <SideBar />
            <div className="container-target">
                <div className="p1">
                    <div className="image-target">
                        <img src={`http://localhost:8000/static/${target.photoProfile}`} />
                        <div>
                            <p>{target.firstname}</p>
                            <p>{target.lastname}</p>
                        </div>
                    </div>
                    <button onClick={()=>{
                        handleShowDM()
                    }} className="btn btn-outline-dark">Demande de mentoring</button>
                </div>
                <div className="p2">
                    <p>{target.description}</p>
                </div>
            </div>
            <ModalRequestMentoring target={target} showDM={showDM} handleCloseDM={handleCloseDM} />
        </div>
    )
}

export default ProfileTarget