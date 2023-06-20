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
          <div className="static-content-container">
            <ul style={{ listStyleType: 'none' }}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4><b>Terms and Conditions</b></h4>
                <h6>Effective Date:19-06-2023 </h6>
              </div>

           <label style={{ fontSize: "14px", textAlign: "justify" }}>
  Welcome to www.myclicker.com(&quot;Website&quot;), owned and operated by
  FCS (Fineant Consultant Service PVT LTD) (&quot;MyClicker,&quot; &quot;we,&quot;
  &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions govern your use of
  our Website and the services provided through it. By accessing
  or using our Website, you agree to comply with and be bound by
  these Terms and Conditions. If you do not agree with these
  terms, please do not use our Website.
</label>

              <li >
                <h5>
                  <bold>
                    Use of the Website
                  </bold>
                </h5>
                <h6>Eligibility</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>

                  You must be at least 14 years old to use our Website and
                  services. By using our Website, you represent and warrant that
                  you are at least 14 years old.
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>  License to Use</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>

                  We grant you a limited, non-exclusive, non-transferable,
                  revocable license to access and use our Website for personal
                  and non-commercial purposes. You may not use our Website for
                  any illegal or unauthorized purpose.
                </label>
              </li>
              <li>
                <h5>  User Responsibilities</h5>
                <label style={{ fontSize: "14px" }}>When using our Website, you agree to:</label>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Provide accurate and up-to-date informationMaintain the
                  security and confidentiality of your account credentials
                </label>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Comply with all applicable laws and regulationsNot engage in
                  any activity that may interfere with or disrupt the operation
                  of the WebsiteNot attempt to gain unauthorized access to any
                  portion of the Website or any other systems or networks
                  connected to the WebsiteIntellectual Property
                </label>
              </li>
              <li>
                <h5>Ownership</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  All content, materials, and features available on our Website,
                  including but not limited to text, graphics, logos, images,
                  photographs, audio clips, and software, are owned by MyClicker
                  or its licensors and are protected by intellectual property
                  laws.
                </label>
              </li>
              <li>
                <h5> Limited License</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Subject to these Terms and Conditions, we grant you a limited,
                  non-exclusive, non-transferable license to access and view the
                  content on our Website for personal and non-commercial
                  purposes. You may not modify, distribute, reproduce, publish,
                  license, or create derivative works from any content on our
                  Website without our prior written consent.
                </label>
              </li>
              <h3>Booking and Payment</h3>
              <li>
                <h5> Photography Services</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our Website may allow you to book photography services. By
                  making a booking, you agree to provide accurate and
                  completeinformation. The availability and pricing of our
                  services are subject to change without notice.
                </label>
              </li>
              <li>
                <h5> Payment</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Payment for our services is required in accordance with the
                  pricing and payment terms specified on our Website. We use
                  secure payment processors to process your payments. By
                  providing your payment{" "}
                </label>
                <label style={{ fontSize: "14px" }}>
                  information, you authorize us to charge the specified amount.
                </label>
                <h5>Limitation of Liability</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  To the fullest extent permitted by applicable law, in no event
                  shall MyClicker or its affiliates, partners, directors,
                  officers, employees, agents, or licensors be liable for any
                  direct, indirect, incidental, special, consequential, or
                  punitive damages arising out of or in any way connected with
                  your use of our Website or services.
                </label>
                <h5>Indemnification</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  You agree to indemnifyand hold harmless MyClicker and its
                  affiliates, partners, directors, officers, employees, agents,
                  and licensors from and against any claims, liabilities,
                  damages, losses, costs, or expenses arising out of or in any
                  way related to your use of our Website, violation of these
                  Terms and Conditions, or infringement of any intellectual
                  property or other rights of any third party.
                </label>
                <h5>Modification and Termination</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We reserve the right to modify or terminate our Website or
                  these Terms and Conditions at any time, without prior notice.
                  We may suspend or terminate your access to our Website if you
                  violate these Terms and Conditions.
                </label>
                <h5>Governing Law and Dispute Resolution</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of [Jurisdiction]. Any dispute
                  arising out of or in connection with these Terms and
                  Conditions shall be resolved
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
            Accept the terms and conditions to complete <br />{" "}
            <span className="spanEleSmallScreen">your signup process</span>
          </p>
          <div className="listContSmallScreen">
          <ul style={{ listStyleType: 'none' }}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4><b>Terms and Conditions</b></h4>
                <h6>Effective Date:19-06-2023 </h6>
              </div>

           <label style={{ fontSize: "14px", textAlign: "justify" }}>
  Welcome to www.myclicker.com(&quot;Website&quot;), owned and operated by
  FCS (Fineant Consultant Service PVT LTD) (&quot;MyClicker,&quot; &quot;we,&quot;
  &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions govern your use of
  our Website and the services provided through it. By accessing
  or using our Website, you agree to comply with and be bound by
  these Terms and Conditions. If you do not agree with these
  terms, please do not use our Website.
</label>

              <li >
                <h5>
                  <bold>
                    Use of the Website
                  </bold>
                </h5>
                <h6>Eligibility</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>

                  You must be at least 14 years old to use our Website and
                  services. By using our Website, you represent and warrant that
                  you are at least 14 years old.
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>  License to Use</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>

                  We grant you a limited, non-exclusive, non-transferable,
                  revocable license to access and use our Website for personal
                  and non-commercial purposes. You may not use our Website for
                  any illegal or unauthorized purpose.
                </label>
              </li>
              <li>
                <h5>  User Responsibilities</h5>
                <label style={{ fontSize: "14px" }}>When using our Website, you agree to:</label>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Provide accurate and up-to-date informationMaintain the
                  security and confidentiality of your account credentials
                </label>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Comply with all applicable laws and regulationsNot engage in
                  any activity that may interfere with or disrupt the operation
                  of the WebsiteNot attempt to gain unauthorized access to any
                  portion of the Website or any other systems or networks
                  connected to the WebsiteIntellectual Property
                </label>
              </li>
              <li>
                <h5>Ownership</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  All content, materials, and features available on our Website,
                  including but not limited to text, graphics, logos, images,
                  photographs, audio clips, and software, are owned by MyClicker
                  or its licensors and are protected by intellectual property
                  laws.
                </label>
              </li>
              <li>
                <h5> Limited License</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Subject to these Terms and Conditions, we grant you a limited,
                  non-exclusive, non-transferable license to access and view the
                  content on our Website for personal and non-commercial
                  purposes. You may not modify, distribute, reproduce, publish,
                  license, or create derivative works from any content on our
                  Website without our prior written consent.
                </label>
              </li>
              <h3>Booking and Payment</h3>
              <li>
                <h5> Photography Services</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our Website may allow you to book photography services. By
                  making a booking, you agree to provide accurate and
                  completeinformation. The availability and pricing of our
                  services are subject to change without notice.
                </label>
              </li>
              <li>
                <h5> Payment</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Payment for our services is required in accordance with the
                  pricing and payment terms specified on our Website. We use
                  secure payment processors to process your payments. By
                  providing your payment{" "}
                </label>
                <label style={{ fontSize: "14px" }}>
                  information, you authorize us to charge the specified amount.
                </label>
                <h5>Limitation of Liability</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  To the fullest extent permitted by applicable law, in no event
                  shall MyClicker or its affiliates, partners, directors,
                  officers, employees, agents, or licensors be liable for any
                  direct, indirect, incidental, special, consequential, or
                  punitive damages arising out of or in any way connected with
                  your use of our Website or services.
                </label>
                <h5>Indemnification</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  You agree to indemnifyand hold harmless MyClicker and its
                  affiliates, partners, directors, officers, employees, agents,
                  and licensors from and against any claims, liabilities,
                  damages, losses, costs, or expenses arising out of or in any
                  way related to your use of our Website, violation of these
                  Terms and Conditions, or infringement of any intellectual
                  property or other rights of any third party.
                </label>
                <h5>Modification and Termination</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We reserve the right to modify or terminate our Website or
                  these Terms and Conditions at any time, without prior notice.
                  We may suspend or terminate your access to our Website if you
                  violate these Terms and Conditions.
                </label>
                <h5>Governing Law and Dispute Resolution</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of [Jurisdiction]. Any dispute
                  arising out of or in connection with these Terms and
                  Conditions shall be resolved
                </label>
              </li>
              {/* <li>
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
              </li> */}
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
            Accept the terms and conditions to complete{" "}
            <span>your signup process</span>
          </p>
          <div className="listContMediumScreen">
          <ul style={{ listStyleType: 'none' }}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4><b>Terms and Conditions</b></h4>
                <h6>Effective Date:19-06-2023 </h6>
              </div>

           <label style={{ fontSize: "14px", textAlign: "justify" }}>
  Welcome to www.myclicker.com(&quot;Website&quot;), owned and operated by
  FCS (Fineant Consultant Service PVT LTD) (&quot;MyClicker,&quot; &quot;we,&quot;
  &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions govern your use of
  our Website and the services provided through it. By accessing
  or using our Website, you agree to comply with and be bound by
  these Terms and Conditions. If you do not agree with these
  terms, please do not use our Website.
</label>

              <li >
                <h5>
                  <bold>
                    Use of the Website
                  </bold>
                </h5>
                <h6>Eligibility</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>

                  You must be at least 14 years old to use our Website and
                  services. By using our Website, you represent and warrant that
                  you are at least 14 years old.
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>  License to Use</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>

                  We grant you a limited, non-exclusive, non-transferable,
                  revocable license to access and use our Website for personal
                  and non-commercial purposes. You may not use our Website for
                  any illegal or unauthorized purpose.
                </label>
              </li>
              <li>
                <h5>  User Responsibilities</h5>
                <label style={{ fontSize: "14px" }}>When using our Website, you agree to:</label>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Provide accurate and up-to-date informationMaintain the
                  security and confidentiality of your account credentials
                </label>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Comply with all applicable laws and regulationsNot engage in
                  any activity that may interfere with or disrupt the operation
                  of the WebsiteNot attempt to gain unauthorized access to any
                  portion of the Website or any other systems or networks
                  connected to the WebsiteIntellectual Property
                </label>
              </li>
              <li>
                <h5>Ownership</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  All content, materials, and features available on our Website,
                  including but not limited to text, graphics, logos, images,
                  photographs, audio clips, and software, are owned by MyClicker
                  or its licensors and are protected by intellectual property
                  laws.
                </label>
              </li>
              <li>
                <h5> Limited License</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Subject to these Terms and Conditions, we grant you a limited,
                  non-exclusive, non-transferable license to access and view the
                  content on our Website for personal and non-commercial
                  purposes. You may not modify, distribute, reproduce, publish,
                  license, or create derivative works from any content on our
                  Website without our prior written consent.
                </label>
              </li>
              <h3>Booking and Payment</h3>
              <li>
                <h5> Photography Services</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our Website may allow you to book photography services. By
                  making a booking, you agree to provide accurate and
                  completeinformation. The availability and pricing of our
                  services are subject to change without notice.
                </label>
              </li>
              <li>
                <h5> Payment</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Payment for our services is required in accordance with the
                  pricing and payment terms specified on our Website. We use
                  secure payment processors to process your payments. By
                  providing your payment{" "}
                </label>
                <label style={{ fontSize: "14px" }}>
                  information, you authorize us to charge the specified amount.
                </label>
                <h5>Limitation of Liability</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  To the fullest extent permitted by applicable law, in no event
                  shall MyClicker or its affiliates, partners, directors,
                  officers, employees, agents, or licensors be liable for any
                  direct, indirect, incidental, special, consequential, or
                  punitive damages arising out of or in any way connected with
                  your use of our Website or services.
                </label>
                <h5>Indemnification</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  You agree to indemnifyand hold harmless MyClicker and its
                  affiliates, partners, directors, officers, employees, agents,
                  and licensors from and against any claims, liabilities,
                  damages, losses, costs, or expenses arising out of or in any
                  way related to your use of our Website, violation of these
                  Terms and Conditions, or infringement of any intellectual
                  property or other rights of any third party.
                </label>
                <h5>Modification and Termination</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We reserve the right to modify or terminate our Website or
                  these Terms and Conditions at any time, without prior notice.
                  We may suspend or terminate your access to our Website if you
                  violate these Terms and Conditions.
                </label>
                <h5>Governing Law and Dispute Resolution</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of [Jurisdiction]. Any dispute
                  arising out of or in connection with these Terms and
                  Conditions shall be resolved
                </label>
              </li>
              {/* <li>
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
              </li> */}
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

export default TermsandConditions;
