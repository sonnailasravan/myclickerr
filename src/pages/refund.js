// import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../.././public/./Images/./Ourprocess/./professional-photographer-taking-picture (1).json";
import style from "./../../src/styles/Homepage.module.css";

const refund = () => {
  // const container = useRef(null);
  // useEffect(() => {
  //   const anim = lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //   });
  //   return () => anim.destroy();
  // }, []);
  // const [OTP, setOTP] = useState("");

  // const handleInputChange = (e) => {
  //   setOTP(e.target.value);
  // };

  return (
    <Container className="landingpage">
      <Row className="Logintext">
        {/* <Col xs={12} md={7} className="image-column">
          <Image
            className="Navbar"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />
          <div ref={container} style={{ width: "50%", height: "auto" }} />
          <h4>Digital Platform for Photographers</h4>
        </Col> */}
        <Col xs={12} md={12} className="form-column">
          <div className="top-back">
            <Link href="/">&lt; Back</Link>
          </div>
          {/* <h2 className="animate__animated animate__fadeIn">
            Welcome to MyClicker
          </h2>
          <label className="OTPField">
            Accept the terms and conditions to complete your signup process
          </label> */}
          <div className="static-content-container" style={{ userSelect: "none" }}>
            <ul style={{ listStyleType: "none" }}>
            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "20px 10px 10px 10px",
                }}
              >
                <h3>
                  <b>Refund Policy</b>
                </h3>
                <label style={{ fontSize: "12px" }}>
                  (Effective Date: 19/06/2023){" "}
                </label>
              </div>

            <label style={{ fontSize: "14px", textAlign: "justify" }}>
  Thank you for choosing MyClicker Photography Services
  (&quot;MyClicker,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Refund Policy explains
  the terms and conditions regarding refunds for the photography
  services provided through our website www.myclicker.com
  (&quot;Website&quot;). By booking our services, you agree to comply with
  and be bound by this Refund Policy. If you do not agree with
  this policy, please refrain from booking our services.
</label>


              <li>
                <h5>
                  <bold>Refund Eligibility</bold>
                </h5>
                <h6> General Refund Policy</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    We strive to provide high-quality photography services and
                    ensure customer satisfaction. However, due to the nature of
                    our services, refunds are considered on a case-by-case
                    basis. We evaluate refund requests based on the following
                    circumstances:
                  </p>
                  <p>
                    {" "}
                    Technical Issues: If there are technical issues or equipment
                    failure on our part that significantly impact the quality of
                    the delivered photographs, you may be eligible for a refund.
                  </p>
                  <p>
                    {" "}
                    Cancellation: If you cancel a scheduled photography session
                    within the specified time frame outlined in our booking
                    terms, you may be eligible for a refund, subject to any
                    cancellation fees or charges.
                  </p>
                  <p>
                    {" "}
                    Unsatisfactory Service: If you are dissatisfied with the
                    quality of our services or the final photographs, we will
                    review your concerns on a case-by-case basis to determine
                    refund eligibility.
                  </p>
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>Non-Refundable Services</h5>

                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <h6>The following services are typically non-refundable:</h6>
                  <p>
                    Digital Downloads: Once digital photographs are delivered to
                    you, they are non-refundable.
                  </p>
                  <p>
                    Albums and Prints: Customized albums and prints are
                    non-refundable as they are tailored to your specific
                    requirements.
                  </p>
                  <p>
                    Late Cancellations: If you cancel a scheduled photography
                    session outside the specified time frame outlined in our
                    booking terms, it may be subject to cancellation fees or
                    charges, and a refund may not be provided.
                  </p>
                </label>
              </li>
              <li>
                <h5>Refund Process</h5>
                <h6>Requesting a Refund</h6>
                <label style={{ fontSize: "14px" }}>
                  To request a refund, please contact us at
                  [contact@myclicker.com] within [1] from the date of your
                  photography session or the delivery of your photographs.
                  Please provide your booking details and a clear explanation of
                  your refund request.
                </label>
              </li>
              <li>
                <h5>Refund Decision</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Once we have evaluated your refund request, we will notify you
                  of our decision. If your refund request is approved, we will
                  process the refund according to the original payment method
                  used for the booking. Please note that the refund processing
                  time may vary depending on your payment provider.
                </label>
              </li>
              <li>
                <h5> Modifications and Termination</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We reserve the right to modify or terminate this Refund Policy
                  at any time, without prior notice. Any changes to this policy
                  will be effective immediately upon posting on our Website.
                </label>
              </li>

              <li>
                <h5>Contact Us</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    {" "}
                    If you have any questions or need further assistance
                    regarding our refund policy, please contact us at
                    [contact@myclicker.com]. We are here to help and address any
                    concerns you may have.
                  </p>
                  <p>
                    Please note that this Refund Policy is subject to and should
                    be read in conjunction with our Terms and Conditions and any
                    other applicable policies or agreements.
                  </p>
                </label>
              </li>
            </ul>
          </div>
          {/* <div className="terms-container">
            <input type="checkbox"></input>
            <label>I agree all the Terms and Conditions</label>
          </div>
          <Link href="/HomePage">
            <button className={style.BookingButton}>Proceed</button>
          </Link> */}
        </Col>
        <Col className="formColumnSmallscreen">
          {/* <Image
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
            Accept the terms and conditions to complete <br />{" "}
            <span className="spanEleSmallScreen">your signup process</span>
          </p> */}
          <div className="listContSmallScreen" style={{userSelect:"none"}}>
          <ul style={{ listStyleType: "none" }}>
          <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "20px 10px 10px 10px",
                }}
              >
                <h3>
                  <b>Refund Policy</b>
                </h3>
                <label style={{ fontSize: "12px" }}>
                  (Effective Date: 19/06/2023){" "}
                </label>
              </div>
            <label style={{ fontSize: "14px", textAlign: "justify" }}>
  Thank you for choosing MyClicker Photography Services
  (&quot;MyClicker,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Refund Policy explains
  the terms and conditions regarding refunds for the photography
  services provided through our website www.myclicker.com
  (&quot;Website&quot;). By booking our services, you agree to comply with
  and be bound by this Refund Policy. If you do not agree with
  this policy, please refrain from booking our services.
</label>


              <li>
                <h5>
                  <bold>Refund Eligibility</bold>
                </h5>
                <h6> General Refund Policy</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    We strive to provide high-quality photography services and
                    ensure customer satisfaction. However, due to the nature of
                    our services, refunds are considered on a case-by-case
                    basis. We evaluate refund requests based on the following
                    circumstances:
                  </p>
                  <p>
                    {" "}
                    Technical Issues: If there are technical issues or equipment
                    failure on our part that significantly impact the quality of
                    the delivered photographs, you may be eligible for a refund.
                  </p>
                  <p>
                    {" "}
                    Cancellation: If you cancel a scheduled photography session
                    within the specified time frame outlined in our booking
                    terms, you may be eligible for a refund, subject to any
                    cancellation fees or charges.
                  </p>
                  <p>
                    {" "}
                    Unsatisfactory Service: If you are dissatisfied with the
                    quality of our services or the final photographs, we will
                    review your concerns on a case-by-case basis to determine
                    refund eligibility.
                  </p>
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>Non-Refundable Services</h5>

                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <h6>The following services are typically non-refundable:</h6>
                  <p>
                    Digital Downloads: Once digital photographs are delivered to
                    you, they are non-refundable.
                  </p>
                  <p>
                    Albums and Prints: Customized albums and prints are
                    non-refundable as they are tailored to your specific
                    requirements.
                  </p>
                  <p>
                    Late Cancellations: If you cancel a scheduled photography
                    session outside the specified time frame outlined in our
                    booking terms, it may be subject to cancellation fees or
                    charges, and a refund may not be provided.
                  </p>
                </label>
              </li>
              <li>
                <h5>Refund Process</h5>
                <h6>Requesting a Refund</h6>
                <label style={{ fontSize: "14px" }}>
                  To request a refund, please contact us at
                  [contact@myclicker.com] within [1] from the date of your
                  photography session or the delivery of your photographs.
                  Please provide your booking details and a clear explanation of
                  your refund request.
                </label>
              </li>
              <li>
                <h5>Refund Decision</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Once we have evaluated your refund request, we will notify you
                  of our decision. If your refund request is approved, we will
                  process the refund according to the original payment method
                  used for the booking. Please note that the refund processing
                  time may vary depending on your payment provider.
                </label>
              </li>
              <li>
                <h5> Modifications and Termination</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We reserve the right to modify or terminate this Refund Policy
                  at any time, without prior notice. Any changes to this policy
                  will be effective immediately upon posting on our Website.
                </label>
              </li>

              <li>
                <h5>Contact Us</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    {" "}
                    If you have any questions or need further assistance
                    regarding our refund policy, please contact us at
                    [contact@myclicker.com]. We are here to help and address any
                    concerns you may have.
                  </p>
                  <p>
                    Please note that this Refund Policy is subject to and should
                    be read in conjunction with our Terms and Conditions and any
                    other applicable policies or agreements.
                  </p>
                </label>
              </li>
            </ul>
          </div>
          {/* <div className="terms-container">
            <input type="checkbox"></input>
            <label className="labelSmallScreen">
              I agree all the Terms and Conditions
            </label>
          </div>
          <Link href="/HomePage">
            <button className="buttonProceedSmallScreenTermsAndCondi">
              Proceed
            </button>
          </Link> */}
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
            {/* Accept the terms and conditions to complete{" "}
            <span>your signup process</span> */}
          </p>
          <div className="listContMediumScreen" style={{userSelect:"none"}}>
          <ul style={{ listStyleType: "none" }}>
          <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "20px 10px 10px 10px",
                }}
              >
                <h3>
                  <b>Refund Policy</b>
                </h3>
                <label style={{ fontSize: "12px" }}>
                  (Effective Date: 19/06/2023){" "}
                </label>
              </div>

            <label style={{ fontSize: "14px", textAlign: "justify" }}>
  Thank you for choosing MyClicker Photography Services
  (&quot;MyClicker,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Refund Policy explains
  the terms and conditions regarding refunds for the photography
  services provided through our website www.myclicker.com
  (&quot;Website&quot;). By booking our services, you agree to comply with
  and be bound by this Refund Policy. If you do not agree with
  this policy, please refrain from booking our services.
</label>


              <li>
                <h5>
                  <bold>Refund Eligibility</bold>
                </h5>
                <h6> General Refund Policy</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    We strive to provide high-quality photography services and
                    ensure customer satisfaction. However, due to the nature of
                    our services, refunds are considered on a case-by-case
                    basis. We evaluate refund requests based on the following
                    circumstances:
                  </p>
                  <p>
                    {" "}
                    Technical Issues: If there are technical issues or equipment
                    failure on our part that significantly impact the quality of
                    the delivered photographs, you may be eligible for a refund.
                  </p>
                  <p>
                    {" "}
                    Cancellation: If you cancel a scheduled photography session
                    within the specified time frame outlined in our booking
                    terms, you may be eligible for a refund, subject to any
                    cancellation fees or charges.
                  </p>
                  <p>
                    {" "}
                    Unsatisfactory Service: If you are dissatisfied with the
                    quality of our services or the final photographs, we will
                    review your concerns on a case-by-case basis to determine
                    refund eligibility.
                  </p>
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>Non-Refundable Services</h5>

                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <h6>The following services are typically non-refundable:</h6>
                  <p>
                    Digital Downloads: Once digital photographs are delivered to
                    you, they are non-refundable.
                  </p>
                  <p>
                    Albums and Prints: Customized albums and prints are
                    non-refundable as they are tailored to your specific
                    requirements.
                  </p>
                  <p>
                    Late Cancellations: If you cancel a scheduled photography
                    session outside the specified time frame outlined in our
                    booking terms, it may be subject to cancellation fees or
                    charges, and a refund may not be provided.
                  </p>
                </label>
              </li>
              <li>
                <h5>Refund Process</h5>
                <h6>Requesting a Refund</h6>
                <label style={{ fontSize: "14px" }}>
                  To request a refund, please contact us at
                  [contact@myclicker.com] within [1] from the date of your
                  photography session or the delivery of your photographs.
                  Please provide your booking details and a clear explanation of
                  your refund request.
                </label>
              </li>
              <li>
                <h5>Refund Decision</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Once we have evaluated your refund request, we will notify you
                  of our decision. If your refund request is approved, we will
                  process the refund according to the original payment method
                  used for the booking. Please note that the refund processing
                  time may vary depending on your payment provider.
                </label>
              </li>
              <li>
                <h5> Modifications and Termination</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We reserve the right to modify or terminate this Refund Policy
                  at any time, without prior notice. Any changes to this policy
                  will be effective immediately upon posting on our Website.
                </label>
              </li>

              <li>
                <h5>Contact Us</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    {" "}
                    If you have any questions or need further assistance
                    regarding our refund policy, please contact us at
                    [contact@myclicker.com]. We are here to help and address any
                    concerns you may have.
                  </p>
                  <p>
                    Please note that this Refund Policy is subject to and should
                    be read in conjunction with our Terms and Conditions and any
                    other applicable policies or agreements.
                  </p>
                </label>
              </li>
             
            </ul>
          </div>
          {/* <div className="terms-container">
            <input type="checkbox"></input>
            <label className="labelMediumScreen">
              I agree all the Terms and Conditions
            </label>
          </div>
          <Link href="/HomePage">
            <button className="buttonProceedMediumScreenTermsAndCondi">
              Proceed
            </button>
          </Link> */}
        </Col>
      </Row>
    </Container>
  );
};

export default refund;
