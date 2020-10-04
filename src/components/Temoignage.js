import React, {useState} from 'react';

function Temoignage(props){
    return (
        <div className="item">
            <img className="img-btn" src="/assets/images/BP.png" onClick={()=>{console.log('ok')}} />
            <img className="img" src={props.src} />
            <div>
            <p>{props.personne}</p>
            <p>{props.job}</p>
            <p>Inscrite en tant que {props.role}</p>
            </div>
        </div>
    )
}

export default Temoignage