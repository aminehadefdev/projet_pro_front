import React, {useState} from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';


function ModalSignUp(props){

    const [firstnameSignUp, setFirstnameSignUp] = useState("")
    const [lastnameSignUp, setLastnameSignUp] = useState("")
    const [emailSignUp, setEmailSignUp] = useState("")
    const [passwordSignUp, setPasswordSignUp] = useState("")
    const [confirmePasswordSignUp, setConfirmePasswordSignUp] = useState("")
    const [descriptionSignUp, setDescriptionSignUp] = useState("")
    const [jobSignUp, setJobSignUp] = useState("")
    const [roleSignUp, setRoleSignUp] = useState("")
    return(
        <Modal show={props.showSignUP} onHide={props.handleCloseSignUP}>
            <Modal.Header closeButton>
                <Modal.Title>SignUP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(event)=>{event.preventDefault()}}>
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
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Role">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select">
                                    <option>Mentor(e)</option>
                                    <option>Mentoré(e)</option>
                                </Form.Control>
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
