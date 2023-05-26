import MainHeader from "./MainHeader";
import {  Carousel,Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const photographer = () => {
  return (
    <div>
      <div className="NavBar">
        <MainHeader/>
      </div>
      <Container>
        <div className="headerphotographerhome">
          <h6 aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item ">
                <a href="#" className="text-decoration-none">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item " aria-current="page">
                Photographer details
              </li>
            </ol>
          </h6>
        </div>
        <Container>
          <div className="grid-container">
            <Row>
              <Col>
                <div className="photographermain-image">
                  <Image src="/Images/person.jpg.png" alt="Image" width={40} height={40} />
                </div>

                <div className="info">
                  <div>
                    <div>
                      <h4>Alex Barnett</h4>
                      <h6 className="info-header">
                        Event, Product and Portrait Photographer
                      </h6>
                    </div>
                    <div>
                      <Link href='NewBooking'>
                      
                      <button
                        type="button"
                        className="btn"
                        style={{
                          width: "250px",
                          backgroundColor: "#8E2ADB",
                          color: "white",
                        }}
                      >
                        Book Now
                      </button>
                      </Link>
                    </div>
                  </div>
                  <p>
                    Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                    sollicitudin libero, vel malesuada velit. Nullam et maximus
                    lorem.
                  </p>
                  <div className="fullname">
                    <div>
                      <label>Full name</label>
                      <h6>Marshall Bruce</h6>
                    </div>

                    <div>
                      <label>Skills</label>
                      <h6>Photographer, Videographer & Editor</h6>
                    </div>
                  </div>

                  <div className="cardmain">
                    <div className="item-cardfirst">
                      <div>
                        <Image
                          src="/images/ICON1.png"
                          alt="Image 1"
                          style={{ width: "" }}
                          width={45}
                          height={45}
                        />
                      </div>
                      <div>
                        <h6>234</h6>
                        <label>Total Booking</label>
                      </div>
                    </div>
                    <div className="item-cardsecond">
                      <div>
                        <Image
                          src="/images/Group 5987@2x.png"
                          alt="Image 1"
                          style={{ width: "auto" }}
                          width={45}
                          height={45}
                        />
                      </div>
                      <div>
                        <h6>4.5</h6>
                        <label>Total Rating</label>
                      </div>
                    </div>

                    <div className="item-cardthird">
                      <div>
                        <Image
                          src="/images/icon3.png"
                          alt="Image 1"
                          style={{ width: "auto" }}
                          width={45}
                          height={45}
                        />
                      </div>

                      <div>
                        <h6>
                          <span>&#8377;</span>1000<i> Per Hour</i>
                        </h6>
                        <label>Base Price</label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        {/*--------------------small--- phone screen (570)----------------------*/}

        <div className="grid-conatainersmall">
          <div className="Photographer-profile">
            <h4>
              <FaArrowLeft /> Photographer profile
            </h4>
          </div>
          <div className="photographerborder"></div>
          <div className="photographermain-smallimage">
            <div>
              <img src="/images/person.jpg.png" alt="Image" />
            </div>

            <div>
              <h4>Alex Ellis</h4>
              <p>Event, Product and Portrait Photographer</p>
            </div>
          </div>

          <div className="small-item-cardthird">
            <div>
              <label>Price:</label>
            </div>

            <div>
              <h6>
                <span>&#8377;</span>1000<i> Per Hour</i>
              </h6>
            </div>
          </div>

          <div className="small-secondcard-main">
            <div>
              <div className="small-pitem-cardsecond">
                <h3>234</h3>
                <label>Total Booking</label>
              </div>
            </div>

            <div className="small-pitem-cardfirst">
              <div>
                <h3>4.5</h3>
                <label>Total Rating</label>
              </div>
            </div>
          </div>
          <div className="small-fullname">
            <div>
              <label>Full name</label>
              <h6>Marshall Bruce</h6>
            </div>

            <div>
              <label>Skills</label>
              <h6>Photographer, Videographer & Editor</h6>
            </div>
            <div>
              <label>Short bio</label>
              <p>
                Phasellus dignissim, tellus in pellentesque mollis, mauris orci
                dignissim nisl, id gravida nunc enim quis nibh.
              </p>
            </div>
          </div>
          <div className="small-portfolio-wrapper">
            <span>My Portfolio</span>
            <a href="#">See all</a>
          </div>
          <div className="photographer-carousel">
            <Carousel>
              <Carousel.Item>
              <div className="second-photorows">
            <div className="second-row-imgss">
              <div>
                <Image
                  src="/images/Rectangle 9915@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2943@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
            <div className="second-row-imgss">
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
          </div>
                  
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className="second-photorows">
            <div className="second-row-imgss">
              <div>
                <Image
                  src="/images/Rectangle 9915@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2943@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
            <div className="second-row-imgss">
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
          </div>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className="second-photorows">
            <div className="second-row-imgss">
              <div>
                <Image
                  src="/images/Rectangle 9915@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2943@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
            <div className="second-row-imgss">
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
          </div>

                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="small-portfolio-wrapper">
            <span>Equipment & Gear</span>
            <a href="#">View all</a>
          </div>
        </div>

        {/*--------------------- end---phone---screen----------------------*/}
        <div className="portfolio-wrapper">
          <span>My Portfolio</span>
          <a href="#">See all</a>
        </div>

        <div className="main-second-rowimg">
          <div className="second-photorow">
            <div className="second-row-imgs">
              <div>
                <Image
                  src="/images/Rectangle 9915@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2943@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
            <div className="second-row-imgs">
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
          </div>

          <div className="second-photorow">
            <div className="second-row-imgs">
              <div>
                <Image
                  src="/images/Rectangle 9915@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2943@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
            <div className="second-row-imgs">
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
          </div>
          <div className="second-photorow">
            <div className="second-row-imgs">
              <div>
                <Image
                  src="/images/Rectangle 9915@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2943@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={100}
                  height={70}
                />
              </div>
            </div>
            <div className="second-row-imgs">
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2937@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
              <div>
                <Image
                  src="/images/Ourprocess/Rectangle 2938@2x.png"
                  alt="Image 1"
                  style={{ width: "100%" }}
                  width={150}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-wrapper mt-5">
          <span>Equipment & Gear</span>
          <a href="#">See all</a>
        </div>

        <div className="cameras">
          <div className="camera1">
            <div>
              <Image
                src="/images/Rectangle 9915@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={74}
                height={74}
              />
            </div>
            <div>
              <h6>Sony Alpha R-III Camera </h6>
              <p>Price : 2,500 / day</p>
            </div>
          </div>
          <div className="camera1">
            <div>
              <Image
                src="/images/Rectangle 9916@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={74}
                height={74}
              />
            </div>
            <div>
              <h6>Go Pro Hero 5 </h6>
              <p>Price : 2,500 / day</p>
            </div>
          </div>
          <div className="camera1">
            <div>
              <Image
                src="/images/Rectangle 9917@2x.png"
                alt="Image 1"
                // style={{ width: "100px" }}
                width={74}
                height={74}
              />
            </div>
            <div>
              <h6>Invision Tripod</h6>
              <p>Price : 2,500 / day</p>
            </div>
          </div>
        </div>
        <div className="photograper-review">
          <div>
            <h6>Reviews</h6>
          </div>
          <div className="main-review">
            <div>
              <Image
                className="mt-"
                src="/images/hand-with-protective-gloves-holding-blood-samples-covid-test@2x.png"
                alt="Image 1"
                style={{ width: "auto", borderRadius: "50%" }}
                width={150}
                height={70}
              />
            </div>
            <div className="item-review">
              <div>
                <h6>Name</h6>
                <label>22 June, 2022 - 05:45 PM</label>
              </div>
              <div>
                <h2>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <p>
              {" "}
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
              molestie nisi iaculis sodales mollis.
            </p>
          </div>
        </div>
        <div className="photographer-hr">
          <hr />
        </div>
        <div className="photograper-review">
          <div className="main-review">
            <div>
              <Image
                className="mt-"
                src="/images/hand-with-protective-gloves-holding-blood-samples-covid-test@2x.png"
                alt="Image 1"
                style={{ width: "auto", borderRadius: "50%" }}
                width={150}
                height={70}
              />
            </div>
            <div className="item-review">
              <div>
                <h6>Name</h6>
                <label>22 June, 2022 - 05:45 PM</label>
              </div>
              <div>
                <h2>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                  <span style={{ color: "yellow" }}>★</span>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <p>
              {" "}
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
              molestie nisi iaculis sodales mollis.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default photographer;
