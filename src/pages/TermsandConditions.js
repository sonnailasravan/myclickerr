import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../.././public/./Images/./Ourprocess/./professional-photographer-taking-picture (1).json";
import style from "./../../src/styles/Homepage.module.css";

const TermsandConditions = () => {
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
            src="/images/Ourprocess/Group 5982@2x.png"
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
            <Link href="/">&lt; Back</Link>
          </div>
          <h2 className="animate__animated animate__fadeIn">
            Welcome to MyClicker
          </h2>
          <label className="OTPField">
            Accept the terms and conditions to complete your signup process
          </label>
          <div className="static-content-container">
            <ul>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
              <li>
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
              </li>
            </ul>
          </div>
          <div className="terms-container">
            <input type="checkbox"></input>
            <label>I agree all the Terms and Conditions</label>
          </div>
          <Link href="/HomePage">
            <button className={style.BookingButton}>Proceed</button>
          </Link>
        </Col>
        <Col className="formColumnSmallscreen">  
        <Image
            className="navbarsmallscreenTermsAndCondition"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />


          <h1 className="headingEleTermsAndConSmallScreen">
            Welcome to MyClicker
          </h1>
          <p className="paraEleTermsAndCondSmallScreen">
            Accept the terms and conditions to complete <br/>  <span className="spanEleSmallScreen" >your signup process</span>
          </p>
          <div className="listContSmallScreen">
            <ul className="ulContSmallScreen">
              <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
            </ul>
          </div>
          <div className="terms-container">
            <input type="checkbox"></input>
            <label className="labelSmallScreen">I agree all the Terms and Conditions</label>
          </div>
          <Link href="/HomePage">
            <button className="buttonProceedSmallScreenTermsAndCondi">Proceed</button>
          </Link>
        </Col>

        <Col className="formColumnMediumscreen">  
        <Image
            className="navbarMediumscreenTermsAndCondition"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />


          <h1 className="headingEleTermsAndConMediumScreen">
            Welcome to MyClicker
          </h1>
          <p className="paraEleTermsAndCondMediumScreen">
            Accept the terms and conditions to complete <span>your signup process</span>
          </p>
          <div className="listContMediumScreen">
            <ul className="ulContMediumScreen">
              <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
             <li className="liCont">
                Static content goes hereStatic content goes hereStatic content
                goes hereStatic content goes hereStatic content goes here
             </li>
            </ul>
          </div>
          <div className="terms-container">
            <input type="checkbox"></input>
            <label className="labelMediumScreen">I agree all the Terms and Conditions</label>
          </div>
          <Link href="/HomePage">
            <button className="buttonProceedMediumScreenTermsAndCondi">Proceed</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsandConditions;
