import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import style from "./../../src/styles/Homepage.module.css";
import animationData from "../.././public/./Images/./Ourprocess/./aboutUs";
import React, { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
function Aboutus() {
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
    <div>
      <Container>
        <div className="main_aboutus_container">
          <div>
            <h1>About Us</h1>
            <label>
              MyClickerr is an application that seamlessly connects customers
              with talented and highly skilled photographers. Our platform is
              designed to make the process of finding and booking photographers
              as effortless as possible.
            </label>
            {/* <button type="submit">Book a photographer</button> */}
          </div>
          <div className="loading_img">
            <div
              ref={container}
              style={{
                // width: "fit-content",
                // height: "fit-content",
                // margin: "0 auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="item_aboutus">
          <div>
            <h1>Our Core Values</h1>
          </div>
          <div className="element_aboutus">
            <div className="transparancy">
              <Image
                src="/Images/ICON1.png"
                alt="Image 1"
                style={{ width: "" }}
                width={54}
                height={54}
              />
              <label>Transparency</label>
            </div>
            <div className="transparancy">
              <Image
                src="/Images/Group 5987@2x.png"
                alt="Image 1"
                style={{ width: "auto" }}
                width={54}
                height={54}
              />
              <label>Empathy</label>
            </div>
            <div className="transparancy">
              <Image
                src="/Images/icon3.png"
                alt="Image 1"
                style={{ width: "auto" }}
                width={54}
                height={54}
              />
              <label>Data Privacy</label>
            </div>
            <div className="transparancy">
              <Image
                src="/Images/ICON1.png"
                alt="Image 1"
                style={{ width: "" }}
                width={54}
                height={54}
              />
              <label>100% Security</label>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mainContainerAboutUs">
        <div className="meetouterteam_maincontainer">
          <div>
            <h1> Meet Our Team </h1>
          </div>
        </div>

        <div className="aboutus_img_item">
          <div>
            {/* <Image
              src="/Images/pexels-anna-shvets-5325105@2x.png"
              alt="Image 1"
              style={{ width: "" }}
              width={233.3}
              height={259.72}
            /> */}
            <label>Bharath Reddy</label>
            <p>Founder</p>
          </div>
          <div>
            {/* <Image
              src="/Images/pexels-emmy-e-2381069@2x.png"
              alt="Image 1"
              style={{ width: "" }}
              width={233.33}
              height={259.72}
            /> */}
            <label>Sharath Reddy</label>
            <p>Co-Founder and CEO</p>
          </div>
          <div>
            {/* <Image
              src="/Images/pexels-emre-keshavarz-3752128@2x.png"
              alt="Image 1"
              style={{ width: "" }}
              width={233.33}
              height={259.72}
            /> */}
            <label>Sandeep Reddy</label>
            <p>Chief Operations Officer</p>
          </div>
          <div>
            {/* <Image
              src="/Images/pexels-emre-keshavarz-3752128@2x.png"
              alt="Image 1"
              style={{ width: "" }}
              width={233.33}
              height={259.72}
            /> */}
          
            <label> Hitesh Varma </label>
            <p>Marketing Head</p>
          </div>
        </div>
      </Container>
      {/* Download */}
      <Container>
        <div className="aboutdownloadtextitem">
          <Row className={style.downloadtext}>
            <div className={style.mobilescreeens}>
              <Image
                src="/Images/Ourprocess/MicrosoftTeams-image.png"
                alt="Image"
                width={350}
                height={350}
                style={{ maxWidth: "90%", marginTop: "115px", gap: "40px" }}
              />
              <Image
                src="/Images/Ourprocess/MicrosoftTeams-image (1).png"
                alt="Image"
                width={350}
                height={350}
                style={{ maxWidth: "90%" }}
              />
            </div>
            <div>
              <h2 className="animate__animated animate__fadeIn">
                Download MyClickerr Mobile app
              </h2>
              <label>
              With flexible hourly rates, Book professional photographer for your need in few simple clicks. Myclickerr helps you to find the best photographer near you that too at your own budget..!!
              </label>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Aboutus;
