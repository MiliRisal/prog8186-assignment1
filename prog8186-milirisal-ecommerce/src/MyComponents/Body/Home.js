import React, { useContext } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { ProductList } from "../../Products";
import { ShopContext } from "./ShopContext";
function Home() {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <Container className="m-5">
      <Row xs={1} md={3} className="g-4">
        {ProductList.map((product) => {
          const cartItemCount = cartItems[product.id] || 0;
          return (
            <Col key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.productImage} />
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>Price: $ {product.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => addToCart(product.id)}
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
