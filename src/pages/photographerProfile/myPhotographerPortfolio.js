import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import style from "../../styles/photographer.module.css";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useState } from "react";
const labels = [
  "jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aus",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels,
  datasets: [
    {
      labels: "2020 expense",
      data: [
        10000, 9000, 8000, 10200, 10500, 8400, 13000, 8900, 14600, 17000, 9000,
        12500,
      ],
      backgroundColor: "blue",
    },
  ],
};
const MyphotographerPortfolio = () => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  // 35
  return (
    <div>
      <Container>
        <h6 aria-label="breadcrumb" className=" mb-5 mt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item ">
              <a href="#" className="text-decoration-none">
                Home
              </a>
            </li>
            <li className="breadcrumb-item " aria-current="page">
              myprofile
            </li>
          </ol>
        </h6>
        {/* ----------------------------------------myprofile----------------------------------------------------- */}

        <Container>
          <div className={style.profilephoto}>
            <div class={style.myprofilephoto}>
              <div>
                <Row>
                  <Col>
                    <Image
                      className=""
                      src="/images/Rectangle 8908@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={110}
                      height={110}
                    />
                  </Col>
                </Row>
              </div>
              <div className={style.brucephoto}>
                <Row>
                  <Col>
                    <h3>Marshall Bruce</h3>
                    <p>marshallbruce119@gmail.com</p>
                  </Col>
                  <Col>
                    <a href="#">Edit</a>
                  </Col>
                </Row>

                <div className={style.brue1photo}>
                  <div>
                    <label>MALE</label>
                  </div>

                  <div>
                    <h6>DOB : 24-07-2000</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.paymentphoto}>
              <Row>
                <Col>
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
                </Col>
                <Col>
                  <h5>&gt;</h5>
                </Col>
              </Row>
            </div>
          </div>
        </Container>

        <Container>
          <div className={style.mainpaymentphoto}>
            <div className={style.secondphoto}>
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
                <h4>Equipments and Gear</h4>
              </div>
              <div>
                <h5>&gt;</h5>
              </div>
            </div>
            <div className={style.secondphoto}>
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
                <h4>Previous bookings</h4>
              </div>
              <div>
                <h5>&gt;</h5>
              </div>
            </div>
            <div className={style.secondphoto}>
              <div>
                <div>
                  <Image
                    className=" "
                    src="/images/Icon feather-calendar@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                    width={19.75}
                    height={15.21}
                  />
                </div>
                <h4>Payment methods</h4>
              </div>
              <div>
                <h5>&gt;</h5>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div>
            <h6>My Booking</h6>
          </div>
          <div className={style.tap}>
            <ul className={style.activephoto}>
              <li className={style.flexfill} onClick={() => updateToggle(1)}>
                Active Bookings
              </li>
              <li className={style.flexfill} onClick={() => updateToggle(2)}>
                New Requests (2)
              </li>
            </ul>
            <div className={toggle === 1 ? style.showcontent : style.content}>
              <div className={style.mycardprofile}>
                <div className={style.myBooking}>
                  <Row>
                    <Col>
                      <div className={style.BookingStatus}>
                        <div>
                          <h5>BK00011</h5>
                        </div>
                        <div>
                          <button type="button" className={style.pendingbgn}>
                            PENDING
                          </button>
                        </div>
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
                          Chitrapuri colony, Manikonda, Puppalaguda, Ranga
                          reddy, Hyderabad - 500089
                        </h6>
                      </div>

                      <div>
                        <label>Total price</label>
                        <h6>
                          <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                        </h6>
                      </div>

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
                      <Row>
                        <Col>
                          <button type="button" className={style.photoaccpet}>
                            Accpet
                          </button>
                        </Col>
                        <Col>
                          <button type="button" className={style.photoReject}>
                            Reject
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className={toggle === 2 ? style.showcontent : style.content}>
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
                          Chitrapuri colony, Manikonda, Puppalaguda, Ranga
                          reddy, Hyderabad - 500089
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
              </div>
            </div>
          </div>
        </Container>
        {/*--------------------- 1nd line card-------------------- */}
        <Container>
          <div className={style.mycardprofile}>
            <div className={style.myBooking}>
              <Row>
                <Col>
                  <div className={style.BookingStatus}>
                    <h5>BK00011</h5>
                    <button type="button" className={style.pendingbgn}>
                      PENDING
                    </button>
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

                  <div>
                    <label>Total price</label>
                    <h6>
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>

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
                  <Row>
                    <Col>
                      <button type="button" className={style.photoaccpet}>
                        Accpet
                      </button>
                    </Col>
                    <Col>
                      <button type="button" className={style.photoReject}>
                        Reject
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            {/*---------------- 1nd line 2card------------------ */}
            <div className={style.myBooking}>
              <Row>
                <Col>
                  <div className={style.BookingStatus}>
                    <h5>BK00011</h5>
                    <button type="button" className={style.pendingbgn}>
                      PENDING
                    </button>
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

                  <div>
                    <label>Total price</label>
                    <h6>
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>

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
                  <Row>
                    <Col>
                      <button type="button" className={style.photoaccpet}>
                        Accpet
                      </button>
                    </Col>
                    <Col>
                      <button type="button" className={style.photoReject}>
                        Reject
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            {/*--------------------- 1nd line 3rd cards ------------------------- */}
            <div className={style.myBooking}>
              <Row>
                <Col>
                  <div className={style.BookingStatus}>
                    <h5>BK00011</h5>

                    <button className={style.pendingbgn}>PENDING</button>
                  </div>
                  <div>
                    <Image
                      src="/images/Icon feather-calendar@2x.png"
                      alt="Image 1"
                      style={{ width: "" }}
                      width={18.5}
                      height={16.72}
                    />
                    <div>
                      <h6>22 June, 2022 - 06:30 PM</h6>
                    </div>
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

                  <div>
                    <label>Total price</label>
                    <h6>
                      <span>&#8377;</span> 1000 <i>Per Hour</i>{" "}
                    </h6>
                  </div>

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
                  <Row>
                    <Col>
                      <button type="button" className={style.photoaccpet}>
                        Accpet
                      </button>
                    </Col>
                    <Col>
                      <button type="button" className={style.photoReject}>
                        Reject
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <Container>
          <div className={style.chatsphoto}>
            <div>
              <h6>Performance Analysis (2022)</h6>
            </div>
            <div>
              <h6>Price</h6>
            </div>
          </div>
          <Bar data={data} />
        </Container>
      </Container>
    </div>
  );
};
export default MyphotographerPortfolio;
