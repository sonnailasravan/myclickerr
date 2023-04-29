import React from "react";
import { Container, Row, Col, Image,Carousel } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../.././public/./Images/./Ourprocess/./movie-maker-making-movie (1).json";

const Homepage = () => {
  return (
    <Container fluid className="landingpage">
      <Row className="Bodytext">
        <Col xs={12} md={6}>
          <h2 className="animate__animated animate__fadeIn">
            Capture your precious memories with pros
          </h2>
          <p>
            Are you looking for a professional photographer for your upcoming
            event, but don’t know where to start? We’re here.
          </p>
          <button className="Booking-Button">Book a photographer</button>
        </Col>
        <Col xs={12} md={6}>
          {/* <Image
            src="/images/Mask Group 1@2x.png"
            alt="Image"
            style={{ maxWidth: "100%" }}
          /> */}
           <Lottie 
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
            speed:3,
          }}
          // style={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>

      <Row className="summaryBlock">
        <Col xs={12} md={3}>
          <div>
            <h1>What do we provide</h1>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div>
            <h1>500+</h1>
            <h6>Professional Photographers</h6>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div>
            <h1>4.9</h1>
            <h6>Rated Photographers</h6>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div>
            <h1>100%</h1>
            <h6>Customer Satisfaction</h6>
          </div>
        </Col>
      </Row>
      {/* Photographers Display */}
      <Container fluid>
        <Row className="photographersDisplay">
          <Col>
            <div>
              <h1>Our popular photographers</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Richard Chawez</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Link href="/photographerDetails">
                    <button className="details-btn">view Details</button>
                    </Link>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Rian Hayes</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button className="details-btn">view Details</button>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Alex Barnett</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button className="details-btn">view Details</button>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="photographerCard">
              <Image src="Images/Rectangle 2917@2x.jpg" alt="Profile pic" />
              <div className="bio">
                <h2>Alex Hayes</h2>
                <p>Wedding photographer</p>
                <Row>
                  <Col>
                    <p>4.8 ★</p>
                    <p>User Rating</p>
                  </Col>
                  <Col>
                    <p>25</p>
                    <p>Bookings</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <button className="details-btn">view Details</button>
                  </Col>
                  <Col>
                    <button className="book-btn ">Book Now</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <button className="view-photographersButton">
          View all photographers
        </button>
      </Container>
      {/* Our Process */}
      <container fluid>
        <Row className="process">
          <Col xs={12} md={6}>
            <Image
              src="/images/Ourprocess/celebrity-photoshoot-by-male-photographer@2x.png"
              alt="Image"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h2>Our process</h2>
            <Row className="processSteps">
              <div>
                <Col xs={2}>
                  <Image
                    src="/images/Ourprocess/Rectangle 2933@2x.png"
                    alt="Logo"
                    className="processImage"
                  />
                </Col>
                <Col xs={10}>
                  <p>Choose a photographer</p>
                  <h6>Quisque suscipit ipsum est, eu venenatis leo.</h6>
                </Col>
              </div>
              <div>
                <Col xs={2}>
                  <Image
                    src="/images/Ourprocess/Rectangle 2933@2x.png"
                    alt="Logo"
                    className="processImage"
                  />
                </Col>
                <Col xs={10}>
                  <p>Add event details</p>
                  <h6>Quisque suscipit ipsum est, eu venenatis leo.</h6>
                </Col>
              </div>
              <div>
                <Col xs={2}>
                  <Image
                    src="/images/Ourprocess/Rectangle 2933@2x.png"
                    alt="Logo"
                    className="processImage"
                  />
                </Col>
                <Col xs={10}>
                  <p>Wait for photographer’s approval</p>
                  <h6>Quisque suscipit ipsum est, eu venenatis leo.</h6>
                </Col>
              </div>
              <div>
                <Col xs={2}>
                  <Image
                    src="/images/Ourprocess/Rectangle 2933@2x.png"
                    alt="Logo"
                    className="processImage"
                  />
                </Col>
                <Col xs={10}>
                  <p>That’s it. You’re booking is confirmed</p>
                  <h6>Quisque suscipit ipsum est, eu venenatis leo.</h6>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </container>
{/* Our Popular Photographers */}
      <div className="container-fluid">
        <h2 className="text-center">Our Photographers Gallery</h2>
        <div className="row">
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2937@2x.png" alt="image1" layout="responsive" width={290} height={200}/>
          </div>
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2938@2x.png" alt="image1" layout="responsive" width={290} height={200} />
          </div>
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2939@2x.png" alt="image1" layout="responsive" width={290} height={200} />
          </div>
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2941@2x.png" alt="image1" layout="responsive" width={290} height={200}  />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2942@2x.png" alt="image1" layout="responsive" width={290} height={200} />
          </div>
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2943@2x.png" alt="image1" layout="responsive" width={290} height={200} />
          </div>
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2944@2x.png" alt="image1" layout="responsive" width={290} height={200} />
          </div>
          <div className="col-md-3">
            <Image src="/images/Ourprocess/Rectangle 2945@2x.png" alt="image1" layout="responsive" width={290} height={200} />
          </div>
        </div>
      </div>
      <Container fluid>
      <h2 className="text-center">We can handle any event</h2>
      <Row>
        <Col md={3} className="position-relative">
          <Image src="/images/Ourprocess/Rectangle 2938@2x.png" alt="Image 1" className="w-100" />
          <h3 className="ImageContainer">
          Wedding Photography
          </h3>
        </Col>
        <Col md={3} className="position-relative">
          <Image src="/images/Ourprocess/Rectangle 2938@2x.png" alt="Image 2" className="w-100" />
          <h3 className="ImageContainer">
          Portrait Photography
          </h3>
        </Col>
        <Col md={3} className="position-relative">
          <Image src="/images/Ourprocess/Rectangle 2938@2x.png" alt="Image 3" className="w-100" />
          <h3 className="ImageContainer">
          Wildlife Photography
          </h3>
        </Col>
        <Col md={3} className="position-relative">
          <Image src="/images/Ourprocess/Rectangle 2938@2x.png" alt="Image 4" className="w-100" />
          <h3 className="ImageContainer">
          Documentary Photography
          </h3>
        </Col>
      </Row>
    </Container>

    {/* Testimonals */}

    <Carousel fade >
      <Carousel.Item className="Carosel-Container">
        <Image
          className="d-block w-100 "
          src="/images/Ourprocess/Rectangle 2943@2x.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carosel-Container">
        <Image
          className="d-block w-100"
          src="/images/Ourprocess/Rectangle 2943@2x.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carosel-Container">
        <Image
          className="d-block w-100"
          src="/images/Ourprocess/Rectangle 2943@2x.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* Download */}
  <Container fluid>
  <Row className="Bodytext">
        <Col xs={12} md={6}>
          <Image
            src="/images/Ourprocess/Mobile2.png"
            alt="Image"
            style={{ maxWidth: "50%",marginTop:"170px",gap:"10px"}}
          />
          <Image
            src="/images/Ourprocess/Mobile1.png"
            alt="Image"
            style={{ maxWidth: "50%" }}
          />
        </Col>
        <Col xs={12} md={6}>
          <h2 className="animate__animated animate__fadeIn">
          Download MyClicker Mobile app
          </h2>
          <p>
          Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero.
          </p>
        </Col>
      </Row>
  </Container>
  <Footer/>
    </Container>
  );
};

export default Homepage;
