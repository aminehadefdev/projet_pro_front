import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Row, Col, Card, Carousel } from 'react-bootstrap';


function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const [showSignUP, setShowSignUP] = useState(false);
  const handleCloseSignUP = () => setShowSignUP(false);
  const handleShowSignUP = () => setShowSignUP(true);

  return (
    <div>
      <header className="container-fluid header">
        <nav class="navbar navbar-light bg-light container-fluid">
          <a class="navbar-brand" href="/">
            <img src="/assets/images/logo.png" width="60" height="60" class="d-inline-block align-top" alt="" />
          </a>
          <div>
            <button onClick={handleShowSignIn} type="button" class="btn btn-outline-dark btn-nav">SignIn</button>
            <button onClick={handleShowSignUP} type="button" class="btn btn-outline-dark btn-nav">SignUP</button>
          </div>
        </nav>
        <Modal show={showSignIn} onHide={handleCloseSignIn}>
          <Modal.Header closeButton>
            <Modal.Title>SignIn</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSignIn}>
              Close
            </Button>
            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showSignUP} onHide={handleCloseSignUP}>
          <Modal.Header closeButton>
            <Modal.Title>SignUP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="Firstname">
                      <Form.Label>Firstname</Form.Label>
                      <Form.Control type="text" placeholder="Enter Firstname" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="Lastname">
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control type="text" placeholder="Enter Lastname" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="Password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="ConfirmePassword">
                      <Form.Label>Confirme password</Form.Label>
                      <Form.Control type="password" placeholder="ConfirmePassword" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="Description">
                    <Form.Label>description</Form.Label>
                    <Form.Control  placeholder="Enter your description" as="textarea" rows="3" />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="Job">
                      <Form.Label>Job</Form.Label>
                      <Form.Control type="text" placeholder="job" />
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
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSignUP}>
              Close
            </Button>
            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
      <main className="container-fluid main">
        <div className="container">
          <div>
            <h2>QUI EST TORUS?</h2>
            <p>
              Nous Sommes une plateform qui met en relation des entrepreneurs sociaux qui ont un projet impactant et qui on besoins de conseilles dans un domain.
            </p>
          </div>
          <div>
            <h2>COMMENT ÇA MARCHE?</h2>
            <p>Vous pouvez vous inscrire en tant que mentor ou mentorer puis vous aller etre contacter pasr un de nos administrateur pour passer un entretien afin de connaitre vos motivations puis vous allez pouvoir accer a votre compte.</p>
          </div>
        </div>
        <div className="container">
          
        </div>
      </main>
      <footer className="container"></footer>
    </div>
  );
}

export default App;
