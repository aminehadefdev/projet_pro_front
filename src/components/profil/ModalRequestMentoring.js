import React, {useState} from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import qs from 'qs'
import axios from 'axios'

function ModalRequestMentoring(props){
    const [message, setMessage] = useState("")
    const [errorMs, setErrorMS] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()

        var data = qs.stringify({
            'token': localStorage.getItem("token"),
            'idMentor': props.target.id,
            'message': message,
        });
        var config = {
             method: 'post',
             url: 'http://localhost:8000/user/request/mentoring',
             headers: { 
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             data : data
        };
           
        axios(config)
           .then(function (response) {
             console.log(response.data);
           })
           .catch(function (error) {
             console.log(error);
           });
    }
    return (
        <Modal show={props.showDM} onHide={props.handleCloseDM}>
        <Modal.Header closeButton>
            <Modal.Title>Demande de mentoring</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>    
                <Form.Group controlId="Description">
                    <Form.Label>description</Form.Label>
                    <Form.Control
                        value={message}
                        onChange={(event)=>{setMessage(event.currentTarget.value)}}
                        placeholder="Enter your message"
                        as="textarea"
                        rows="3"
                    />
                    {errorMs !== '' ? <small style={{color: "red"}} id="emailHelp">{errorMs}</small>:null}
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal.Body>
    </Modal>
    )
}

export default ModalRequestMentoring