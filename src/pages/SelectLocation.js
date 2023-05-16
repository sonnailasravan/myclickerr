import { useState } from "react";
import Header from "../../Components/NavBar/Header"
import { Container, Row, Col } from "react-bootstrap";
 import RescheduleBooking from "./Reschedule Booking";
 import Image from "next/image";
import CancelBooking from "./CancelBooking";
import Link from "next/link";
function Selectloction(){
    const [showModal, setShowModal] = useState(false);
    const closeModal =()=> setShowModal(false)

    const [showcancel, setShowcancel] = useState(false);           
    const closecancel =()=> setShowcancel(false)
   
return(
    <div>
         <Header/>
     <Container>
     <h6><span>&#8592;</span>Select Location</h6>
     <Row>
        <h1>map</h1>
        <Image
        className=""
        src="/images/Group 20164@2x.png"
        alt="Image 1"
        style={{ width: "" }}
        width={60}
        height={60}
      />
     </Row>
     <Col>
        <a href="#" class="link-danger">Edit</a>
        </Col>
  <Container>
  <Row>
    <Col>
 <form className="forms">
 <Row>
 <Col className="gridcontainer">
  <div className="input-group">
  <input type="text" className="input" style={{borderRadius:"5px"}}/>
   <label className="addrres1">Address Line 1</label>
   </div>
   
   <div className="input-group">
  <input type="text" className="input"style={{borderRadius:"5px"}}/>
 <label className="addrres1">Address Line 2</label>
   </div>
   </Col>
 </Row>
 <Row>
 <Col className="gridcontainer">
  <div className="input-group">
  <input type="text" className="input"style={{borderRadius:"5px"}}/>
 <label className="addrres1">City</label>
   </div>
  
   <div className="input-group">
  <input type="text" className="input"style={{borderRadius:"5px"}}/>
 <label className="addrres1">State</label>
   </div>
   </Col>
 </Row>
 <Row>
 <Col className="gridcontainer">
  <div className="input-group">
  <input type="text" className="input"/>
 <label className="addrres1">Country</label>
   </div>
   <div className="input-group">
  <input type="text" className="input"/>
 <label className="addrres1">PIN code</label>
   </div>
   </Col>
 </Row>
   
  </form>
    </Col>
  </Row>
  </Container>
  <Link href="/confirmBooking">
  <button type="submit"  className="btn selectbtn1"  style={{borderRadius:"30px",color:"white"}}>Add Location</button>
  </Link>
  
  {/* <button type="submit"  className="btn selectbtn1" onClick={()=> setShowModal(true)} style={{borderRadius:"30px",color:"white"}}>Add Location</button>
  {showModal && < RescheduleBooking closeModal={closeModal}/>}
  <button type="submit"  className="btn selectbtn1" onClick={()=> setShowcancel(true)} style={{borderRadius:"30px",color:"white"}}>Cancel booking</button>
  {showcancel && < CancelBooking closecancel={closecancel}/>} */}
    </Container>
    </div>
)
}
export default Selectloction;