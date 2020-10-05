import React, {useState} from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

import ModalSignUp from './ModalSignUp'

function HeaderHome(){
    const [showSignUP, setShowSignUP] = useState(false);
    const handleCloseSignUP = () => setShowSignUP(false);
    const handleShowSignUP = () => setShowSignUP(true);

    const [showSignIn, setShowSignIn] = useState(false);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);

    const [emailSignIn, setEmailSignIn] = useState("")
    const [passwordSignIn, setPasswordSignIn] = useState("")

    return(




        <header className="container-fluid header">
            <nav className="navbar navbar-light bg-light container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/assets/images/logo.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                </a>
                <div>
                    <button onClick={handleShowSignIn} type="button" className="btn btn-outline-dark btn-nav">SignIn</button>
                    <button onClick={handleShowSignUP} type="button" className="btn btn-outline-dark btn-nav">SignUP</button>
                </div>
            </nav>
            <ModalSignUp showSignUP={showSignUP} handleCloseSignUP={handleCloseSignUP} />
        </header>
    )
}

export default HeaderHome;
