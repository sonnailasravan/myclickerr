import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const RescheduleBooking =({closeModal})=>{
    return (
       <>
      <div className="modal-wrapper">                {/* popup */}          
        <div className="modal-container">
        <Row>
            <Col className="reschedule">
            <h6>
            Reschedule Booking
            </h6>
            <h6>
            Cancel
            </h6>
            </Col>
        </Row> 
        <hr/>
        <Container>
  <Row>
    <Col>
 <form className="forms">
 <Row>
 <Col className="gridcontainer">
  <div className="input-group">
   <input type="date" className="input"/>
   <label className="addrres2">Rescheduled Start Date</label>
   </div>
   
   <div className="input-group">
  <input type="date" className="input"/>
 <label className="addrres2">Rescheduled Start Time</label>
   </div>
   </Col>
 </Row>
 <Row>
 <Col className="gridcontainer">
  <div className="input-group">
  <input type="time" className="input"/>
 <label className="addrres2">Rescheduled Start Time</label>
   </div>
  
   <div className="input-group">
  <input type="time" className="input"/>
 <label className="addrres2">Rescheduled Start Time</label>
   </div>
   </Col>
 </Row>
 
      
  </form>
    </Col>
  </Row>
  </Container>
       <button className="modal-btn" onClick={closeModal}>Reschedule Booking</button>
        </div>
      </div>
       </>
    )
   }
   export default RescheduleBooking;