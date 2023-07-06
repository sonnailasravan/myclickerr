import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import Login from "../../src/pages/Login";
import Dropdownprofiles from "../../src/pages/Dropdownprofiles";
import { useRouter } from "next/router";

const MyDownloadLink = () => {
  const [downloadLink, setDownloadLink] = useState("/");

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isWindows = /Windows/.test(navigator.userAgent);

    const getAppStoreLink = () => {
      return "https://www.apple.com/in/search/Myclickerr?src=globalnav";
    };

    const getPlayStoreLink = () => {
      return "https://play.google.com/store/search?q=Myclickerr&c=apps";
    };

    const getWindowsDownloadLink = () => {
      return "https://play.google.com/store/search?q=Myclickerr&c=apps";
    };

    const getDownloadLink = () => {
      if (isIOS) {
        return getAppStoreLink();
      } else if (isAndroid) {
        return getPlayStoreLink();
      } else if (isWindows) {
        return getWindowsDownloadLink();
      } else {
        return "/"; // Fallback link if the device is not iOS, Android, or Windows
      }
    };

    setDownloadLink(getDownloadLink());
  }, []);

  return (
    <Nav.Link href={downloadLink} target="_blank" rel="noopener noreferrer">
      Download Now
    </Nav.Link>
  );
};


const MainHeader = () => {
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    const navLinks = document.querySelectorAll('.Navtabs .nav-link');

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [router]);
  // const [openProfile, setopenProfile] = useState(false);

  // const onClickSignup=()=>{
  // setopenProfile(prev=>!prev)
  // }
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbgchange">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
            {" "}
            <Image
              className="Navbar"
              src="/Images/logo clicker.png"
              alt="Your Logo"
              width={182}
              height={40}
              priority
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="Navtabs">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Aboutus">About Us</Nav.Link>
            <Nav.Link href="/FAQ">FAQ`s</Nav.Link>
            {/* <Nav.Link href='/popularPhotographers'>Popular Photographers</Nav.Link> */}
            <Nav.Link href="/contactUs">Contact us</Nav.Link>
            {/* <Nav.Link
              href="https://play.google.com/store/search?q=Myclickerr&c=apps"
              target="_blank"
               onClick={onClickSignup}
            >
              Download Now
            </Nav.Link> */}
            <MyDownloadLink/>
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
