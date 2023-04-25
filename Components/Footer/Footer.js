import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bgchange">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>About Us</h5>
            <p>We are a company that does something amazing.</p>
          </Col>
          <Col xs={12} md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main St.</li>
              <li>Suite 500</li>
              <li>Anytown, USA 12345</li>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@mycompany.com</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} My Company. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
