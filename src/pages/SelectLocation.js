import { useState } from "react";
import Header from "../../Components/NavBar/Header";
import { Container, Row, Col } from "react-bootstrap";
import RescheduleBooking from "./Reschedule Booking";
import Image from "next/image";
import CancelBooking from "./CancelBooking";
import Link from "next/link";
function Selectloction() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const [showcancel, setShowcancel] = useState(false);
  const closecancel = () => setShowcancel(false);

  return (
    <div>
      <Header />
      <Container>
        <h6>
          <span>&#8592;</span>Select Location
        </h6>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2026961643082!2d78.35322477360778!3d17.450009901001163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d85e740355%3A0xa589339c4b46cf37!2sFineant%20Consultant%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1685333785656!5m2!1sen!2sin"
          width="1100"
          height="400"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Col>
          <a href="#" class="link-danger">
            Edit
          </a>
        </Col>
        <Container>
          <Row>
            <Col>
              <form className="forms">
                <Row>
                  <Col className="gridcontainer">
                    <div className="input-group">
                      <input
                        type="text"
                        className="input"
                        style={{ borderRadius: "5px" }}
                      />
                      <label className="addrres1">Address Line 1</label>
                    </div>

                    <div className="input-group">
                      <input
                        type="text"
                        className="input"
                        style={{ borderRadius: "5px" }}
                      />
                      <label className="addrres1">Address Line 2</label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="gridcontainer">
                    <div className="input-group">
                      <input
                        type="text"
                        className="input"
                        style={{ borderRadius: "5px" }}
                      />
                      <label className="addrres1">City</label>
                    </div>

                    <div className="input-group">
                      <input
                        type="text"
                        className="input"
                        style={{ borderRadius: "5px" }}
                      />
                      <label className="addrres1">State</label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="gridcontainer">
                    <div className="input-group">
                      <input type="text" className="input" />
                      <label className="addrres1">Country</label>
                    </div>
                    <div className="input-group">
                      <input type="text" className="input" />
                      <label className="addrres1">PIN code</label>
                    </div>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
        <Link href="/confirmBooking">
          <button
            type="submit"
            className="btn selectbtn1"
            style={{ borderRadius: "30px", color: "white" }}
          >
            Add Location
          </button>
        </Link>

        {/* <button type="submit"  className="btn selectbtn1" onClick={()=> setShowModal(true)} style={{borderRadius:"30px",color:"white"}}>Add Location</button>
  {showModal && < RescheduleBooking closeModal={closeModal}/>}
  <button type="submit"  className="btn selectbtn1" onClick={()=> setShowcancel(true)} style={{borderRadius:"30px",color:"white"}}>Cancel booking</button>
  {showcancel && < CancelBooking closecancel={closecancel}/>} */}
      </Container>
    </div>
  );
}
export default Selectloction;
