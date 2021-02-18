import React, {useState} from 'react';
import axios from 'axios'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import qs from 'qs'

function ModalCrud(props){

    const [user, setUser] = useState(qs.parse(localStorage.getItem('user')))

    const [firstname, setFirstname] = useState(user.firstname)
    const [errorFN, setErrorFN] = useState("")

    const [lastname, setLastname] = useState(user.lastname)
    const [errorLN, setErrorLN] = useState("")

    const [email, setEmail] = useState(user.email)
    const [errorEM, setErrorEM] = useState("")


    const [description, setDescription] = useState(user.description)
    const [errorDSC, setErrorDSC] = useState("")

    const [job, setJob] = useState(user.job)
    const [errorJb, setErrorJb] = useState("")

    const [age, setAge] = useState(new Date(user.age))
    const [errorAge, setErrorAge] = useState("")

    const [errorUE, setErrorUE] = useState("")

    const [success, setSuccess] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()


        var data = qs.stringify({
            'token': localStorage.getItem('token'),
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'description': description,
            'job': job,
            "age": age,
        });
        var config = {
             method: 'post',
             url: 'http://localhost:8000/user/crud',
             headers: { 
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             data : data
        };
           
        axios(config)
           .then(function (response) {
             console.log(JSON.stringify(response.data));
           })
           .catch(function (error) {
             console.log(error);
           });
    }

    return(
        <Modal show={props.showCrud} onHide={props.handleCloseCrud}>
            <Modal.Header closeButton>
                <Modal.Title>CRUD</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errorUE != '' ? <div class="alert alert-danger" role="alert">{errorUE}</div>:null}
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="Firstname">
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control
                                    value={firstname}
                                    onChange={(event)=>{setFirstname(event.currentTarget.value)}}
                                    type="text"
                                    placeholder="Enter Firstname"
                                />
                                {errorFN !== '' ? <small style={{color: "red"}} id="emailHelp">{errorFN}</small>:null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Lastname">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control
                                    value={lastname}
                                    onChange={(event)=>{setLastname(event.currentTarget.value)}}
                                    type="text"
                                    placeholder="Enter Lastname"
                                />
                                {errorLN !== '' ? <small style={{color: "red"}} id="emailHelp">{errorLN}</small>:null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="containe-age">
                        <Form.Label>Date de naissance</Form.Label>
                        <DatePicker
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                            selected={age}
                            onChange={(date) => {
                                setAge(new Date(date))
                            }}
                        />
                        {errorAge !== '' ? <small style={{color: "red"}} id="veillez rensegnier votre date de naissance!">{errorLN}</small>:null}
                    </div>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={email}
                            onChange={(event)=>{setEmail(event.currentTarget.value)}}
                            type="email"
                            placeholder="Enter Email"
                        />
                        {errorEM !== '' ? <small style={{color: "red"}} id="emailHelp">{errorEM}</small>:null}
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(event)=>{setDescription(event.currentTarget.value)}}
                            placeholder="Enter your description"
                            as="textarea"
                            rows="3"
                        />
                        {errorDSC !== '' ? <small style={{color: "red"}} id="emailHelp">{errorDSC}</small>:null}
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="Job">
                                <Form.Label>Job</Form.Label>
                                <Form.Control
                                    value={job}
                                    onChange={(event)=>{setJob(event.currentTarget.value)}}
                                    type="text"
                                    placeholder="job"
                                />
                                {errorJb !== '' ? <small style={{color: "red"}} id="emailHelp">{errorJb}</small>:null}
                            </Form.Group>
                        </Col>

                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalCrud;
