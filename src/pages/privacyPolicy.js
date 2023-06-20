import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../.././public/./Images/./Ourprocess/./professional-photographer-taking-picture (1).json";
import style from "./../../src/styles/Homepage.module.css";

const privacyPolicy = () => {
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
            <ul style={{ listStyleType: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                  <b>PrivacyPolicy</b>
                </h4>
                <h6>Effective Date:19-06-2023 </h6>
              </div>

              <label style={{ fontSize: "14px", textAlign: "justify" }}>
                Thank you for visiting www.myclicker.com ("Website"), owned and
                operated by FCS (Fineant Consultant Service PVT LTD)
                ("MyClicker," "we," "us," or "our"). We are committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy outlines how we
                collect, use, disclose, and protect the information you provide
                to us through the Website. By accessing or using our Website,
                you agree to the terms of this Privacy Policy.
              </label>

              <li>
                <h5>
                  <bold>Information We Collect</bold>
                </h5>
                <h6> Personal Information</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    {" "}
                    When you use our Website or engage with our photography
                    services, we may collect personal information that can
                    identify you directly or indirectly. The types of personal
                    information we may collect include but are not limited to:
                  </p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Postal address</li>
                    <li>Billing information</li>
                    <li>
                      Photographs or images taken during our photography
                      sessions
                    </li>
                  </ul>
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>Usage Information</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    We also collect non-personal information that does not
                    directly identify you but is associated with your use of our
                    Website. This may include:
                  </p>
                  <ul>
                    <li>
                      Device information (e.g., IP address, browser type,
                      operating system)
                    </li>
                    <li>
                      Log information (e.g., date and time of access, referring
                      website)
                    </li>
                    <li>
                      Clickstream data (e.g., pages visited, buttons clicked)
                    </li>
                    <li>How We Use Your Information</li>
                    <b>    We use the information we collect for various purposes,
                      including but not limited to:</b>
                  
                    
                    <li>
                      Providing and personalizing our photography services
                    </li>
                    <li>
                      Responding to your inquiries and communicating with you
                    </li>
                    <li>Processing payments and fulfilling orders</li>
                    <li>
                      Sending you administrative information and updates about
                      our services
                    </li>
                    <li>Analyzing and improving our Website and services</li>
                    <li>Protecting our rights and preventing fraud</li>
                    <li>Complying with legal obligations</li>
                    <li>Information Sharing and Disclosure</li>
                    <b>
                      We may share your personal information in the following
                      circumstances:
                    </b>
                    <li>
                      With our trusted service providers who assist us in
                      operating our Website and providing our services (e.g.,
                      payment processors, shipping companies)
                    </li>
                    <li>With your consent or as directed by you</li>
                    <li>
                      To comply with legal obligations, enforce our policies, or
                      protect our rights or the rights of others
                    </li>
                    <li>
                      In connection with a business transfer, such as a merger,
                      acquisition, or sale of assets
                    </li>
                    <li>
                      We do not sell, rent, or trade your personal information
                      to third parties for their marketing purposes.
                    </li>
                  </ul>
                </label>
              </li>
              <li>
                <h5>Data Retention</h5>
                <label style={{ fontSize: "14px" }}>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes for which it was collected
                  and to comply with legal obligations. We will securely delete
                  or anonymize your personal information when it is no longer
                  needed.
                </label>
              </li>
              <li>
                <h5>Security</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  loss, misuse, or alteration. However, please note that no
                  method of transmission over the Internet or electronic storage
                  is 100% secure. Therefore, while we strive to use commercially
                  acceptable means to protect your personal information, we
                  cannot guarantee its absolute security.
                </label>
              </li>
              <li>
                <h5> Third-Party Links</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our Website may contain links to third-party websites or
                  services that are not operated by us. We are not responsible
                  for the privacy practices or the content of those websites. We
                  encourage you to review the privacy policies of any
                  third-party websites you visit.
                </label>
              </li>
              <h3>Children's Privacy </h3>
              <li>
                <h5> Photography Services</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our services are not directed to individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If you become aware that your child has provided us
                  with personal information without your consent, please contact
                  us, and we will take steps to remove that information from our
                  systems.
                </label>
              </li>
              <li>
                <h5> Your Rights</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  You have certain rights regarding your personal information,
                  subject to local laws and regulations. These rights may
                  include the right to access, rectify, or delete your personal
                  information, the right to restrict or object to certain
                  processing, and the right to data portability.
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
          <ul style={{ listStyleType: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                  <b>PrivacyPolicy</b>
                </h4>
                <h6>Effective Date:19-06-2023 </h6>
              </div>

              <label style={{ fontSize: "14px", textAlign: "justify" }}>
                Thank you for visiting www.myclicker.com ("Website"), owned and
                operated by FCS (Fineant Consultant Service PVT LTD)
                ("MyClicker," "we," "us," or "our"). We are committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy outlines how we
                collect, use, disclose, and protect the information you provide
                to us through the Website. By accessing or using our Website,
                you agree to the terms of this Privacy Policy.
              </label>

              <li>
                <h5>
                  <bold>Information We Collect</bold>
                </h5>
                <h6> Personal Information</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    {" "}
                    When you use our Website or engage with our photography
                    services, we may collect personal information that can
                    identify you directly or indirectly. The types of personal
                    information we may collect include but are not limited to:
                  </p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Postal address</li>
                    <li>Billing information</li>
                    <li>
                      Photographs or images taken during our photography
                      sessions
                    </li>
                  </ul>
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>Usage Information</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    We also collect non-personal information that does not
                    directly identify you but is associated with your use of our
                    Website. This may include:
                  </p>
                  <ul>
                    <li>
                      Device information (e.g., IP address, browser type,
                      operating system)
                    </li>
                    <li>
                      Log information (e.g., date and time of access, referring
                      website)
                    </li>
                    <li>
                      Clickstream data (e.g., pages visited, buttons clicked)
                    </li>
                    <li>How We Use Your Information</li>
                    <b>    We use the information we collect for various purposes,
                      including but not limited to:</b>
                  
                    
                    <li>
                      Providing and personalizing our photography services
                    </li>
                    <li>
                      Responding to your inquiries and communicating with you
                    </li>
                    <li>Processing payments and fulfilling orders</li>
                    <li>
                      Sending you administrative information and updates about
                      our services
                    </li>
                    <li>Analyzing and improving our Website and services</li>
                    <li>Protecting our rights and preventing fraud</li>
                    <li>Complying with legal obligations</li>
                    <li>Information Sharing and Disclosure</li>
                    <b>
                      We may share your personal information in the following
                      circumstances:
                    </b>
                    <li>
                      With our trusted service providers who assist us in
                      operating our Website and providing our services (e.g.,
                      payment processors, shipping companies)
                    </li>
                    <li>With your consent or as directed by you</li>
                    <li>
                      To comply with legal obligations, enforce our policies, or
                      protect our rights or the rights of others
                    </li>
                    <li>
                      In connection with a business transfer, such as a merger,
                      acquisition, or sale of assets
                    </li>
                    <li>
                      We do not sell, rent, or trade your personal information
                      to third parties for their marketing purposes.
                    </li>
                  </ul>
                </label>
              </li>
              <li>
                <h5>Data Retention</h5>
                <label style={{ fontSize: "14px" }}>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes for which it was collected
                  and to comply with legal obligations. We will securely delete
                  or anonymize your personal information when it is no longer
                  needed.
                </label>
              </li>
              <li>
                <h5>Security</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  loss, misuse, or alteration. However, please note that no
                  method of transmission over the Internet or electronic storage
                  is 100% secure. Therefore, while we strive to use commercially
                  acceptable means to protect your personal information, we
                  cannot guarantee its absolute security.
                </label>
              </li>
              <li>
                <h5> Third-Party Links</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our Website may contain links to third-party websites or
                  services that are not operated by us. We are not responsible
                  for the privacy practices or the content of those websites. We
                  encourage you to review the privacy policies of any
                  third-party websites you visit.
                </label>
              </li>
              <h3>Children's Privacy </h3>
              <li>
                <h5> Photography Services</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our services are not directed to individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If you become aware that your child has provided us
                  with personal information without your consent, please contact
                  us, and we will take steps to remove that information from our
                  systems.
                </label>
              </li>
              <li>
                <h5> Your Rights</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  You have certain rights regarding your personal information,
                  subject to local laws and regulations. These rights may
                  include the right to access, rectify, or delete your personal
                  information, the right to restrict or object to certain
                  processing, and the right to data portability.
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
            Accept the terms and conditions to complete{" "}
            <span>your signup process</span>
          </p>
          <div className="listContMediumScreen">
          <ul style={{ listStyleType: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                  <b>PrivacyPolicy</b>
                </h4>
                <h6>Effective Date:19-06-2023 </h6>
              </div>

              <label style={{ fontSize: "14px", textAlign: "justify" }}>
                Thank you for visiting www.myclicker.com ("Website"), owned and
                operated by FCS (Fineant Consultant Service PVT LTD)
                ("MyClicker," "we," "us," or "our"). We are committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy outlines how we
                collect, use, disclose, and protect the information you provide
                to us through the Website. By accessing or using our Website,
                you agree to the terms of this Privacy Policy.
              </label>

              <li>
                <h5>
                  <bold>Information We Collect</bold>
                </h5>
                <h6> Personal Information</h6>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    {" "}
                    When you use our Website or engage with our photography
                    services, we may collect personal information that can
                    identify you directly or indirectly. The types of personal
                    information we may collect include but are not limited to:
                  </p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Postal address</li>
                    <li>Billing information</li>
                    <li>
                      Photographs or images taken during our photography
                      sessions
                    </li>
                  </ul>
                </label>
              </li>
              <li style={{ textDecoration: "none" }}>
                <h5>Usage Information</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  <p>
                    We also collect non-personal information that does not
                    directly identify you but is associated with your use of our
                    Website. This may include:
                  </p>
                  <ul>
                    <li>
                      Device information (e.g., IP address, browser type,
                      operating system)
                    </li>
                    <li>
                      Log information (e.g., date and time of access, referring
                      website)
                    </li>
                    <li>
                      Clickstream data (e.g., pages visited, buttons clicked)
                    </li>
                    <li>How We Use Your Information</li>
                    <b>    We use the information we collect for various purposes,
                      including but not limited to:</b>
                  
                    
                    <li>
                      Providing and personalizing our photography services
                    </li>
                    <li>
                      Responding to your inquiries and communicating with you
                    </li>
                    <li>Processing payments and fulfilling orders</li>
                    <li>
                      Sending you administrative information and updates about
                      our services
                    </li>
                    <li>Analyzing and improving our Website and services</li>
                    <li>Protecting our rights and preventing fraud</li>
                    <li>Complying with legal obligations</li>
                    <li>Information Sharing and Disclosure</li>
                    <b>
                      We may share your personal information in the following
                      circumstances:
                    </b>
                    <li>
                      With our trusted service providers who assist us in
                      operating our Website and providing our services (e.g.,
                      payment processors, shipping companies)
                    </li>
                    <li>With your consent or as directed by you</li>
                    <li>
                      To comply with legal obligations, enforce our policies, or
                      protect our rights or the rights of others
                    </li>
                    <li>
                      In connection with a business transfer, such as a merger,
                      acquisition, or sale of assets
                    </li>
                    <li>
                      We do not sell, rent, or trade your personal information
                      to third parties for their marketing purposes.
                    </li>
                  </ul>
                </label>
              </li>
              <li>
                <h5>Data Retention</h5>
                <label style={{ fontSize: "14px" }}>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes for which it was collected
                  and to comply with legal obligations. We will securely delete
                  or anonymize your personal information when it is no longer
                  needed.
                </label>
              </li>
              <li>
                <h5>Security</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  loss, misuse, or alteration. However, please note that no
                  method of transmission over the Internet or electronic storage
                  is 100% secure. Therefore, while we strive to use commercially
                  acceptable means to protect your personal information, we
                  cannot guarantee its absolute security.
                </label>
              </li>
              <li>
                <h5> Third-Party Links</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our Website may contain links to third-party websites or
                  services that are not operated by us. We are not responsible
                  for the privacy practices or the content of those websites. We
                  encourage you to review the privacy policies of any
                  third-party websites you visit.
                </label>
              </li>
              <h3>Children's Privacy </h3>
              <li>
                <h5> Photography Services</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  Our services are not directed to individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If you become aware that your child has provided us
                  with personal information without your consent, please contact
                  us, and we will take steps to remove that information from our
                  systems.
                </label>
              </li>
              <li>
                <h5> Your Rights</h5>
                <label style={{ fontSize: "14px", textAlign: "justify" }}>
                  You have certain rights regarding your personal information,
                  subject to local laws and regulations. These rights may
                  include the right to access, rectify, or delete your personal
                  information, the right to restrict or object to certain
                  processing, and the right to data portability.
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

export default privacyPolicy;
