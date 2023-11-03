
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Baker from "./images/baker.jpg"

function About() {

    return (

        <>
            <h2>About Page</h2>
            <Alert variant="secondary">
                <Alert.Heading>Welcome to Our Bakery</Alert.Heading>
                <hr />
                <p>
                    Explore a delightful world of freshly baked goods, sweet treats, and
                    savory delights. Our bakery is dedicated to bringing you the finest
                    in artisanal creations.
                </p>
                <hr />
                <p>
                    From mouthwatering pastries to custom cakes for special occasions, we
                    take pride in delivering quality and taste that will keep you coming
                    back for more.
                </p>
            </Alert>

            <Card>
                <Card.Img variant="info" src={Baker} />
                <Card.Body>
                    <Card.Text>
                        Our Bakery Chef
                    </Card.Text>
                </Card.Body>
            </Card>
            </>
            );
}

            export default About;