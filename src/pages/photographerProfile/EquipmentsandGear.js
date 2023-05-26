import style from "./../../styles/photographer.module.css";
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import MainHeader from "../MainHeader";
import Image from "next/image";
function EquipmentsandGear() {
  return (
    <div>
      <MainHeader />
      <Container>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active">
              <a href="#"></a>Home
            </li>
            <li class="breadcrumb-item active">
              <a href="#"></a>My Profile
            </li>
            <li
              class="breadcrumb-item "
              aria-current="page"
            >
              Equipments and Gear
            </li>
          </ol>
        </nav>
        <div className={style.Gear}>
          <div>
            <h2>Equipments and Gear</h2>
          </div>
          <div>
            <button className={style.NewGearbtn}>
              + Add Equipments and Gear
            </button>
          </div>
        </div>

        <div className={style.Gearmain}>
          <div className={style.Gearimg}>
            <div>
              <Image
                src="/Images/Rectangle 9915@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={74}
                height={74}
              />
            </div>
            <div>
              <h6>Sony Alpha R-III Camera </h6>
              <p>Price : 2,500 / day</p>
            </div>
            <div>
              <Image
                src="/Images/28376c39e853b540e71ae5496dabc234@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={14}
                height={14}
              />
            </div>
            <div>
              <Image
                src="/Images/da086273b974cb595139babd4da17772@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={14}
                height={14}
              />
            </div>
          </div>
          <div className={style.Gearimg}>
            <div>
              <Image
                src="/images/Rectangle 9916@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={74}
                height={74}
              />
            </div>
            <div>
              <h6>Go Pro Hero 5 </h6>
              <p>Price : 2,500 / day</p>
            </div>
            <div>
              <Image
                src="/images/28376c39e853b540e71ae5496dabc234@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={14}
                height={14}
              />
            </div>
            <div>
              <Image
                src="/images/da086273b974cb595139babd4da17772@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={14}
                height={14}
              />
            </div>
          </div>
          <div className={style.Gearimg}>
            <div>
              <Image
                src="/images/Rectangle 9917@2x.png"
                alt="Image 1"
                // style={{ width: "100px" }}
                width={73}
                height={74}
              />
            </div>
            <div>
              <h6>Invision Tripod</h6>
              <p>Price : 2,500 / day</p>
            </div>
            <div>
              <Image
                src="/images/28376c39e853b540e71ae5496dabc234@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={14}
                height={14}
              />
            </div>
            <div>
              <Image
                src="/images/da086273b974cb595139babd4da17772@2x.png"
                alt="Image 1"
                // style={{ width: "100%" }}
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default EquipmentsandGear;
