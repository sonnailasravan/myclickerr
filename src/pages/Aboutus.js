import MainHeader from "./MainHeader"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Footer from "../../Components/Footer/Footer";
import style from "./../../src/styles/Homepage.module.css";

function Aboutus(){
     return(
         <div>
            <MainHeader/>
            <Container>
                 
                <div className="aboutus1">     
                   <div>
                    <h1>About us</h1>
                    <p>Are you looking for a professional photographer for your upcoming event, but don’t know where to start? We’re here</p>
                    <button type="submit">Add Location</button>
                   </div>
                    <div>
                    <Image
                
                      src="/images/Mask Group 1@2x.png"
                          alt="Image 1"
                          style={{ width: "" }}
                           width={500}
                           height={500}
                      />
                    </div>
               </div>  
            </Container>
            <Container >
            <div className="aboutus2">     
                   <div>
                   <h1>Our Core Values</h1>
                   </div>
                    <div className="aboutus3">
                      <div class="transparancy">
                      <Image
                             src="/images/ICON1.png"
                              alt="Image 1"
                            style={{ width: "" }}
                              width={54}
                                     height={54}
                                          />
                       <label>Transparency</label>
                       </div>
                       <div className="transparancy">
                       <Image
                        src="/images/Group 5987@2x.png"
                             alt="Image 1"
                             style={{ width: "auto" }}
                               width={54}
                              height={54}
                                     />
                       <label>Empathy</label>
                       </div>
                       <div className="transparancy">
                       <Image
                           src="/images/icon3.png"
                            alt="Image 1"
                             style={{ width: "auto" }}
                            width={54}
                              height={54}
                                />
                       <label>Data Privacy</label>
                       </div>
                       <div className="transparancy">
                       <Image
                           src="/images/ICON1.png"
                              alt="Image 1"
                             style={{ width: "" }}
                                 width={54}
                                 height={54}
                             />
                       <label>100% Security</label>
                       </div>
                      
                    </div>
               </div>  
            </Container>
             {/* Download */}
        <Container>
          <Row className={style.downloadtext}>
            <div className={style.mobilescreeens}>
              {/* <Col xs={12} md={6}> */}
              <Image
                src="/Images/Ourprocess/Mobile2.png"
                alt="Image" width={300} height={500}
                style={{ maxWidth: "90%", marginTop: "170px", gap: "10px" }}
              />
              <Image
                src="/Images/Ourprocess/Mobile1.png"
                alt="Image"
                width={300} height={500}
                style={{ maxWidth: "90%" }}
              />
              {/* </Col> */}
            </div>
            <div>
              {/* <Col xs={12} md={6}> */}
              <h2 className="animate__animated animate__fadeIn">
                Download MyClicker Mobile app
              </h2>
              <label>
                Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
                neque. Aenean enim sem, pharetra et magna sit amet, luctus
                aliquet nibh. Curabitur auctor leo et libero.
              </label>
              {/* </Col> */}
            </div>
          </Row>
        </Container>
            <Container>
          <div className="aboutus4">
                 <div>
                    <h1> Meet our team </h1>
                </div>
               </div>
              
            <div className="aboutus5">
              <div>
              <Image
                src="/images/pexels-anna-shvets-5325105@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                     width={233.3}
                     height={259.72}
                />
                <label>Bobby Reynolds</label>
                <p>Founder & CEO</p>
              </div>
              <div>
              <Image
                src="/images/pexels-emmy-e-2381069@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                     width={233.33}
                     height={259.72}
                />
                <label>Kathryn Young</label>
                <p>CTO and Co-Founder</p>
              </div>
              <div>
              <Image
                src="/images/pexels-emre-keshavarz-3752128@2x.png"
                    alt="Image 1"
                    style={{ width: "" }}
                     width={233.33}
                     height={259.72}
                />
                <label>Ronnie Dean</label>
                <p>Chief Operations Officer</p>
              </div>
            </div>
          
            </Container>
            <Footer/>
         </div>
     )
}
export default Aboutus;