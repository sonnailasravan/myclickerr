import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../.././public/./Images/./Ourprocess/./professional-photographer-taking-picture (1).json"

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleInputFocus = () => {
    const inputContainer = document.querySelector(".input-container");
    inputContainer.classList.add("active");
  };

  const handleInputBlur = () => {
    if (!mobileNumber) {
      const inputContainer = document.querySelector(".input-container");
      inputContainer.classList.remove("active");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      setMobileNumber(mobileNumber.slice(0, -1));
    }
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
            height={480}
            width={480}
          />
        </Col>
        <Col xs={12} md={6}>
          <h2 className="animate__animated animate__fadeIn">Welcome Back</h2>
          {/* <p>Enter your mobile number to proceed</p> */}
          <div className="input-container">
            <input
              type="text"
              maxLength={10}
              pattern="[0-9]*"
              //   placeholder="Enter your mobile number to proceed"
              value={mobileNumber}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onKeyUp={handleKeyDown}
              onKeyDown={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <label>Enter your mobile number to proceed</label>
          </div>
          <Link href="OTPVerification">
            <button className="Booking-Button">Get OTP</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
