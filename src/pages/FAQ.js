import React from "react";
import { Accordion, Container } from "react-bootstrap";

import Footer from "../../Components/Footer/Footer";

function FAQ() {
  return (
    <div>
      {/* <NavBar /> */}
      <Container className="faqmain">
        <Container>
          <div className="faq">
            <h1>Frequently asked questions</h1>
          </div>
        </Container>
        <Container className="faqmain1">
          <Accordion defaultActiveKey="0">
            <div className="faq1">
              <Accordion.Item className="Accordion.Item " eventKey="0">
                <Accordion.Header>
                  <h5>
                    In at iaculis lorem. Praesent tempor dictum tellus ut
                    molestie.
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h5>
                    Aenean sed lorem est. Sed quis neque ut nibh suscipit
                    imperdiet ac non augue.
                  </h5>
                  <p>
                    {" "}
                    Aenean non accumsan ante. Duis et risus accumsan sem tempus
                    porta nec sit amet est. Sed ut euismod quam. Suspendisse
                    potenti. Aliquam fringilla orci tincidunt, ullamcorper erat
                    in, malesuada metus. Vivamus luctus maximus vestibulum.
                    Donec et enim vitae tellus auctor ornare. Aenean leo diam,
                    feugiat sed nulla sed.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="faq2">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5>Duis vestibulum elit vel neque pharetra vulputate.</h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h5>
                    Aenean sed lorem est. Sed quis neque ut nibh suscipit
                    imperdiet ac non augue.
                  </h5>
                  <p>
                    {" "}
                    Aenean non accumsan ante. Duis et risus accumsan sem tempus
                    porta nec sit amet est. Sed ut euismod quam. Suspendisse
                    potenti. Aliquam fringilla orci tincidunt, ullamcorper erat
                    in, malesuada metus. Vivamus luctus maximus vestibulum.
                    Donec et enim vitae tellus auctor ornare. Aenean leo diam,
                    feugiat sed nulla sed.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="faq3">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5>
                    In at iaculis lorem. Praesent tempor dictum tellus ut
                    molestie..
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h5>
                    Aenean sed lorem est. Sed quis neque ut nibh suscipit
                    imperdiet ac non augue.
                  </h5>
                  <p>
                    {" "}
                    Aenean non accumsan ante. Duis et risus accumsan sem tempus
                    porta nec sit amet est. Sed ut euismod quam. Suspendisse
                    potenti. Aliquam fringilla orci tincidunt, ullamcorper erat
                    in, malesuada metus. Vivamus luctus maximus vestibulum.
                    Donec et enim vitae tellus auctor ornare. Aenean leo diam,
                    feugiat sed nulla sed.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="faq4">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h5>
                    Duis mauris augue, efficitur eu arcu sit amet, posuere
                    dignissim neque.
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h5>
                    Aenean sed lorem est. Sed quis neque ut nibh suscipit
                    imperdiet ac non augue.
                  </h5>
                  <p>
                    {" "}
                    Aenean non accumsan ante. Duis et risus accumsan sem tempus
                    porta nec sit amet est. Sed ut euismod quam. Suspendisse
                    potenti. Aliquam fringilla orci tincidunt, ullamcorper erat
                    in, malesuada metus. Vivamus luctus maximus vestibulum.
                    Donec et enim vitae tellus auctor ornare. Aenean leo diam,
                    feugiat sed nulla sed.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default FAQ;
