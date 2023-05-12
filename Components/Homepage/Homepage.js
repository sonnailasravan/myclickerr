import React, { useRef, useEffect,useState } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Link from "next/link";
import lottie from "lottie-web";
import animationData from "../.././public/./Images/./Ourprocess/./movie-maker-making-movie (1).json";

const Homepage = () => {
  const container = useRef(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
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
  useEffect(() => {
    let interval1 = null;
    let interval2 = null;
    let interval3 = null;

    if (count1 < 500) {
      interval1 = setInterval(() => {
        setCount1((prevCount) => prevCount + 1);
      }, 0);
    }

    if (count2 < 4.9) {
      interval2 = setInterval(() => {
        setCount2((prevCount) => prevCount + 0.1);
      }, 10);
    }

    if (count3 < 100) {
      interval3 = setInterval(() => {
        setCount3((prevCount) => prevCount + 1);
      }, 10);
    }

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3]);
  return (
    <Container
      className="landingpage"
      data-aos="fade-bottom"
      data-aos-offset="2"
      data-aos-delay="1"
      data-aos-duration="5"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Row className="Bodytext">
        <Col>
          <h2 className="animate__animated animate__fadeIn">
            Capture your precious memories with pros
          </h2>
          <p>
            Are you looking for a professional photographer for your upcoming
            event, but don’t know <b>where to start ? We’re here.</b>
          </p>
          <button className="Booking-Button">Book a photographer</button>
        </Col>
        <Col>
          <div ref={container} style={{ width: "100%", height: "auto" }} />
        </Col>
      </Row>

      {/* Summary */}
      <Row className="summaryBlock" data-aos="zoom-in-right,flip-right">
        <div data-aos="zoom-in-up">
          <h4>What do we provide</h4>
        </div>

        <div data-aos="zoom-in-up">
          {/* <h3>500&nbsp;+</h3> */}
          <h3>{count1}</h3>

          <label>Professional Photographers</label>
        </div>

        <div data-aos="zoom-in-up">
        <h3>{count2.toFixed(1)}</h3>
          <label>Rated Photographers</label>
        </div>

        <div data-aos="zoom-in-up">
        <h3>{count3}%</h3>
          <label>Customer Satisfaction</label>
        </div>
      </Row>
      {/* Photographers Display */}
      <Container>
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
                    <Link href="/Photographer">
                      <button className="details-btn">view Details</button>
                    </Link>
                  </Col>
                  <Col>
                    <Link href="NewBooking">
                      <button className="book-btn ">Book Now</button>
                    </Link>
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
      <container>
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
                  <div className="backgroundAdjust">
                    <Image
                      src="/images/Ourprocess/person.png"
                      alt="Logo"
                      className="processImage"
                    />
                  </div>
                </Col>
                <Col xs={10}>
                  <p>Choose a photographer</p>
                  <h6>Quisque suscipit ipsum est, eu venenatis leo.</h6>
                </Col>
              </div>
              <div>
                <Col xs={2}>
                  <div className="backgroundAdjust">
                    <Image
                      src="/images/Ourprocess/calendar.png"
                      alt="Logo"
                      className="processImage"
                    />
                  </div>
                </Col>
                <Col xs={10}>
                  <p>Add event details</p>
                  <h6>Quisque suscipit ipsum est, eu venenatis leo.</h6>
                </Col>
              </div>
              <div>
                <Col xs={2}>
                  <div className="backgroundAdjust">
                    <Image
                      src="/images/Ourprocess/right.png"
                      alt="Logo"
                      className="processImage"
                    />
                  </div>
                </Col>
                <Col xs={10}>
                  <p>Wait for photographer’s approval</p>
                  <h6>Quisque suscipit ipsum est, eu venenatis leo.</h6>
                </Col>
              </div>
              <div>
                <Col xs={2}>
                  <div className="backgroundAdjust">
                    <Image
                      src="/images/Ourprocess/okay.png"
                      alt="Logo"
                      className="processImage"
                    />
                  </div>
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
      <div className="ourPhotographers">
        <h2 className="text-center">Our Photographers Gallery</h2>
        <div className="popularPhotographers">
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2937@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2938@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2939@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2941@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
              style={{ maxWidth: "100%" }}
            />
          </div>
          {/* <div className="row"> */}
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2942@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2943@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2944@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/Ourprocess/Rectangle 2945@2x.png"
              alt="image1"
              layout="responsive"
              width={260}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* </div> */}
      <Container>
        <div className="eventsHandling">
          <h2 className="text-center">We can handle any event</h2>
        </div>
        <Row>
          <Col md={3} className="position-relative">
            <Image
              src="/images/Ourprocess/Rectangle 2938@2x.png"
              alt="Image 1"
              className="w-100"
            />
            <h3 className="ImageContainer">Wedding Photography</h3>
          </Col>
          <Col md={3} className="position-relative">
            <Image
              src="/images/Ourprocess/Rectangle 2938@2x.png"
              alt="Image 2"
              className="w-100"
            />
            <h3 className="ImageContainer">Portrait Photography</h3>
          </Col>
          <Col md={3} className="position-relative">
            <Image
              src="/images/Ourprocess/Rectangle 2938@2x.png"
              alt="Image 3"
              className="w-100"
            />
            <h3 className="ImageContainer">Wildlife Photography</h3>
          </Col>
          <Col md={3} className="position-relative">
            <Image
              src="/images/Ourprocess/Rectangle 2938@2x.png"
              alt="Image 4"
              className="w-100"
            />
            <h3 className="ImageContainer">Documentary Photography</h3>
          </Col>
        </Row>
      </Container>

      {/* Testimonals */}

      <Carousel fade>
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
      <Container>
        <Row className="Bodytext">
          <div className="mobilescreeens">
            {/* <Col xs={12} md={6}> */}
            <Image
              src="/images/Ourprocess/Mobile2.png"
              alt="Image"
              style={{ maxWidth: "90%", marginTop: "170px", gap: "10px" }}
            />
            <Image
              src="/images/Ourprocess/Mobile1.png"
              alt="Image"
              style={{ maxWidth: "90%" }}
            />
            {/* </Col> */}
          </div>
          <div>
            {/* <Col xs={12} md={6}> */}
            <h2 className="animate__animated animate__fadeIn">
              Download MyClicker Mobile app
            </h2>
            <p>
              Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
              neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet
              nibh. Curabitur auctor leo et libero.
            </p>
            {/* </Col> */}
          </div>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default Homepage;
