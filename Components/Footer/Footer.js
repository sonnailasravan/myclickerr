import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bgdark">
      <Container className="bgchange">
        <div className="mainfooter">
          <div className="myfooter">
            <div>
              <Image
                src="/Images/Group 5981@2x.png"
                alt="Your Logo"
                width={182}
                height={40}
              />
              <label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quis risus mi. Ut placerat quam lectus. Curabitur dictum velit
                non lacus ornare tempor.
              </label>
            </div>
            <div className="footersocial">
              <div>
                <a href="https://www.instagram.com/">
                  {" "}
                  <Image
                    src="/Images/Group 5979@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                    width={40}
                    height={40}
                  />
                </a>
                <a href="https://www.linkedin.com/">
                  {" "}
                  <Image
                    src="/Images/Group 5978@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                    width={40}
                    height={40}
                  />
                </a>
                <a href="https://www.facebook.com/">
                  {" "}
                  <Image
                    src="/Images/Group 5980@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
          <div xs={12} md={3} className="footerside">
            <div>
              <Image
                src="/Images/XMLID_146_@2x.png"
                alt="Your Logo"
                width={18.4}
                height={14}
              />
              <label>info@myclicker.in</label>
            </div>
            <div>
              <Image
                src="/Images/bee4d62d12dd008a6ab2be9c9ad4c247@2x.png"
                alt="Your Logo"
                width={18.4}
                height={14}
              />
              <label>+91 94853 94853</label>
            </div>
            <div>
              <Image
                src="/Images/ae85f5aeeb9ad1d3df18962e747bd309@2x.png"
                alt="Your Logo"
                width={18.4}
                height={14}
              />
              <label>
                Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.
                Donec pharetra faucibus leo, vitae vestibulum leo scelerisque
                eu.
              </label>
            </div>
          </div>
        </div>

        <div className="footerlast">
          <p>@ 2023 Myclicker , All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
