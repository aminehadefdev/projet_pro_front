import React, {useEffect} from "react"
import { useParams } from "react-router";
import axios from 'axios'


function VerifyEmail(){
    var { slug } = useParams()
    function confirEmail(){
        var config = {
            method: 'post',
            url: 'http://localhost:8000/verify/email',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {"slug": slug}
        };

        axios(config)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    useEffect(()=>{
        confirEmail()
    }
    ,[])
    return(
        <div>
            <p>Merci d'avoir confirmer votre email:)</p>
        </div>
    )
    
}

export default VerifyEmail