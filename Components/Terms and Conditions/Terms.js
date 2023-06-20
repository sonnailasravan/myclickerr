import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

const Terms = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Card border="warning" className="w-100 w-md-50 centeringimage">
            <Card.Img variant="top" src="myclicker terms.jpg" thumbnail alt="Image" style={{ width: "200px", height: "150px",justifyContent:"center" }} />
            <Card.Body>
              <Card.Header className="text-center Headerfont">
                Terms and Conditions
              </Card.Header>
              <Card.Text className="my-card-text">
                A. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                B. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                C. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                D. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                E. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                F. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                G. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                H. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                I. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                J. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="my-card-text">
                K. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header className="text-center Headerfont">FAQS</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Frequently asked questions</ListGroup.Item>
              <ListGroup.Item>Frequently asked questions</ListGroup.Item>
              <ListGroup.Item>Frequently asked questions</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <input type="CheckBox"/>&nbsp;<span>Accept Terms and Conditions</span><br></br>
      <Button variant="info">Proceed</Button>
    </Container>
  );
};

export default Terms;
