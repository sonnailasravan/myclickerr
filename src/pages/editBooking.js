import { useEffect, useState, useMemo } from "react";
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
import apiConfig from "./api/apiConfig";

const NewBooking = () => {
  const url=`${apiConfig.apiUrl}`
  console.log(url)
  const router = useRouter();
  const { eventData } = router.query;
  const parsedEventData = useMemo(() => {
    return eventData ? JSON.parse(eventData) : {};
  }, [eventData]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
  //   To convert a date string in the format "May 10, 2023" to "10-05-2023".

  useEffect(() => {
    if (parsedEventData.startDate) {
      setStartDate(new Date(parsedEventData.startDate));
    }
    if (parsedEventData.endDate) {
      setEndDate(new Date(parsedEventData.endDate));
    }
    if (parsedEventData.startTime) {
      setStartTime(parsedEventData.startTime);
    }
    if (parsedEventData.endTime) {
      setEndTime(parsedEventData.endTime);
    }
    if (parsedEventData.eventTitle) {
      setEventTitle(parsedEventData.eventTitle);
    }
    if (parsedEventData.eventType) {
      setEventType(parsedEventData.eventType);
    }
    if (parsedEventData.eventDescription) {
      setEventDescription(parsedEventData.eventDescription);
    }
  }, [parsedEventData]);

  const handleSubmit = async (e) => {
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
      const response = await axios.put(
        "http://localhost:9090/api/users/O8cBHWArYGMnOc4IkYPOaHd78Uf1/photographer/nRWPg8GfglTqWOd2RJ2CKMO4j0w1/updatebooking/latest",
        data
      );
      console.log(response.data);
      console.log(response.status);
      if (response.status === 201) {
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
    <Card className="my-4 mx-4 shadow">
      <Container>
        <Card.Body>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/photographerDetails">
              Photographer details
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Booking</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col>
              <h1>New Booking</h1>
            </Col>
            <Col>
              <h2>Alex Barnett</h2>
              <h6>Alex Barnett</h6>
            </Col>
          </Row>
          <h3>Bookings details</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Start Date</Form.Label>
                  <DatePicker
                    selected={startDate}
                    value={startDate}
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
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className={styles.input}
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
                    value={endDate}
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
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className={styles.input}
                  />
                  {/* <TimePicker
              value={endTime}
              onChange={(time) => setEndTime(time)}
            //   className={styles.timepicker}
            //   clockClassName={styles.clock}
              clearIcon={null}
              showIcon={false}
              showMeridian={true}
            /> */}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Total Duration</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Total Time"
                    value={calculateDuration()}
                    className={styles.input}
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
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    className={styles.input}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Event Type</Form.Label>
                  <Form.Select
                    onChange={(e) => setEventType(e.target.value)}
                    value={eventType}
                    className={styles.input}
                  >
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Bachelor_Party">Bachelor Party</option>
                    <option value="Wedding_Shower">Wedding Shower</option>
                    <option value="Pre_Wedding">Pre Wedding</option>
                    <option value="Wedding_Reception">Wedding Reception</option>
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
                    value={eventDescription}
                    placeholder="Event Description"
                    onChange={(e) => setEventDescription(e.target.value)}
                    className={styles.textarea}
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
  );
};

export default NewBooking;
