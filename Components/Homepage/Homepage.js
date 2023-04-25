import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Homepage = () => {
  return (
    <Container fluid className="landingpage">
      <Row className="Bodytext">
        <Col xs={12} md={6}>
          <h2 class="animate__animated animate__fadeIn">Capture your precious memories with pros</h2>
          <p>
            Are you looking for a professional photographer for your upcoming
            event, but don’t know where to start? We’re here
          </p>
          <button className="Booking-Button">Book a photographer</button>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src="/images/Mask Group 1@2x.png"
            alt="Image"
            style={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>

      <Row className="summaryBlock">
        <Col xs={12} md={3}>
          <div>
            <h1>What do we provide</h1>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div>
            <h1>500+</h1>
            <h6>Professional Photographers</h6>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div>
            <h1>4.9</h1>
            <h6>Rated Photographers</h6>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div>
            <h1>100%</h1>
            <h6>Customer Satisfaction</h6>
          </div>
        </Col>
      </Row>
      {/* Photographers Display */}
      <Container fluid>
        <Row className="photographersDisplay">
          <Col>
            <div>
              <h1>Our popular photographers</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Richard Chawez</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button className="details-btn">view Details</button>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Rian Hayes</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button className="details-btn">view Details</button>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Alex Barnett</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button className="details-btn">view Details</button>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Alex Hayes</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button className="details-btn">view Details</button>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <button className="view-photographersButton">
          View all photographers
        </button>
      </Container>
      <container fluid>
        <Row>
            <Col>
            <div>
                
            </div>
            </Col>
        </Row>
      </container>
    </Container>
  );
};

export default Homepage;
