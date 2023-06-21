"@useClient"
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Footer from "../Footer/Footer";
import lottie from "lottie-web";
import animationData from "../.././public/./Images/./Ourprocess/./movie-maker-making-movie (1).json";
import style from "./../../src/styles/Homepage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        setCount1((prevCount) => prevCount + 10);
      }, 10);
    }

    if (count2 < 4.8) {
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

  const photographers = [
    {
      name: "Richard Chawez",
      title: "Wedding photographer",
      rating: "4.8 ★",
      bookings: 25,
    },
    {
      name: "Rian Hayes",
      title: "Wedding photographer",
      rating: "4.8 ★",
      bookings: 25,
    },
    {
      name: "Alex Barnett",
      title: "Wedding photographer",
      rating: "4.8 ★",
      bookings: 25,
    },
    {
      name: "Alex Hayes",
      title: "Wedding photographer",
      rating: "4.8 ★",
      bookings: 25,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container
        className={style.landingpage}
        data-aos="fade-bottom"
        data-aos-offset="2"
        data-aos-delay="1"
        data-aos-duration="5"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className={style.Bodytext}>
          <div>
            <h2 className="animate__animated animate__fadeIn">
              Capture your precious memories with pros
            </h2>
            <label>
              Are you looking for a professional photographer for your upcoming
              event, but don’t know{" "}
              <strong>where to start ? We’re here.</strong>
            </label>

            <button className={style.BookingButton}>Book a photographer</button>
          </div>
          <div>
            <div
              ref={container}
              style={{
                width: "fit-content",
                height: "fit-content",
                margin: "0 auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Summary */}
        <div className={style.summaryBlock} data-aos="zoom-in-right,flip-right">
          <div data-aos="zoom-in-up">
            <h4>What do we provide</h4>
          </div>

          <div data-aos="zoom-in-up">
            {/* <h3>500&nbsp;+</h3> */}
            <h3>{count1}&nbsp;+</h3>

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
        </div>
        {/* Photographers Display */}
        <Container>
          <Row className={style.photographersDisplay}>
            <Col>
              <div>
                <h1>Our popular photographers</h1>
              </div>
            </Col>
          </Row>

          <div className={style.photographerCardContainer}>
            <Slider {...settings}>
              <div>
                <Row className={style.cardRow}>
                  {photographers.map((photographer, index) => (
                    <Col xs={12} md={6} lg={3} key={index}>
                      <div className={style.photographerCard}>
                        <Image
                          src="Images/Rectangle 2917@2x.jpg"
                          alt="Profile pic"
                          className={style.image}
                        />
                        <div className={style.bio}>
                          <h2>{photographer.name}</h2>
                          <p>{photographer.title}</p>
                          <Row>
                            <Col>
                              <p>{photographer.rating}</p>
                              <p>User Rating</p>
                            </Col>
                            <Col>
                              <p>{photographer.bookings}</p>
                              <p>Bookings</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <button className={style.detailsbtn}>
                                View Details
                              </button>
                            </Col>
                            <Col>
                              <button className={style.bookbtn}>
                                Book Now
                              </button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Slider>
          </div>
          <button className={style.viewphotographersButton}>
            View all photographers
          </button>
        </Container>
        {/* Our Process */}
        <container>
          <Row className={style.process}>
            <Col xs={12} md={6}>
              <Image
                src="/Images/Ourprocess/celebrity-photoshoot-by-male-photographer@2x.png"
                alt="Image"
                style={{ maxWidth: "100%" }}
              />
            </Col>
            <Col xs={12} md={6}>
              <h2>Our process</h2>
              <Row className={style.processSteps}>
                <div>
                  <Col xs={2}>
                    <div className={style.backgroundAdjust}>
                      <Image
                        src="/Images/Ourprocess/person.png"
                        alt="Logo"
                        className={style.processImage}
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
                    <div className={style.backgroundAdjust}>
                      <Image
                        src="/Images/Ourprocess/calendar.png"
                        alt="Logo"
                        className={style.processImage}
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
                    <div className={style.backgroundAdjust}>
                      <Image
                        src="/Images/Ourprocess/right.png"
                        alt="Logo"
                        className={style.processImage}
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
                    <div className={style.backgroundAdjust}>
                      <Image
                        src="/Images/Ourprocess/okay.png"
                        alt="Logo"
                        className={style.processImage}
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
        <div className={style.ourPhotographers}>
          <h2 className="text-center">Our Photographers Gallery</h2>
          <div className={style.popularPhotographers}>
            <div>
              <Image
                src="/Images/Ourprocess/Rectangle 2937@2x.png"
                alt="image1"
                layout="responsive"
                width={260}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/Images/Ourprocess/Rectangle 2938@2x.png"
                alt="image1"
                layout="responsive"
                width={260}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/Images/Ourprocess/Rectangle 2939@2x.png"
                alt="image1"
                layout="responsive"
                width={260}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/Images/Ourprocess/Rectangle 2941@2x.png"
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
                src="/Images/Ourprocess/Rectangle 2942@2x.png"
                alt="image1"
                layout="responsive"
                width={260}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/Images/Ourprocess/Rectangle 2943@2x.png"
                alt="image1"
                layout="responsive"
                width={260}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/Images/Ourprocess/Rectangle 2944@2x.png"
                alt="image1"
                layout="responsive"
                width={260}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/Images/Ourprocess/Rectangle 2945@2x.png"
                alt="image1"
                layout="responsive"
                width={260}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* </div> */}
        {/* EventS Handling */}
        <Container>
          <div className={style.eventsHandling}>
            <h2 className="text-center">We can handle any event</h2>
          </div>
          <Row className={style.rowGap}>
            <Col md={3} className="position-relative">
              <Image
                src="/Images/Ourprocess/Rectangle 2938@2x.png"
                alt="Image 1"
                className={`w-100 ${style.dullImage}`}
              />
              <h3 className={style.ImageContainer}>Wedding Photography</h3>
            </Col>
            <Col md={3} className="position-relative">
              <Image
                src="/Images/Ourprocess/Rectangle 2938@2x.png"
                alt="Image 2"
                className={`w-100 ${style.dullImage}`}
              />
              <h3 className={style.ImageContainer}>Portrait Photography</h3>
            </Col>
            <Col md={3} className="position-relative">
              <Image
                src="/Images/Ourprocess/Rectangle 2938@2x.png"
                alt="Image 3"
                className={`w-100 ${style.dullImage}`}
              />
              <h3 className={style.ImageContainer}>Wildlife Photography</h3>
            </Col>
            <Col md={3} className="position-relative">
              <Image
                src="/Images/Ourprocess/Rectangle 2938@2x.png"
                alt="Image 4"
                className={`w-100 ${style.dullImage}`}
              />
              <h3 className={style.ImageContainer}>Documentary Photography</h3>
            </Col>
          </Row>
        </Container>

        {/* Testimonals */}

        <Carousel fade>
          <Carousel.Item className={style.CaroselContainer}>
            <h1>Testimonals</h1>
            <section className="innerCard">
              <div>
                <Image
                  className="innerImage"
                  src="Images/Rectangle 2917@2x.jpg"
                  alt="First slide"
                />
                <label>Christine Mendoza</label>
              </div>
              <div>
                <label>
                  The app is incredibly user-friendly and easy to navigate. I
                  was able to browse through a vast selection of photographers
                  in my area, all with their own unique style and portfolio of
                  work. It was incredibly helpful to be able to see examples of
                  their work before booking them for a shoot.
                </label>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item className={style.CaroselContainer}>
            <h1>Testimonals</h1>
            <section className="innerCard">
              <div>
                <Image
                  className="innerImage"
                  src="Images/Rectangle 2917@2x.jpg"
                  alt="First slide"
                />
                <label>Christine</label>
              </div>
              <div>
                <label>
                  New text comes here all with their own unique style and portfolio of
                  work. It was incredibly helpful to be able to see examples of
                  their work before booking them for a shoot.
                </label>
              </div>
            </section>
          </Carousel.Item>
        </Carousel>

        {/* Download */}
        <Container>
          <Row className={style.downloadtext}>
            <div className={style.mobilescreeens}>
              {/* <Col xs={12} md={6}> */}
              <Image
                src="/Images/Ourprocess/Mobile2.png"
                alt="Image"
                style={{ maxWidth: "90%", marginTop: "170px", gap: "10px" }}
              />
              <Image
                src="/Images/Ourprocess/Mobile1.png"
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
              <label>
                Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
                neque. Aenean enim sem, pharetra et magna sit amet, luctus
                aliquet nibh. Curabitur auctor leo et libero.
              </label>
              {/* </Col> */}
            </div>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
