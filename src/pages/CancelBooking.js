import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const CancelBooking =({closecancel})=>{
    return (
       <>
      <div className="modal-wrapper1">
        <div className="modal-container1">
        <Row>
            <Col className="cancleBooking">
            <h4>
            Are you sure? You want to cancel your booking.
            </h4>
            </Col>
        </Row> 
        <Row>
            <Col className="Canclebooking">
            <p>Tap on cancel booking to cancel your booking</p>
            </Col>
        </Row> 
         
        <Container>
  <Row>
    <Col>
 
    </Col>
  </Row>
  </Container>
      <Row>
        <Col className="cancelbtn">
        <button className="cancle-btn1" onClick={closecancel}>Cancel Booking</button>
       <button className="Dismiss-btn1" onClick={closecancel} >Dismiss</button>
        </Col>
      </Row>
        </div>
      </div>
       </>
    )
   }
   export default CancelBooking;