import React, {useState} from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Modal, Button, Form } from 'react-bootstrap';
import {BrowserRouter as Router, Redirect } from 'react-router-dom';


function ModalSignIn(props){
    const [emailSignIn, setEmailSignIn] = useState("amine@gmail.com")
    const [errorEM, setErrorEM] = useState('')

    const [passwordSignIn, setPasswordSignIn] = useState("Bastoz@@@000")
    const [errorPW, setErrorPW] = useState('')

    const [error, setError] = useState('')

    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (event)=>{
        event.preventDefault()
        var data = qs.stringify({
            email: emailSignIn,
            password: passwordSignIn,
        });
        var config = {
            method: 'post',
            url: 'http://localhost:8000/user/login',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        axios(config)
        .then(function (response) {
            console.log(response)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", qs.stringify(response.data.user))
            setRedirect(true)
        })
        .catch(function (error) {
            console.log(error.response)
            if(error.response != undefined){
                if(error.response.data.errors.includes("le champ email doit etre valide exemple: toto@gmail.com!")){setErrorEM("le champ email doit etre valide exemple: toto@gmail.com!")}
                if(error.response.data.errors.includes("le champ email est obligatoir!")){setErrorEM("le champ email est obligatoir!")}
    
                if(error.response.data.errors.includes("le champ password doit contenire au minimum 8 caractaires dont au mois une majuscule une miniscule et un caractaiter special!")){setErrorPW("le champ password doit contenire au minimum 8 caractaires dont au mois une majuscule une miniscule et un caractaiter special!")}
                if(error.response.data.errors.includes("le champ password est obligatoir!")){setErrorPW("le champ password est obligatoir!")}
                if(error.response.data.errors.includes("votre dossier est en cour de traitement!")){setError("votre dossier est en cour de traitement!")}
            }
            //if(error.response.data.errors.includes("email deja enregistrer!")){setErrorUE("email deja enregistrer!")}
        });
    }
    return(
        <Modal show={props.showSignIn} onHide={props.handleCloseSignIn}>
            <Modal.Header closeButton>
                <Modal.Title>SignIn</Modal.Title>
                {error != "" ?
                    <div class="alert alert-danger" role="alert">{error}</div> 
                : null}
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={emailSignIn}
                            onChange={event=>{setEmailSignIn(event.currentTarget.value)}}
                            type="email"
                            placeholder="Enter email"
                        />
                        {errorEM != '' ? <small style={{color: "red"}} id="emailHelp">{errorEM}</small>:null}
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                                value={passwordSignIn}
                                onChange={(event)=>{setPasswordSignIn(event.currentTarget.value)}}
                                type="password"
                                placeholder="Enter Password"
                        />
                        {errorPW != '' ? <small style={{color: "red"}} id="emailHelp">{errorPW}</small>:null}
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleCloseSignIn}>Close</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                        {redirect == true? <Redirect exact to="/profil" />:null}
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalSignIn;