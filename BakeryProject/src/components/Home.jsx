import React from "react";
import homeImage from "./images/home.jpg"
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

function Home() {


    return (
        <>
            <Alert variant="primary">
                <Alert.Heading>Welcome to the Cornerstone Bakery</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>
            <Image src={homeImage} fluid />


        </>
    )
}

export default Home;

