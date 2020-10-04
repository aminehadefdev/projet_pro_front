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
            <img className="img" src={props.src} />
            <div>
                <p>{props.personne}</p>
                <p>{props.job}</p>
                <p>Inscrite en tant que {props.role}</p>
            </div>

            <Modal show={Temoignage} onHide={handleCloseTemoignage}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <Iframe
                        width="100%"
                        height="400px"
                        src={"https://www.youtube.com/embed/" + props.videoId}
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