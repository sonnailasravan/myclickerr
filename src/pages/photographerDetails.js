import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../../Components/NavBar/Header";
import Image from "next/image";

const photographerDetails = () => {
  return (
    <Container fluid>
      <Header />
      <Container style={{ height: "600px" }}>
        <Row>
          <Col md={4}>
            {/* Profile picture */}
            <Image
              // className="Navbar"
              className="profile-image"
              src="/Images/Rectangle 2917@2x.jpg"
              alt="Your Logo"
              width={320}
              height={320}
              priority
            />
          </Col>
          <Col md={8}>
            {/* Name, subtitle, and description */}
            <Row className="profile-text">
              <h3>Name</h3>
            </Row>
            <Row>
              <h5>Subtitle</h5>
            </Row>
            <Row>
              <p>Description</p>
            </Row>
            {/* Full name and skills */}
            <Row>
              <Col md={8}>
                <h2>Full Name</h2>
                <p>Person Full Name</p>
              </Col>
              <Col md={4} className="border-left">
                <h4>Skills</h4>
                <p>Total Skills</p>
              </Col>
            </Row>
            {/* Cards */}
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Header>Card 1</Card.Header>
                  <Card.Body>
                    <Card.Text>Card 1 text</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Header>Card 2</Card.Header>
                  <Card.Body>
                    <Card.Text>Card 2 text</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Header>Card 3</Card.Header>
                  <Card.Body>
                    <Card.Text>Card 3 text</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default photographerDetails;
