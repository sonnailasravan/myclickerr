import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import Login from "../../src/pages/Login";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbgchange">
      <Container >
        <Navbar.Brand>
          <Image
            className="Navbar"
            src="/Images/logo.jpg"
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
            <Nav.Link>Popular Photographers</Nav.Link>
            <Nav.Link>Contact us</Nav.Link>
            <Link href="/Login">
                <Button className="SignupButton">Login / Signup</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
