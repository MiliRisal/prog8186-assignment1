import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Shop More</Card.Title>
        <Card.Text>Blog</Card.Text>
        <Card.Text>FAQs</Card.Text>
        <Card.Text>Contact us</Card.Text>
        <Card.Text>Follow us</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        © Copyright 2012 - 2024 | Shop More by Mili Risal | All rights reserved
      </Card.Footer>
    </Card>
  );
}

export default Footer;
