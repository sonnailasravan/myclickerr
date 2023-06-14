// import { useState, useEffect } from "react";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import styles from "../styles/Booking.module.css";
// import { Card } from "react-bootstrap";
// import Link from "next/link";
// import Image from "next/image";
// import axios from "axios";
// import RescheduleBooking from "./Reschedule Booking";
// import CancelBooking from "./CancelBooking";
// import { BsArrowLeft } from "react-icons/bs";
// import { IoMdRadioButtonOn } from "react-icons/Io";
// import { AiOutlineCalendar } from "react-icons/Ai";
// import { GoLocation } from "react-icons/Go";
// import { GrFormNext } from "react-icons/Gr";
// const ProceedBooking = () => {
//   const [eventData, setEventData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const closeModal = () => setShowModal(false);

//   const [showcancel, setShowcancel] = useState(false);
//   const closecancel = () => setShowcancel(false);

//   useEffect(() => {
//     const fetchEventData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9090/api/users/O8cBHWArYGMnOc4IkYPOaHd78Uf1/photographer/nRWPg8GfglTqWOd2RJ2CKMO4j0w1/eventbooking/latest"
//         );
//         setEventData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchEventData();
//   }, []);

//   const formatDate = (dateString) => {
//     const options = { day: "numeric", month: "long", year: "numeric" };
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", options);
//   };

//   return (
//     <div>
//       <Container className="my-4 mx-4 shadow pb-3">
//         <Breadcrumb>
//           <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
//           <Breadcrumb.Item href="/photographerDetails">
//             Photographer details
//           </Breadcrumb.Item>
//           <Breadcrumb.Item active>New Booking</Breadcrumb.Item>
//         </Breadcrumb>
//         <Row className={styles.DetailsCard}>
//           <Col className={styles.alignmentpic}>
//             <Image
//               className={styles.NewBooking}
//               src="/images/Rectangle 2917@2x.jpg"
//               alt="person"
//               width="80"
//               height="80"
//             />
//           </Col>
//           <Col>
//             <h3>Alex Barnett</h3>
//             <h6>Event, Product and Portrait Photographer</h6>
//           </Col>
//         </Row>
//         {/* Event Details */}
//         <Container className={styles.EditDetails}>
//           <h2>Event Details</h2>
//           <Card className="mx-0 my-3 shadow">
//             <Card.Body className={styles.EventDetails}>
//               <Row>
//                 <Col>
//                   <label>StartDate - Time</label>
//                   <h6>
//                     {formatDate(eventData.startDate)} - {eventData.startTime}
//                   </h6>
//                 </Col>
//                 <Col>
//                   <label>EndDate - Time</label>
//                   <h6>
//                     {formatDate(eventData.endDate)} - {eventData.endTime}
//                   </h6>
//                 </Col>
//                 <Col>
//                   <Link
//                     href={{
//                       pathname: "/editBooking",
//                       query: { eventData: JSON.stringify(eventData) },
//                     }}
//                   >
//                     <label className={styles.edit}>Edit</label>
//                   </Link>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <label>Event Title</label>
//                   <h6>{eventData.eventTitle}</h6>
//                 </Col>
//                 <Col>
//                   <label>Event Type</label>
//                   <h6>{eventData.eventType}</h6>
//                 </Col>
//                 <Col>
//                   <label>Total Time</label>
//                   <h6>{eventData.totalDuration} Hours</h6>
//                 </Col>
//               </Row>
//               <Row>
//                 <label>Event Description</label>
//                 <h6>{eventData.eventDescription}</h6>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Container>
//         {/* Addons */}
//         <Container className={styles.EditDetails}>
//           <h2>Add ons</h2>
//           <Card.Body className={styles.EventDetails}>
//             <Row>
//               <Col>
//                 <Card className="shadow">
//                   <Row className="justify-content-center align-items-center px-2">
//                     <Col>
//                       <Image
//                         src="/images/Ourprocess/Camera.png"
//                         alt="equip"
//                         width={64}
//                         height={64}
//                       ></Image>
//                     </Col>
//                     <Col>
//                       <label>Sony Alpha R-III Camera</label>
//                       <h6>Price:2500/ day</h6>
//                     </Col>
//                     <Col>
//                       <Button>ADD</Button>
//                     </Col>
//                   </Row>
//                 </Card>
//               </Col>
//               <Col>
//                 <Card className="shadow">
//                   <Row className="justify-content-center align-items-center px-2">
//                     <Col>
//                       <Image
//                         src="/images/Ourprocess/Camera.png"
//                         alt="equip"
//                         width={64}
//                         height={64}
//                       ></Image>
//                     </Col>
//                     <Col>
//                       <label>Sony Alpha R-III Camera</label>
//                       <h6>Price:2500/ day</h6>
//                     </Col>
//                     <Col>
//                       <Button>ADD</Button>
//                     </Col>
//                   </Row>
//                 </Card>
//               </Col>
//               <Col>
//                 <Card className="shadow">
//                   <Row className="justify-content-center align-items-center px-2">
//                     <Col>
//                       <Image
//                         src="/images/Ourprocess/Camera.png"
//                         alt="equip"
//                         width={64}
//                         height={64}
//                       ></Image>
//                     </Col>
//                     <Col>
//                       <label>Sony Alpha R-III Camera</label>
//                       <h6>Price:2500/ day</h6>
//                     </Col>
//                     <Col>
//                       <Button>ADD</Button>
//                     </Col>
//                   </Row>
//                 </Card>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Container>
//         {/* Coupons */}

//         <Container className={styles.couponDetails}>
//           <h2>Coupons</h2>
//           <div className={styles.couponandAddress}>
//             <Card className="shadow" style={{ width: "40%", margin: "0" }}>
//               <Card.Body className={styles.CouponCardDetails}>
//                 <Row className="justify-content-between">
//                   <Col className="align-items-center">
//                     <label>Apply Coupons</label>
//                   </Col>
//                   <Col className=" d-flex align-items-center justify-content-end mb-3">
//                     &gt;
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//             <Card className="shadow" style={{ width: "40%", margin: "0" }}>
//               <Card.Body className={styles.CouponCardDetails}>
//                 <Row className="justify-content-between">
//                   <Col className="align-items-center">
//                     <label>Add Location</label>
//                   </Col>
//                   <Col className=" d-flex align-items-center justify-content-end mb-3">
//                     &gt;
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </div>
//         </Container>

//         {/* Final Price */}
//         <Container className={styles.priceDetails}>
//           <h2>Final Price</h2>
//           <Card className={` ${styles.CardContainer} shadow`}>
//             <Card.Body className={styles.FinalCardDetails}>
//               <div className={styles.FinalCardRow}>
//                 <label>Price:</label>
//                 <h6>1000 per/hour</h6>
//               </div>
//               <div className={styles.FinalCardRow}>
//                 <label>Sub Total:</label>
//                 <h6>2500</h6>
//               </div>
//               <div className={styles.FinalCardRow}>
//                 <label>No of Hours:</label>
//                 <h6>2500</h6>
//               </div>
//               <div className={styles.FinalCardRow}>
//                 <label>Tax Amount:</label>
//                 <h6>2500</h6>
//               </div>
//               <div className={styles.FinalCardRow}>
//                 <label>Coupon Code Discount :</label>
//                 <h6>2500</h6>
//               </div>
//               <div className={styles.FinalCardRow}>
//                 <label>Total Amount:</label>
//                 <h6>2500</h6>
//               </div>
//             </Card.Body>
//           </Card>
//         </Container>

//         <button
//           type="submit"
//           className="btn selectbtn1"
//           onClick={() => setShowModal(true)}
//           style={{ borderRadius: "30px", color: "white" }}
//         >
//           Reschedule Booking
//         </button>
//         {showModal && <RescheduleBooking closeModal={closeModal} />}
//         <button
//           type="submit"
//           className="btn selectbtn1"
//           onClick={() => setShowcancel(true)}
//           style={{ borderRadius: "30px", color: "white" }}
//         >
//           Cancel booking
//         </button>
//         {showcancel && <CancelBooking closecancel={closecancel} />}
//       </Container>

//       <Container className="SmallScreenMainContConfirmBooking">
//         <div className="bookingDetailsArrow">
//           <BsArrowLeft className="arrowSmallScreenConfirmbooking" />
//           <h1 className="titleSmallScreenConfirmBooking">Booking Details</h1>
//         </div>
//         <div className="topBorderCont"></div>

//         <div className="profileContSmallScreen">
//           <div className="profileAndNameSmall">
//             <Image
//               className={styles.NewBooking}
//               src="/images/Rectangle 2917@2x.jpg"
//               alt="person"
//               width="60"
//               height="60"
//             />
//             <div className="TitleOnlyConfirmBooking">
//               <h3 className="nameSmallConfirmBook">Alex Barnett</h3>
//               <h6 className="paraSmallConfirmBook">
//                 Event, Product and Portrait Photographer
//               </h6>
//             </div>
//           </div>
//           <div className="PorfileContBorderSmall"></div>
//           <p className="BidAmountSmallScreenConBook">
//             Bid Amount:{" "}
//             <span className="CostSmallCB">
//               $ 1000 <span className="PerHourSmallCB">Per Hour</span>
//             </span>
//           </p>

//           <div></div>
//         </div>

//         <h6 className="BidAmountSmallScreenConBook">Event Details</h6>

//         <div className="EventDetailsContSmallCB">
//           <div>
//             {" "}
//             <IoMdRadioButtonOn className="radioColorCB" /> Start Date -Time
//           </div>
//           <div>
//             <h6 className="DateAndTimeCB">
//               {" "}
//               <AiOutlineCalendar /> 22 June, 2023 -06:30 PM
//             </h6>
//           </div>
//           <div>
//             {" "}
//             <IoMdRadioButtonOn className="radioColorCBOrange" /> End Date -Time
//           </div>
//           <div>
//             <h6 className="DateAndTimeCB">
//               {" "}
//               <AiOutlineCalendar /> 23 June, 2023 -06:30 PM
//             </h6>
//           </div>
//           <h6 className="BidAmountSmallScreenConBook">Event Title</h6>
//           <h6 className="DateAndTimeCB"> House Warming Ceremony shoot </h6>
//           <h6 className="BidAmountSmallScreenConBook">Event Type</h6>
//           <h6 className="DateAndTimeCB"> House Ceremony </h6>
//           <h6 className="BidAmountSmallScreenConBook">Total Time</h6>
//           <h6 className="DateAndTimeCB"> 6 Hours</h6>
//           <h6 className="BidAmountSmallScreenConBook">Event Description</h6>
//           <h6 className="DateAndTimeCB">
//             Hey, Alan. Ive seen your work.Impressive. I need a 20 mins footage
//             of our house warming Ceremony and a few photos.{" "}
//           </h6>
//         </div>

//         <h6 className="BidAmountSmallScreenConBook">Service Location</h6>

//         <div className="AddlocationContCB">
//           <h6 className="DateAndTimeCB">
//             <GoLocation />
//             <span className="addLocation">Add Location</span>{" "}
//             <GrFormNext className="nextBtnCB" />{" "}
//           </h6>
//         </div>

//         <div className="AddlocationContCB">
//           <h6 className="DateAndTimeCB">
//             <span className="addLocation">Apply Coupons</span>{" "}
//             <GrFormNext className="nextBtnCB" />{" "}
//           </h6>
//         </div>

//         <h6 className="BidAmountSmallScreenConBook">Basic Price Breakdown</h6>
//         <div className="profileContSmallScreen">
//           <h6 className="BidAmountSmallScreenConBook">
//             <span>Price:</span>
//             <span className="CostSmallCBCB"> $ 1000 </span>
//             <span className="PerHourSmallCBCB"> Per Hour </span>
//           </h6>
//           <h6 className="BidAmountSmallScreenConBook">
//             <span>Sub Total:</span>
//             <span className="CostSmallCBCB"> $ 6000 </span>
//           </h6>
//           <h6 className="BidAmountSmallScreenConBook">
//             <span>No of Hours:</span>
//             <span className="PerHourSmallCBCB"> 6 Hours </span>
//           </h6>
//           <h6 className="BidAmountSmallScreenConBook">
//             <span>Tax Amount:</span>
//             <span className="CostSmallCBCB"> $ 250 </span>
//           </h6>
//           <h6 className="BidAmountSmallScreenConBook">
//             <span>Coupon Code Discount:</span>
//             <span className="CostSmallCBCB"> $ 1,250</span>
//           </h6>
//           <div className="PorfileContBorderSmall"></div>
//           <h6 className="BidAmountSmallScreenConBook">
//             <span>Total Amount:</span>
//             <span className="CostSmallCBCB"> $ 5,000</span>
//           </h6>
//         </div>

//         <button
//           type="submit"
//           className="btn selectbtn1"
//           onClick={() => setShowModal(true)}
//           style={{ borderRadius: "30px", color: "white" }}
//         >
//           Reschedule Booking
//         </button>
//         {showModal && <RescheduleBooking closeModal={closeModal} />}
//         <button
//           type="submit"
//           className="btn selectbtn1"
//           onClick={() => setShowcancel(true)}
//           style={{ borderRadius: "30px", color: "white" }}
//         >
//           Cancel booking
//         </button>
//         {showcancel && <CancelBooking closecancel={closecancel} />}
//       </Container>
//     </div>
//   );
// };

// export default ProceedBooking;
