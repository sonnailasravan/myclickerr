import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const TermsandConditions = () => {
  const [OTP, setOTP] = useState("");

  const handleInputChange = (e) => {
    setOTP(e.target.value);
  };

  return (
    <Container fluid className="landingpage">
      <Row className="Bodytext">
        <Col xs={12} md={6}>
          <Image
            className="Navbar"
            src="/images/logo.jpg"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />
          <Image
            src="/images/Mask Group 1@2x.png"
            alt="Image"
            style={{ Width: "100%" }}
            width={480}
            height={580}
          />
        </Col>
        <Col xs={12} md={6}>
          <h2 className="animate__animated animate__fadeIn">
            Welcome to MyClicker
          </h2>
          <label className="OTPField">
            Accept the terms and conditions to complete your signup process
          </label>
          <div className="static-content-container">
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
            <p>Static content goes here</p>
          </div>
          <div className="terms-container">
            <input type="checkbox"></input>
            <label>I agree all the Terms and Conditions</label>
          </div>
          <Link href="/TermsandConditions">
            <button className="Booking-Button">Proceed</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsandConditions;
