import React from "react";
import styles from "../styles/ContactUs.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
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
            <label>info@myclicker.in</label>
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
            Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.
            Donec pharetra faucibus leofaucibus leofaucibus leofaucibus leo,
            vitae vestibulum leo scelerisque eu.
          </label>
        </div>
      </div>
      <div className={styles.contactRightSide}>
        <h3>Get in touch with us</h3>
        <div className={styles.contactform}>
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Mobile Number" />
          <input type="email" placeholder="Enter Mail" />
          <textarea placeholder="Notes" />
          <button className="Booking-Button">Submit</button>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default contactUs;
