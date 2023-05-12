import React, { useState,useRef,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../.././public/./Images/./Ourprocess/./professional-photographer-taking-picture (1).json";
import { Google, Facebook } from "react-bootstrap-icons";

const Login = () => {
  const container = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => anim.destroy();
  }, []);
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
    <Container className="landingpage">
      <Row className="Logintext">
        <Col sm={12} md={7} className="image-column">
          <Image
            className="Navbar"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />
          <div ref={container} style={{ width: "100%", height: "auto" }} />

          <h4>Digital Platform for Photographers</h4>
        </Col>
        <Col sm={12} md={5} className="form-column">
          <div className="top-back">
            <Link href="/">&lt; Back</Link>
          </div>
          <h2 className="animate__animated animate__fadeIn">Welcome Back</h2>
          <label>Enter your mobile number to proceed</label>
          <div className="input-container">
            <input
              type="text"
              placeholder="Mobile Number"
              maxLength={10}
              pattern="[0-9]*"
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
          </div>
          <Link href="OTPVerification">
            <button className="OTP-Button">Get OTP</button>
          </Link>
          <div className="signup-options">
            <span>(or) Signup using</span>
            <div className="icon-container">
              <div className="google-icon rounded-circle">
                <Google size={24} color="#4285F4" />
              </div>
              <div className="facebook-icon rounded-circle">
                <Facebook size={24} color="#3b5998" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
