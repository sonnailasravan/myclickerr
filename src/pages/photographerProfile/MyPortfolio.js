import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../../../public/Images/Ourprocess/professional-photographer-taking-picture (1).json";
// import { CiCamera } from "react-icons/Ci";
const AddSkills = () => {
  const onClickProccedButton = () => {};
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

        <Col className="myProtfolioMainCont">
          <div className="myPortfolioScrollCont">
            <div className="myPortfoliocolorInTheScroll"></div>
          </div>

          <br />

          <div className="topBackMyportfolio">
            <Link href="/Login">&lt; Back</Link>
            <h1 className="myPortfolioHeading">My Portfolio</h1>
            <p className="myPortfolioPara">
              Add your photos or videos to build a Portfolio
            </p>

            <input type="text" placeholder="Event Name" />

            <p className="AddMediaPara">Add Media</p>

            <div className="AddMediaCont">
              {/* <CiCamera className="cameraIcons" /> */}
            </div>

            <div></div>
          </div>

          <br />

          <button
            type="button"
            className="buttonSaveYourWorkMyProtifolo"
            onClick={onClickProccedButton}
          >
            Save your work
          </button>
        </Col>

        <Col className="myProtfolioMainContMedium">
          <div className="myPortfolioScrollCont">
            <div className="myPortfoliocolorInTheScroll"></div>
          </div>

          <br />

          <div className="topBackMyportfolio">
            <Link href="/Login">&lt; Back</Link>
            <h1 className="myPortfolioHeading">My Portfolio</h1>
            <p className="myPortfolioPara">
              Add your photos or videos to build a Portfolio
            </p>

            <input type="text" placeholder="Event Name" />

            <p className="AddMediaPara">Add Media</p>

            <div className="AddMediaContMedium">
              {/* <CiCamera className="cameraIcons" /> */}
            </div>

            <div></div>
          </div>

          <br />

          <button
            type="button"
            className="buttonSaveYourWorkMyProtifolo"
            onClick={onClickProccedButton}
          >
            Save your work
          </button>
        </Col>

        <Col className="myPortfolioMainContSmallScreen">
          <div className="myPortfolioScrollContSmallScreen">
            <div className="myPortfoliocolorInTheScrollSmallScreen"></div>
          </div>

          <Image
            className="NavbarSmallMyPortfolio"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />

          <br />

          <h1 className="myPortfolioHeadingSmallScreen">My Portfolio</h1>
          <p className="myPortfolioParaSmallScreen">
            Add your photos or videos to build a Portfolio
          </p>

          <input
            className="myportfolioSmallscreen"
            type="text"
            placeholder="Event Name"
          />

          <p className="AddMediaParaMyPortfolioSmall">Add Media</p>

          <div className="AddMediaContSmallScreen">
            {/* <CiCamera className="cameraIcons" /> */}
          </div>

          <div></div>

          <br />

          <button
            type="button"
            className="buttonSaveYourWorkMyProtifoloSmallScreen"
            onClick={onClickProccedButton}
          >
            Save your work
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSkills;
