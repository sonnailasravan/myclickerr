import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/photographer.module.css";
import { router, useRouter } from "next/router";
function Myphotos() {
  const onClickphoto = () => {
    router.push("/MyphotographerPhoto");
  };
  //  38
  return (
    <div>
      <Container>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active">
              <a href="#"></a>Home
            </li>
            <li class="breadcrumb-item active">
              <a href="#"></a> My Profile
            </li>
            <li class="breadcrumb-item " aria-current="page">
              My Portfolio
            </li>
          </ol>
        </nav>
        <div className={styles.mainphotos}>
          <div>
            <h6 onClick={onClickphoto}>
              <span>&#60;</span>Back
            </h6>
          </div>
          <div>
            <h2>Sahara Fest</h2>
          </div>
          <div>
            <label>Uploaded on 16 June, 2022 - 08:30AM</label>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.myphotos}>
          <div>
            <Image
              src="/images/Rectangle 9916@2x.png"
              alt="Image 1"
              // style={{ width: "100px" }}
              width={150}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/Rectangle 9915@2x.png"
              alt="Image 1"
              // style={{ width: "100px" }}
              width={150}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/Rectangle 9915@2x.png"
              alt="Image 1"
              // style={{ width: "100px" }}
              width={150}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/Rectangle 9915@2x.png"
              alt="Image 1"
              // style={{ width: "100px" }}
              width={150}
              height={100}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Myphotos;
