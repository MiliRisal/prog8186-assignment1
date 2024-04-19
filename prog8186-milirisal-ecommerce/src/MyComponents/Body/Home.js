import React, { useContext } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { ShopContext } from "./ShopContext";

function Home() {
  const { addToCart, cartItems, products } = useContext(ShopContext);

  return (
    <Container className="m-5">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => {
          const cartItemCount = cartItems[product._id] || 0;
          return (
            <Col key={product._id}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.description}</Card.Title>
                  <Card.Text>Price: $ {product.pricing}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => addToCart(product._id)}
                  >
                    Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home;
