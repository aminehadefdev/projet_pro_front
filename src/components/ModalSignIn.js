import React, {useState} from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function ModalSignIn(props){
    const [emailSignIn, setEmailSignIn] = useState("")
    const [passwordSignIn, setPasswordSignIn] = useState("")
    return(
        <Modal show={props.showSignIn} onHide={handleCloseSignIn}>
            <Modal.Header closeButton>
                <Modal.Title>SignIn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(event)=>{event.preventDefault()}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={emailSignIn}
                            onChange={event=>{setEmailSignIn(event.currentTarget.value)}}
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                    <Form.Control
                            value={passwordSignIn}
                            onChange={(event)=>{setPasswordSignIn(event.currentTarget.value)}}
                            type="password"
                            placeholder="Enter Password"
                        />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSignIn}>Close</Button>
                        <Button variant="primary"type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}