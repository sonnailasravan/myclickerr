import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../.././public/./Images/./Ourprocess/./movie-maker-making-movie (1).json"

const OTPVerification = () => {
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
          {/* <Image
            src="/images/Mask Group 1@2x.png"
            alt="Image"
            style={{ Width: "100%" }}
            width={480}
            height={580}
          /> */}
          <Lottie 
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
            speed:3,
          }}
          width={480}
          height={580}
          />
        </Col>
        <Col xs={12} md={6}>
          <h2 className="animate__animated animate__fadeIn">Enter the OTP</h2>
          <label className="OTPField">
            Enter the OTP sent to 123456789
            <Link href="/Login">Edit</Link>
          </label>
          <div className="input-container">
            <input type="text" value={OTP} onChange={handleInputChange} />
            <label>Enter your OTP </label>
          </div>
          <Link href="/TermsandConditions">
            <button className="Booking-Button">Submit OTP</button>
          </Link>
          <div className="resend-container">
            <label >Didn’t receive OTP? Resend</label>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OTPVerification;
