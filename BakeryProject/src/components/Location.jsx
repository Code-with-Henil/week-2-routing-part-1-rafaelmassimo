import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image';
import { Alert } from 'react-bootstrap';
import Vancouver from "./images/vancouver.jpg"

function Location() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <h2>Location Page</h2>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
            >
                Click Here to See Our Location
            </Button>
            <Fade in={open}>
                <div id="example-fade-text">
                    <Alert variant="success">
                    <h3>Vancouver BC</h3>
                        <h4>Granville Street 4343</h4>
                    </Alert>
                    <Image src={Vancouver} fluid />

                </div>
            </Fade>
        </>
    );
}

export default Location;