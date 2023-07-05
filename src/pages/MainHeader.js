import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import Login from "../../src/pages/Login";
import Dropdownprofiles from "../../src/pages/Dropdownprofiles";

const MyDownloadLink = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  const getAppStoreLink = () => {
    return 'https://www.apple.com/in/search/Myclickerr?src=globalnav';
  };

  const getPlayStoreLink = () => {
    return 'https://play.google.com/store/search?q=Myclickerr&c=apps';
  };

  const getDownloadLink = () => {
    if (isIOS) {
      return getAppStoreLink();
    } else if (isAndroid) {
      return getPlayStoreLink();
    } else {
      return '#'; // Fallback link if the device is not iOS or Android
    }
  };

  return (
    <Nav.Link href={getDownloadLink()} target="_blank">
      Download Now
    </Nav.Link>
  );
};
const MainHeader = () => {
  // const [openProfile, setopenProfile] = useState(false);

  // const onClickSignup=()=>{
  // setopenProfile(prev=>!prev)
  // }
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbgchange">
      <Container >
        <Navbar.Brand>
          <Image
            className="Navbar"
            src="/Images/logo clicker.png"
            alt="Your Logo"
            width={182}
            height={40}
            priority
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="Navtabs">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/Aboutus">About Us</Nav.Link>
            <Nav.Link href='/FAQ'>FAQ`s</Nav.Link>
            {/* <Nav.Link href='/popularPhotographers'>Popular Photographers</Nav.Link> */}
            <Nav.Link href="/contactUs">Contact us</Nav.Link>
            <Nav.Link href="https://play.google.com/store/search?q=Myclickerr&c=apps" target="_blank"
            //  onClick={onClickSignup}
            >
             Download Now
            </Nav.Link>
            {/* { openProfile && <Dropdownprofiles/> } */}
            {/* <Link href="/Login">
                <Button className="SignupButton">Login / Signup</Button>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MainHeader;