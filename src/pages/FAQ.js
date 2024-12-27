import React from "react";
import { Accordion, Container } from "react-bootstrap";

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
          <Accordion defaultActiveKey="0" flush="true">
            <div className="faq1">
              <Accordion.Item className="Accordion.Item " eventKey="0">
                <Accordion.Header>
                  <h5>How does MyClickerr work?</h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h6>
                    MyClickerr is an application where users can browse
                    photographers, view their portfolios, read reviews. Once a
                    suitable photographer is selected, customers can directly
                    book them through the mobile app or web application.
                  </h6>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="faq1">
              <Accordion.Item eventKey="1" flush="true">
                <Accordion.Header>
                  <h5>How does payment work on MyClickerr?</h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h6>
                    MyClickerr provides a secure and convenient payment system.
                    Customers can make payments directly through the app using
                    their preferred payment method. Once the payment is
                    completed your booking gets confirmed.
                  </h6>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="faq1">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5>
                    Can I communicate with the photographer before booking?
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h6>
                    Absolutely! Once you have selected a photographer, you can
                    use the in-app messaging system to discuss your
                    requirements, clarify any doubts, and ensure that both
                    parties are on the same page before finalizing the booking.
                  </h6>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="faq1">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h5>What happens after I book a photographer?</h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h6>
                    After successfully booking a photographer through
                    MyClickerr, you will receive confirmation of the booking
                    details. The photographer will also be notified of the
                    booking and will reach out to you to further discuss the
                    specifics of the shoot. You can use the app to stay
                    connected with the photographer throughout the process.
                  </h6>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="faq1">
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h5>What if I need to cancel or reschedule a booking?</h5>
                </Accordion.Header>
                <Accordion.Body className="faqbody">
                  <h6>
                    we understand that plans can change. If you need to cancel
                    or reschedule a booking, you can do so through the app.
                    However, please note that each photographer has their own
                    cancellation and rescheduling policies.
                  </h6>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </Container>
        
      </Container>
    </div>
    
  );
}

export default FAQ;
