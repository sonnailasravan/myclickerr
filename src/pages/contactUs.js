import React from "react";
import styles from "../styles/ContactUs.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import style from "../styles/Homepage.module.css"
const contactUs = () => {
  return (
    <Container>
      <div className={styles.contact}>
        <div className={styles.contactLeftSide}>
          <h1>Contact Us</h1>
          <div className={styles.imagewrapper}>
            <div>
              <Image
                src="/Images/Ourprocess/XMLID_146_.svg"
                alt="logo"
                width={15}
                height={15}
              />
              <label>support@myclickerr.in</label>
            </div>
            <div>
              <Image
                src="/Images/Ourprocess/telephone.svg"
                alt="logo"
                width={15}
                height={15}
              />
              <label>+91 94853 94853</label>
            </div>
          </div>

          <div>
            <Image
              src="/Images/Ourprocess/location.svg"
              alt="logo"
              width={20}
              height={20}
            />
            <label>
            DLF CYBER CITY, 1st Floor, Vasista Bhavan, Opp lane to, APHB Colony, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032
            </label>
          </div>
        </div>
        <div className={styles.contactRightSide}>
          <h3>Get In Touch With Us</h3>
          <div className={styles.contactform}>
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="email" placeholder="Enter Mail" />
            <textarea placeholder="Notes" rows="6" />
            <button className={style.BookingButton}>Submit</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default contactUs;
