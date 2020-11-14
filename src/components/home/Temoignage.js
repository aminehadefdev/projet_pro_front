import React, {useState} from 'react';
import Iframe from 'react-iframe'

import { Modal, Button } from 'react-bootstrap';

function Temoignage(props){
    const [Temoignage, setTemoignage] = useState(false);
    const handleCloseTemoignage = () => setTemoignage(false);
    const handleShowTemoignage = () => setTemoignage(true);
    return (
        <div className="item">
            <img
                className="img-btn"
                src="/assets/images/BP.png"
                onClick={handleShowTemoignage}
            />
            <img className="img" src={"http://localhost:8000/static/" + props.video.image} />
            <div>
                <p>{props.video.name} {props.video.age} ans</p>
                <p>{props.video.job}</p>
                <p>Inscrite en tant que {props.video.role == 1 ? 'mentor': "mentorer"}</p>
            </div>

            <Modal show={Temoignage} onHide={handleCloseTemoignage}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <Iframe
                        width="100%"
                        height="400px"
                        src={props.video.path}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseTemoignage}>Close</Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Temoignage