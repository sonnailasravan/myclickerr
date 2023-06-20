import MainHeader from "./MainHeader";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Myprofile = () => {
  return (
    <div>
      <MainHeader />
      <Container>
        <h6 aria-label="breadcrumb" className=" mb-5 mt-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item ">
              <a href="#" className="text-decoration-none">
                Home
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              myprofile
            </li>
          </ol>
        </h6>
        {/* ----------------------------------------myprofile----------------------------------------------------- */}

        <Container>
          <div className="profile">
            <div class="myprofile">
              <div>
                <Image
                  className=""
                  src="/images/Rectangle 8908@2x.png"
                  alt="Image 1"
                  style={{ width: "" }}
                  width={110}
                  height={110}
                />
              </div>
              <div className="bruce">
                <div className="myprofile-edit">
                  <div>
                    <h3>Marshall Bruce</h3>
                    <p>marshallbruce119@gmail.com</p>
                  </div>
                  <div>
                    <a href="#" class="link-danger">
                      Edit
                    </a>
                  </div>
                </div>

                <div className="brue1">
                  <div>
                    <label>MALE</label>
                  </div>

                  <div>
                    <h6>DOB : 24-07-2000</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment">
              <div>
                <div>
                  <Image
                    className=" "
                    src="/images/Icon feather-calendar@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                    width={16.75}
                    height={12.21}
                  />
                </div>
                <h4>Payment Info</h4>
              </div>
              <div>
                <h5>&gt;</h5>
              </div>
            </div>
          </div>
        </Container>
        {/*---------------------- 1st crad---------------------------    */}

        <Container>
          <div>
            <h6>My Booking</h6>
          </div>
          <div className="mycardprofile">
            <div className="myBooking">
              <Row>
                <Col>
                  <div>
                    <h5>BK00011</h5>
                    <button type="button">REJECTED</button>
                  </div>
                  <div>
                    <Image
                      src="/images/Icon feather-calendar@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>22 June, 2022 - 06:30 PM</h6>
                  </div>

                  <div>
                    <Image
                      src="/images/36cef949429ff821ac048003e594fe92@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>
                      Chitrapuri colony, Manikonda, Puppalaguda, Ranga reddy,
                      Hyderabad - 500089
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <label>Total price</label>
                    <h6>
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <Image
                      src="/images/person.jpg.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={56}
                      height={56}
                    />

                    <div>
                      <h6> Keanu James</h6>
                      <label> Booked on 16 June, 2022 - 08:30AM</label>
                    </div>
                    <div></div>
                  </div>
                </Col>
              </Row>
            </div>
            {/*------------------------ 1st line 2nd card---------------------------- */}
            <div className="myBooking_2">
              <Row>
                <Col>
                  <div>
                    <h5>BK00011</h5>
                    <button type="button">REJECTED</button>
                  </div>
                  <div>
                    <Image
                      src="/images/Icon feather-calendar@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>22 June, 2022 - 06:30 PM</h6>
                  </div>

                  <div>
                    <Image
                      src="/images/36cef949429ff821ac048003e594fe92@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>
                      Chitrapuri colony, Manikonda, Puppalaguda, Ranga reddy,
                      Hyderabad - 500089
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <label>Total price</label>
                    <h6>
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <Image
                      src="/images/person.jpg.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={56}
                      height={56}
                    />

                    <div>
                      <h6> Keanu James</h6>
                      <label> Booked on 16 June, 2022 - 08:30AM</label>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>

        {/*--------------------- 2nd line card-------------------- */}
        <Container>
          <div>
            <h6>Previous Bookings</h6>
          </div>
          <div className="mycardprofile_3">
            <div className="myBooking_3">
              <Row>
                <Col>
                  <div className="BookingStatus">
                    <h5>BK00011</h5>
                    <button type="button">COMPLETED</button>
                  </div>
                  <div>
                    <Image
                      src="/images/Icon feather-calendar@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>22 June, 2022 - 06:30 PM</h6>
                  </div>

                  <div>
                    <Image
                      src="/images/36cef949429ff821ac048003e594fe92@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>
                      Chitrapuri colony, Manikonda, Puppalaguda, Ranga reddy,
                      Hyderabad - 500089
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <label>Total price</label>
                    <h6>
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <Image
                      src="/images/person.jpg.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={56}
                      height={56}
                    />

                    <div>
                      <h6> Keanu James</h6>
                      <label> Booked on 16 June, 2022 - 08:30AM</label>
                    </div>
                  </div>
                  {/* <div>
      <div>
        <h6>
      Booked
      </h6>
      <label>
      16/03/2022 - 08:30AM
      </label>
      </div>
      <h6>
      Booked
      </h6>
      <label>
      16/03/2022 - 08:30AM
      </label>
      <h6>
      Booked
      </h6>
      <label>
      16/03/2022 - 08:30AM
      </label>
     </div> */}
                </Col>
              </Row>
            </div>
            {/*---------------- 2nd line 2card------------------ */}
            <div className="myBooking_3">
              <Row>
                <Col>
                  <div className="BookingStatus">
                    <h5>BK00011</h5>
                    <button type="button">COMPLETED</button>
                  </div>
                  <div>
                    <Image
                      src="/images/Icon feather-calendar@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>22 June, 2022 - 06:30 PM</h6>
                  </div>

                  <div>
                    <Image
                      src="/images/36cef949429ff821ac048003e594fe92@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>
                      Chitrapuri colony, Manikonda, Puppalaguda, Ranga reddy,
                      Hyderabad - 500089
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <label>Total price</label>
                    <h6 className="r3 mb-1 mt-2">
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <Image
                      src="/images/person.jpg.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={56}
                      height={56}
                    />

                    <div>
                      <h6> Keanu James</h6>
                      <label> Booked on 16 June, 2022 - 08:30AM</label>
                    </div>
                  </div>
                  {/* <div>
      <div>
        <h6>
      Booked
      </h6>
      <label>
      16/03/2022 - 08:30AM
      </label>
      </div>
      <h6>
      Booked
      </h6>
      <label>
      16/03/2022 - 08:30AM
      </label>
      <h6>
      Booked
      </h6>
      <label>
      16/03/2022 - 08:30AM
      </label>
     </div> */}
                </Col>
              </Row>
            </div>
            {/*--------------------- 2nd line 3rd cards ------------------------- */}
            <div className="myBooking_3">
              <Row>
                <Col>
                  <div className="BookingStatus">
                    <h5>BK00011</h5>
                    <button type="button">COMPLETED</button>
                  </div>
                  <div>
                    <Image
                      src="/images/Icon feather-calendar@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>22 June, 2022 - 06:30 PM</h6>
                  </div>

                  <div>
                    <Image
                      src="/images/36cef949429ff821ac048003e594fe92@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <h6>
                      Chitrapuri colony, Manikonda, Puppalaguda, Ranga reddy,
                      Hyderabad - 500089
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <label>Total price</label>
                    <h6>
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    <Image
                      src="/images/person.jpg.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={56}
                      height={56}
                    />

                    <div>
                      <h6> Keanu James</h6>
                      <label> Booked on 16 June, 2022 - 08:30AM</label>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>

        {/* ---------------------------------my booking---end------------------------------------ */}
      </Container>
    </div>
  );
};
export default Myprofile;
