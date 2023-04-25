import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbgchange">
      <Container fluid>
        <Navbar.Brand>
          <Image className="Navbar" 
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
            <Nav.Link >About Us</Nav.Link>
            <Nav.Link >FAQ`s</Nav.Link>
            <Nav.Link >Popular Photographers</Nav.Link>
            <Nav.Link >Contact us</Nav.Link>
            <Nav.Link><Button className="SignupButton" >Login / Signup</Button> </Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

