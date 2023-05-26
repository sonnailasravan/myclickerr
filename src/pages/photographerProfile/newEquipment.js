import styles from "../../styles/photographer.module.css";
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Image from "next/image";

function NewEquipment() {
  return (
    <div>
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <a href="#"></a>Home
            </li>
            <li className="breadcrumb-item active">
              <a href="#"></a>My Profile
            </li>
            <li className="breadcrumb-item " aria-current="page">
              Equipments and Gear
            </li>
          </ol>
        </nav>
        <div className={styles.NewEquipment}>
          <h6>
            <span>&lt;</span> Add New Equipment{" "}
          </h6>
        </div>
        <div className={styles.Addmedia}>
          <label>Add Media</label>
        </div>
        <div className={styles.addmediaimg}>
          <label for="fistimg">
            <Image
              src="/images/5e22b7e4e6c3f59ce415dd8e5104d203@2x.png"
              alt="Image 1"
              style={{ width: "" }}
              width={40.13}
              height={33.76}
            />
          </label>
          <input type="file" id="fistimg" accept=".png, .jpg" />
        </div>
        <div className={styles.NewEquipmentform}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Sony Alpha R-III Camera"
              className="input"
            />
            <label className="addrres2">Equipment name</label>
          </div>

          <div className="input-group">
            <input className="input" placeholder="2500" />
            <label className="addrres2">Amount</label>
          </div>
          <div className="input-group">
            <input className="input" placeholder="Day" />
            <label className="addrres2">Amount Per</label>
          </div>
        </div>
        <div>
          <button className={styles.NewEquipmentbtn}>Add Equipment</button>
        </div>
      </Container>
    </div>
  );
}
export default NewEquipment;
