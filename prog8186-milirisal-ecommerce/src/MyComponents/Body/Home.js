import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import tshirt from "../Body/tshirt.jpg";
function Home() {
  return (
    <Container className="m-5">
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={tshirt} />
              <Card.Body>
                <Card.Title>Cagdyuisuydfu</Card.Title>
                <Card.Text>
                  This is a longer card with supporting t ext below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
