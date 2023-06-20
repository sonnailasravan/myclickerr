import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../../../public/Images/Ourprocess/professional-photographer-taking-picture (1).json";
// import { BsGenderMale , BsGenderFemale } from "react-icons/Bs";
const EnterBasicDetails = () => {

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
       <Col className="EnterBasicDetailsMainContainer">

        <div className="scrollCont"> 
<div className="colorInTheScroll"></div>
        </div>

        <br/>

       <div className="topBackEnterDetails">
            <Link href="/Login">&lt; Back</Link>
            </div>
            <Image
            className="NavbarSmallSize"
            src="/images/Ourprocess/Group 5982@2x.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />
            <h1 className="EnterDetailsHeading">Enter Basic Details</h1>
            <p className="EnterDetailsPara" >Enter the following details to proceed</p>
        <div className="FullNameAndDateOfBirthCont">
                <input  type ="text" id="fullName" className="inputElement" placeholder="Fullname"/>
                {/* <label htmlFor="fullName" className="labelElement">Full Name</label> */}
                <input id="date" className="inputElement" type="date" placeholder="Date"/>
                {/* <label htmlFor="date" className="labelElement">Date</label> */}
            </div>
           
          

          <div className="GenderCont">
                <p className="EnterDetailsPara">Gender</p>
                 <div className="radioButtonCont">
                 <div classname="RadioSubCont">
                  <input className="InputCheckBoxColor" checked type="radio"/>
                    <label >
                       {/* <BsGenderMale className="iconSize"/>  */}
                    
                    Male</label></div>
                    <div className="RadioSubCont">
                    <input  className="InputCheckBoxColor" type="radio"/>
                    <label > 
                      {/* <BsGenderFemale className="iconSize"/> */}
                       Female</label>
                    </div>
                 </div>
                </div>

                <div className="EmailAndMBasicPriceCont">

                    <input className="inputElement" type="text" placeholder="Email ID"/>
                
<div className="BasePriceCont">
    <input classname="BasePriceInputElement" type="text" placeholder=" Base Price Rs.1500"/>
    <select className="selectEle" name="time" id="time">
  <option value="Per Hr">Per Hr</option>
  <option value="Per Day">Per Day</option>
  <option value="Per Week">Per Week</option>
  <option value="Per Month">Per Month</option>
</select>
</div>

                </div>

                
                    <input type="text" className="bioinputElement"  placeholder="Bio"/>
            
            <br/>

                    <button type="button" className="buttonProcced" onClick={onClickProccedButton}>Proceed</button>
                    <button type="button" className="buttonNext" onClick={onClickProccedButton}>Next</button>

       </Col>
      </Row>
    </Container>
  );
};

export default EnterBasicDetails;
