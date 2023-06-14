import { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container, Row, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import styles from "../../src/styles/Booking.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

import { BsArrowLeft } from "react-icons/bs";

const NewBooking = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  const [endTime, setEndTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const totalDuration = calculateDuration();

    const data = {
      startDate,
      endDate,
      startTime,
      endTime,
      eventTitle,
      eventType,
      eventDescription,
      totalDuration,
    };

    try {
      const response = await axios.post(
        "http://localhost:9090/api/users/O8cBHWArYGMnOc4IkYPOaHd78Uf1/photographer/nRWPg8GfglTqWOd2RJ2CKMO4j0w1/eventbooking",
        data
      );
      console.log(response.data);
      if (response.status === 200) {
        router.push("/proceedBooking");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const calculateDuration = () => {
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);
    const diff = Math.abs(end - start) / 1000;
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="mainCont">
      <h3 className="smallScreenTitleNewBooking">
        {" "}
        <BsArrowLeft className="ArrowSmallScreen" /> Bookings details
      </h3>
      <Card className="my-4 mx-4 shadow cardClass">
        <Container>
          <Card.Body>
            <Breadcrumb>
              <Breadcrumb.Item href="#" className="HeadinglargeScreen">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                href="/photographerDetails"
                className="HeadinglargeScreen"
              >
                Photographer details
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="HeadinglargeScreen">
                New Booking
              </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col>
                <h1 className="HeadinglargeScreen">New Booking</h1>
              </Col>
              <Col className="HeadinglargeScreen">
                <h2>Alex Barnett</h2>
                <h6>Alex Barnett</h6>
              </Col>
            </Row>
            <h3 className="largeScreenTitleNewBooking">Bookings details</h3>

            <Form className="mainContLar" onSubmit={handelSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd-MM-yyyy"
                      className={styles.datepicker}
                      minDate={new Date()}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="Start Time"
                      onChange={(e) => setStartTime(e.target.value)}
                      className={styles.inputFields}
                    />

                    {/* <TimePicker
              value={startTime}
              onChange={(time) => setStartTime(time)}
              className={styles.timepicker}
              clockClassName={styles.clock}
              clearIcon={null}
              showIcon={false}
              showMeridian={true}
            /> */}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd-MM-yyyy"
                      className={styles.datepicker}
                      minDate={new Date()}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="End Time"
                      onChange={(e) => setEndTime(e.target.value)}
                      // className={styles.input}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Total Duration</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="Total Time"
                      value={calculateDuration()}
                      // className={styles.input}
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Event Title"
                      onChange={(e) => setEventTitle(e.target.value)}
                      // className={styles.input}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Event Type</Form.Label>
                    <Form.Select
                      onChange={(e) => setEventType(e.target.value)}
                      className={styles.input}
                    >
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Bachelor_Party">Bachelor Party</option>
                      <option value="Wedding_Shower">Wedding Shower</option>
                      <option value="Pre_Wedding">Pre Wedding</option>
                      <option value="Wedding_Reception">
                        Wedding Reception
                      </option>
                      <option value="Birthday_celebration">
                        Birthday Celebration
                      </option>
                      <option value="Fashion_Photography">
                        Fashion Photography
                      </option>
                      <option value="House_warming">House Warming</option>
                      <option value="Pet_Photography">Pet Photography</option>
                      <option value="Food_photography">Food Photography</option>
                      <option value="Candid_photo_shoot">
                        Candid Photo Shoot
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Event Description"
                      onChange={(e) => setEventDescription(e.target.value)}
                      // className={styles.textarea}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <Link href="/proceedBooking"> */}
              <button className="OTP-Button mt-4">Proceed</button>
              {/* </Link> */}
            </Form>
          </Card.Body>
        </Container>
      </Card>

      <button className="ButtonProceedforNewBooking">Proceed</button>
    </div>
  );
};

export default NewBooking;
