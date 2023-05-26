import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../../../public/Images/Ourprocess/professional-photographer-taking-picture (1).json";
import { CiCamera} from "react-icons/Ci";
const AddSkills = () => {

    const onClickProccedButton=()=>{}
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
       <Col className="myProtfolioMeidaMainCont">

        
       

        <div className="myPortfolioMediaScrollCont"> 
<div className="myPortfolioMediacolorInTheScroll"></div>
        </div>

        <br/>

       <div className="topBackMyportfolioMedia">
            <Link href="/Login">&lt; Back</Link>
            <h1 className="myPortfolioMediaHeading">My Portfolio</h1>
            <p className="c" >Add your photos or videos to build a Portfolio</p>     

            <div className="MediaCont">
            <div className="AddMediaContMyPortfolio">

                <CiCamera className="cameraIcons"/>
            </div>

            <div className="AddMediaContMyPortfolio">

                <CiCamera className="cameraIcons"/>
            </div>
            </div>

          </div>


<button type="button" className="addMore">+Add More</button>
              
            
            <br/>

                    <button type="button" className="buttonSaveYourWorkMyProtifolo" onClick={onClickProccedButton}>Proceed</button>

       </Col>

       <Col className="myProtfolioMeidaMainContMediumScreen">
        <div className="myPortfolioMediaScrollContMediumScreen"> 
<div className="myPortfolioMediacolorInTheScrollMediumScreen"></div>
        </div>

        <br/>

       <div className="topBackMyportfolioMedia">
            <Link href="/Login">&lt; Back</Link>
            <h1 className="myPortfolioMediaHeading">My Portfolio</h1>
            <p className="c" >Add your photos or videos to build a Portfolio</p>     

            <div className="MediaCont">
            <div className="AddMediaContMyPortfolio">

                <CiCamera className="cameraIcons"/>
            </div>

            <div className="AddMediaContMyPortfolio">

                <CiCamera className="cameraIcons"/>
            </div>
            </div>

          </div>


<button type="button" className="addMore">+Add More</button>
              
            
            <br/>

                    <button type="button" className="buttonSaveYourWorkMyProtifolo" onClick={onClickProccedButton}>Proceed</button>

       </Col>
       <Col className="myProtfolioMeidaMainContSmallScreen">
        <div className="myPortfolioMediaScrollContSmallScreen"> 
<div className="myPortfolioMediacolorInTheScrollSmallScreen"></div>
        </div>

        <Image
            className="navbarmyPortfolioMediaSmallScreen"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />

        <br/>

        <h1 className="myPortfolioMediaHeadingSmallScreen">My Portfolio</h1>
            <p className="myPortfolioMediaParaSmallScreen" >Add your photos or videos to build a Portfolio</p>     

            <div>
            <div className="AddMediaContMyPortfolioSmallScreen">

                <CiCamera className="cameraIcons"/>
            </div>

           
            </div>



<button type="button" className="addMoreSmallScreen">+Add More</button>
              
            
            <br/>

                    <button type="button" className="buttonSaveYourWorkMyProtifoloSmallScreen" onClick={onClickProccedButton}>Proceed</button>

       </Col>
      </Row>
    </Container>
  );
};

export default AddSkills;
