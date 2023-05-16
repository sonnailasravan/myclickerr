import React from "react";
import styles from "../../src/styles/Booking.module.css";
import { Row,Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const popularPhotographers = () => {
  return (
    <>
      <div className={styles.popularPhotographers}>
        <h1>Popular Photographers</h1>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <Row>
            <Col xs={6} md={3}>
              <div className="photographerCard my-5">
                <Image src="/Images/Rectangle 2917@2x.jpg" alt="Profile pic" width={50} height={200} />
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
              <div className="photographerCard my-5">
                <Image src="/Images/Rectangle 2917@2x.jpg" alt="Profile pic" width={50} height={200} />
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
              <div className="photographerCard my-5">
                <Image src="/Images/Rectangle 2917@2x.jpg" alt="Profile pic" width={50} height={200} />
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
              <div className="photographerCard my-5">
                <Image src="/Images/Rectangle 2917@2x.jpg" alt="Profile pic"  width={50} height={200}/>
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
      </div>
    </>
  );
};

export default popularPhotographers;
