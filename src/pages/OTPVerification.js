import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../.././public/./Images/./Ourprocess/./movie-maker-making-movie (1).json";
import style from "./../../src/styles/Homepage.module.css";

const OTPVerification = () => {
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
  const [OTP, setOTP] = useState("");

  const handleInputChange = (e) => {
    setOTP(e.target.value);
  };

  return (
    <Container className="landingpage">
      <Row className="Logintext">
        <Col xs={12} md={7} className="image-column">
          <Image
            className="Navbar"
            src="/Images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />
          <div ref={container} style={{ width: "100%", height: "auto" }} />

          <h4>Digital Platform for Photographers</h4>
        </Col>
        <Col xs={12} md={5} className="form-column">
          <div className="top-back">
            <Link href="/Login">&lt; Back</Link>
          </div>
          <h2 className="animate__animated animate__fadeIn">Enter the OTP</h2>
          <label className="OTPField">
            Enter the OTP sent to 123456789
            <Link href="/Login">Edit</Link>
          </label>
          <div className="input-container">
            <input
              type="text"
              value={OTP}
              onChange={handleInputChange}
              placeholder="Enter OTP"
            />
          </div>
          <Link href="/TermsandConditions">
            <button className={style.BookingButton}>Submit OTP</button>
          </Link>
          <div className="resend-container">
            <label>
              Didn’t receive OTP? <span>Resend</span>
            </label>
          </div>
        </Col>
        <Col className="formColumnSmallScreenOtpVeri">
          <Image
            className="NavbarSmallScreenOTPVerif"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={120}
            height={40}
            priority
          />
          <p className="paraSmallScreenOTpVer">OTP Verification</p>
          <h1 className="headingEleSmallScreenOtp">Enter the OTP</h1>
          <p className="paraSmallScreenOTpVer">
            Enter the OTP sent to{" "}
            <span className="spanElementOTPVer">123456789</span>
            <Link href="/Login">Edit</Link>
          </p>
          {/* <div className="input-container">
            <input
              type="text"
              value={OTP}
              onChange={handleInputChange}
              placeholder="Enter OTP"
            />
          </div> */}
          <input
            className="inputFeildOTPVerSmallScreen"
            type="text"
            placeholder="Enter OTP"
          />
          <p className="paraSmallScreenOTpVerDetails">
            Didn’t receive OTP?{" "}
            <span className="spanElementOTPVer">Resend</span>
          </p>
          <Link href="/TermsandConditions">
            <button className="SubmitButtonOtpSmallScreen">Submit OTP</button>
          </Link>
          <div className="resend-container"></div>
        </Col>

        <Col className="formColumnSmallMediumOtpVeri">
          <Image
            className="NavbarMediumScreenOTPVerif"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={120}
            height={40}
            priority
          />
          <p className="paraMediumScreenOTpVer">OTP Verification</p>
          <h1 className="headingEleMediumScreenOtp">Enter the OTP</h1>
          <p className="paraMediumScreenOTpVer">
            Enter the OTP sent to{" "}
            <span className="spanElementOTPVer">123456789</span>
            <Link href="/Login">Edit</Link>
          </p>

          <input
            className="inputFeildOTPVerMediumScreen"
            type="text"
            placeholder="Enter OTP"
          />
          <p className="paraMediumScreenOTpVerDetails">
            Didn’t receive OTP?{" "}
            <span className="spanElementOTPVer">Resend</span>
          </p>
          <Link href="/TermsandConditions">
            <button className="SubmitButtonOtpMediumScreen">Submit OTP</button>
          </Link>
          <div className="resend-container"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default OTPVerification;
