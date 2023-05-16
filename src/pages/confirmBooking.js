import { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Booking.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import RescheduleBooking from "./Reschedule Booking";
import CancelBooking from "./CancelBooking";

const ProceedBooking = () => {
  const [eventData, setEventData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const [showcancel, setShowcancel] = useState(false);
  const closecancel = () => setShowcancel(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/api/users/O8cBHWArYGMnOc4IkYPOaHd78Uf1/photographer/nRWPg8GfglTqWOd2RJ2CKMO4j0w1/eventbooking/latest"
        );
        setEventData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventData();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <Container className="my-4 mx-4 shadow pb-3">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/photographerDetails">
          Photographer details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>New Booking</Breadcrumb.Item>
      </Breadcrumb>
      <Row className={styles.DetailsCard}>
        <Col className={styles.alignmentpic}>
          <Image
            className={styles.NewBooking}
            src="/images/Rectangle 2917@2x.jpg"
            alt="person"
            width="80"
            height="80"
          />
        </Col>
        <Col>
          <h3>Alex Barnett</h3>
          <h6>Event, Product and Portrait Photographer</h6>
        </Col>
      </Row>
      {/* Event Details */}
      <Container className={styles.EditDetails}>
        <h2>Event Details</h2>
        <Card className="mx-0 my-3 shadow">
          <Card.Body className={styles.EventDetails}>
            <Row>
              <Col>
                <label>StartDate - Time</label>
                <h6>
                  {formatDate(eventData.startDate)} - {eventData.startTime}
                </h6>
              </Col>
              <Col>
                <label>EndDate - Time</label>
                <h6>
                  {formatDate(eventData.endDate)} - {eventData.endTime}
                </h6>
              </Col>
              <Col>
                <Link
                  href={{
                    pathname: "/editBooking",
                    query: { eventData: JSON.stringify(eventData) },
                  }}
                >
                  <label className={styles.edit}>Edit</label>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Event Title</label>
                <h6>{eventData.eventTitle}</h6>
              </Col>
              <Col>
                <label>Event Type</label>
                <h6>{eventData.eventType}</h6>
              </Col>
              <Col>
                <label>Total Time</label>
                <h6>{eventData.totalDuration} Hours</h6>
              </Col>
            </Row>
            <Row>
              <label>Event Description</label>
              <h6>{eventData.eventDescription}</h6>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      {/* Addons */}
      <Container className={styles.EditDetails}>
        <h2>Add ons</h2>
        <Card.Body className={styles.EventDetails}>
          <Row>
            <Col>
              <Card className="shadow">
                <Row className="justify-content-center align-items-center px-2">
                  <Col>
                    <Image
                      src="/images/Ourprocess/Camera.png"
                      alt="equip"
                      width={64}
                      height={64}
                    ></Image>
                  </Col>
                  <Col>
                    <label>Sony Alpha R-III Camera</label>
                    <h6>Price:2500/ day</h6>
                  </Col>
                  <Col>
                    <Button>ADD</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card className="shadow">
                <Row className="justify-content-center align-items-center px-2">
                  <Col>
                    <Image
                      src="/images/Ourprocess/Camera.png"
                      alt="equip"
                      width={64}
                      height={64}
                    ></Image>
                  </Col>
                  <Col>
                    <label>Sony Alpha R-III Camera</label>
                    <h6>Price:2500/ day</h6>
                  </Col>
                  <Col>
                    <Button>ADD</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card className="shadow">
                <Row className="justify-content-center align-items-center px-2">
                  <Col>
                    <Image
                      src="/images/Ourprocess/Camera.png"
                      alt="equip"
                      width={64}
                      height={64}
                    ></Image>
                  </Col>
                  <Col>
                    <label>Sony Alpha R-III Camera</label>
                    <h6>Price:2500/ day</h6>
                  </Col>
                  <Col>
                    <Button>ADD</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Container>
      {/* Coupons */}

      <Container className={styles.couponDetails} >
        <h2>Coupons</h2>
        <div className={styles.couponandAddress} >

        <Card className="shadow" style={{ width: "40%", margin: "0", }}>
          <Card.Body className={styles.CouponCardDetails}>
            <Row className="justify-content-between">
              <Col className="align-items-center">
                <label>Apply Coupons</label>
              </Col>
              <Col className=" d-flex align-items-center justify-content-end mb-3">
                &gt;
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="shadow" style={{ width: "40%", margin: "0" }}>
          <Card.Body className={styles.CouponCardDetails}>
            <Row className="justify-content-between">
              <Col className="align-items-center">
                <label>Add Location</label>
              </Col>
              <Col className=" d-flex align-items-center justify-content-end mb-3">
                &gt;
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </div>
      </Container>

      {/* Final Price */}
      <Container className={styles.priceDetails}>
        <h2>Final Price</h2>
        <Card className={` ${styles.CardContainer} shadow`}>
          <Card.Body className={styles.FinalCardDetails}>
            <div className={styles.FinalCardRow}>
              <label>Price:</label>
              <h6>1000 per/hour</h6>
            </div>
            <div className={styles.FinalCardRow}>
              <label>Sub Total:</label>
              <h6>2500</h6>
            </div>
            <div className={styles.FinalCardRow}>
              <label>No of Hours:</label>
              <h6>2500</h6>
            </div>
            <div className={styles.FinalCardRow}>
              <label>Tax Amount:</label>
              <h6>2500</h6>
            </div>
            <div className={styles.FinalCardRow}>
              <label>Coupon Code Discount :</label>
              <h6>2500</h6>
            </div>
            <div className={styles.FinalCardRow}>
              <label>Total Amount:</label>
              <h6>2500</h6>
            </div>
          </Card.Body>
        </Card>
      </Container>

      <button
        type="submit"
        className="btn selectbtn1"
        onClick={() => setShowModal(true)}
        style={{ borderRadius: "30px", color: "white" }}
      >
        Reschedule Booking
      </button>
      {showModal && <RescheduleBooking closeModal={closeModal} />}
      <button
        type="submit"
        className="btn selectbtn1"
        onClick={() => setShowcancel(true)}
        style={{ borderRadius: "30px", color: "white" }}
      >
        Cancel booking
      </button>
      {showcancel && <CancelBooking closecancel={closecancel} />}
    </Container>
  );
};

export default ProceedBooking;
