
import "./Product.css"
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Croissant from "./images/croissant.jpg"
import Cookie from "./images/cookie.jpg"
import Baguete from "./images/baguete.jpg"
import Cinnamon from "./images/cinnamon.jpg"
import { Link } from "react-router-dom";

function Products() {
    return (
        <>
            <h2>Products Page</h2>
            <Alert variant="info">
                <Alert.Heading>Our Products</Alert.Heading>
            </Alert>

        <div className='big-box'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Croissant} />
                <Card.Body>
                    <Card.Title>Croissant</Card.Title>
                    <Card.Text>
                    A buttery, flaky pastry that originated in France and is often enjoyed for breakfast or as a snack.
                    </Card.Text>
                </Card.Body>
                <Link to="/products/Rafael">Croissant</Link>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Cookie} />
                <Card.Body>
                    <Card.Title>Chocolate Chip Cookies</Card.Title>
                    <Card.Text>
                    Delicious, soft, and chewy cookies studded with chocolate chips, a classic favorite.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Baguete} />
                <Card.Body>
                    <Card.Title>Baguette</Card.Title>
                    <Card.Text>
                    A long, thin loaf of French bread known for its crisp crust and soft interior, typically used for making sandwiches or serving with cheese and wine.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Cinnamon} />
                <Card.Body>
                    <Card.Title>Cinnamon Roll</Card.Title>
                    <Card.Text>
                    A sweet, spiral-shaped pastry made from yeasted dough and filled with a mixture of sugar, cinnamon, and butter, often topped with a sweet icing or glaze.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default Products;
