import React, {useState} from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';


function ModalSignUp(props){

    const [firstnameSignUp, setFirstnameSignUp] = useState("amine")
    const [errorFN, setErrorFN] = useState('')

    const [lastnameSignUp, setLastnameSignUp] = useState("hadef")
    const [errorLN, setErrorLN] = useState('')

    const [emailSignUp, setEmailSignUp] = useState("amine@gmail.com")
    const [errorEM, setErrorEM] = useState('')

    const [passwordSignUp, setPasswordSignUp] = useState("Amine1234@")
    const [errorPW, setErrorPW] = useState('')

    const [confirmePasswordSignUp, setConfirmePasswordSignUp] = useState("Amine1234@")
    const [errorCPW, setCPW] = useState('')

    const [descriptionSignUp, setDescriptionSignUp] = useState("une super description")
    const [errorDSC, setErrorDSC] = useState('')

    const [jobSignUp, setJobSignUp] = useState("dev")
    const [errorJb, setErrorJb] = useState('')

    const [roleSignUp, setRoleSignUp] = useState("1")
    const [errorRL, setErrorRl] = useState('')

    const [errorUE, setErrorUE] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(passwordSignUp != confirmePasswordSignUp){
            setCPW('le champ password doit corespondre avec le champ comfirmpasswor!')
            return false
        }
        var data = qs.stringify({
                firstname: firstnameSignUp,
                lastname: lastnameSignUp,
                email: emailSignUp,
                password: passwordSignUp,
                description: descriptionSignUp,
                job: jobSignUp,
                role: roleSignUp,
           });
           var config = {
             method: 'post',
             url: 'http://localhost:8000/user/register',
             headers: { 
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             data : data
           };
           
           axios(config)
           .then(function (response) {
                props.handleCloseSignUP()
           })
           .catch(function (error) {
                if(error.response.data.errors.includes("le firstname doit contenir que des lettre!")){setErrorFN("le firstname doit contenir que des lettre!")}
                if(error.response.data.errors.includes("le champ firstname est obligatoire!")){setErrorFN("le champ firstname est obligatoire!")}

                if(error.response.data.errors.includes("le champ lastname est obligatoire!")){setErrorLN("le champ lastname est obligatoire!")}
                if(error.response.data.errors.includes("le lastname doit contenir que des lettre!")){setErrorLN("le lastname doit contenir que des lettre!")}

                if(error.response.data.errors.includes("le champ email doit etre valide exemple: toto@gmail.com!")){setErrorEM("le champ email doit etre valide exemple: toto@gmail.com!")}
                if(error.response.data.errors.includes("le champ email est obligatoire!")){setErrorEM("le champ email est obligatoire!")}

                if(error.response.data.errors.includes("le champ password doit contenir au minimum 8 caracteres dont au moins une majuscule une minuscule et un caracter special!")){setErrorPW("le champ password doit contenir au minimum 8 caracteres dont au moins une majuscule une minuscule et un caracter special!")}
                if(error.response.data.errors.includes("le champ password est obligatoire!")){setErrorPW("le champ password est obligatoire!")}

                if(error.response.data.errors.includes("le champ description est obligatoire!")){setErrorDSC("le champ description est obligatoire!")}

                if(error.response.data.errors.includes("le champ role est obligatoire!")){setErrorRl("le champ role est obligatoire!")}

                if(error.response.data.errors.includes("le champ role est obligatoire!")){setErrorJb("le champ job est obligatoire!")}

                if(error.response.data.errors.includes("email deja enregistrer!")){setErrorUE("email deja enregistrer!")}
           });
    }
    return(
        <Modal show={props.showSignUP} onHide={props.handleCloseSignUP}>
            <Modal.Header closeButton>
                <Modal.Title>SignUP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errorUE != '' ? <div class="alert alert-danger" role="alert">{errorUE}</div>:null}
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="Firstname">
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control
                                    value={firstnameSignUp}
                                    onChange={(event)=>{setFirstnameSignUp(event.currentTarget.value)}}
                                    type="text"
                                    placeholder="Enter Firstname"
                                />
                                {errorFN != '' ? <small style={{color: "red"}} id="emailHelp">{errorFN}</small>:null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Lastname">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control
                                    value={lastnameSignUp}
                                    onChange={(event)=>{setLastnameSignUp(event.currentTarget.value)}}
                                    type="text"
                                    placeholder="Enter Lastname"
                                />
                                {errorLN != '' ? <small style={{color: "red"}} id="emailHelp">{errorLN}</small>:null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={emailSignUp}
                            onChange={(event)=>{setEmailSignUp(event.currentTarget.value)}}
                            type="email"
                            placeholder="Enter Email"
                        />
                        {errorEM != '' ? <small style={{color: "red"}} id="emailHelp">{errorEM}</small>:null}
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    value={passwordSignUp}
                                    onChange={(event)=>{setPasswordSignUp(event.currentTarget.value)}}
                                    type="password"
                                    placeholder="Enter Password"
                                />
                                {errorPW != '' ? <small style={{color: "red"}} id="emailHelp">{errorPW}</small>:null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="ConfirmePassword">
                                <Form.Label>Confirme password</Form.Label>
                                <Form.Control
                                    value={confirmePasswordSignUp}
                                    onChange={(event)=>{setConfirmePasswordSignUp(event.currentTarget.value)}}
                                    type="password"
                                    placeholder="ConfirmePassword"
                                />
                                {errorCPW != '' ? <small style={{color: "red"}} id="emailHelp">{errorCPW}</small>:null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="Description">
                        <Form.Label>description</Form.Label>
                        <Form.Control
                            value={descriptionSignUp}
                            onChange={(event)=>{setDescriptionSignUp(event.currentTarget.value)}}
                            placeholder="Enter your description"
                            as="textarea"
                            rows="3"
                        />
                        {errorDSC != '' ? <small style={{color: "red"}} id="emailHelp">{errorDSC}</small>:null}
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="Job">
                                <Form.Label>Job</Form.Label>
                                <Form.Control
                                    value={jobSignUp}
                                    onChange={(event)=>{setJobSignUp(event.currentTarget.value)}}
                                    type="text"
                                    placeholder="job"
                                />
                                {errorJb != '' ? <small style={{color: "red"}} id="emailHelp">{errorJb}</small>:null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Role">
                                <Form.Label>Role</Form.Label>
                                <Form.Control onChange={(event)=>{setRoleSignUp(event.currentTarget.value)}} as="select">
                                    <option value="1">Mentor(e)</option>
                                    <option value="2">Mentoré(e)</option>
                                </Form.Control>
                                {errorRL != '' ? <small style={{color: "red"}} id="emailHelp">{errorRL}</small>:null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleCloseSignUP}>Close</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalSignUp;
