import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import Login from "../../src/pages/Login";
import Dropdownprofiles from "../../src/pages/Dropdownprofiles";

const MainHeader = () => {
  const [openProfile, setopenProfile] = useState(false);

  const onClickSignup=()=>{
  setopenProfile(prev=>!prev)
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbgchange">
      <Container >
        <Navbar.Brand>
          <Image
            className="Navbar"
            src="/images/logo.jpg"
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
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>FAQ`s</Nav.Link>
            <Nav.Link href='/popularPhotographers'>Popular Photographers</Nav.Link>
            <Nav.Link>Contact us</Nav.Link>
            <Nav.Link onClick={onClickSignup}>My Account</Nav.Link>
            { openProfile && <Dropdownprofiles/> }
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