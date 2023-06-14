// import React, { useState, useRef, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import Link from "next/link";
// import lottie from "lottie-web";
// import animationData from "../.././public/./Images/./Ourprocess/./professional-photographer-taking-picture (1).json";
// import { TiTick } from 'react-icons/ti';
// import {MdNavigateNext} from "react-icons/md"
// const SelectYourProfile = () => {
//   const container = useRef(null);
//   useEffect(() => {
//     const anim = lottie.loadAnimation({
//       container: container.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     });
//     return () => anim.destroy();
//   }, []);

// const onClickProccedButton=()=>{}  
//   return (
//     <Container className="landingpage">
//       <Row className="Logintext">
//         <Col xs={12} md={7} className="image-column">
//           <Image
//             className="Navbar"
//             src="/images/Ourprocess/Group 5982@2x.png"
//             alt="Your Logo"
//             width={182}
//             height={40}
//             priority
//           />
//           <div className="animationCont" ref={container} style={{ width: "100%", height: "auto" }} />
//           <h4 className="DigitalPlatform">Digital Platform for Photographers</h4>
//         </Col>
//         <Col className="right-side-main-container">
//         <div className="topBack a">
//             <Link href="/Login">&lt; Back</Link>
//           </div>
//           <h1 className="titleHeadingElement">Select your profile</h1>
//           <h1 className="titleHeadingElementSmallScreen">Select your profile to proceed</h1>
//           <div>
//           <div className="imageRowCont">
//            <div className="imgDoubleCont">
//              <div className="imageBackgroundCont">
//                 <p  className="userParaElement">User</p>
//             <Image  className="xlImage"
//             src="/Images/Selectyourprofile/boy-using-mobile@2x.png"
//             alt="Your Logo"
//             width={130}
//             height={120}
//             priority
//           />
//             <Image  className="smallImage"
//             src="/Images/Selectyourprofile/boy-using-mobile@2x.png"
//             alt="Your Logo"
//             width={150}
//             height={200}
//             priority
//           />
//                 {/* <Image src="/public/Images/Selectyourprofile/boy-using-mobile@2x.png" alt="boyusingphone" height={100} width={60}/> */}
//             </div></div>
//             <br/>
//             <div className="imgDoubleCont">
//             <div className="imageBackgroundCont">
//                 <p className="userParaElement">Photographer</p>
//                 <Image className="xlImage"
//             src="/Images/Selectyourprofile/tourist-clicking-picture@2x.png"
//             alt="Your Logo"
//             width={130}
//             height={120}
//             priority
//           />
//           <Image className="smallImage"
//             src="/Images/Selectyourprofile/tourist-clicking-picture@2x.png"
//             alt="Your Logo"
//             width={150}
//             height={200}
//             priority
//           /> </div>
//             </div>
//           </div>
//           <div className="tickOverallCont">
//             <div className="tickCont">
//               <TiTick className="tick"/>
//               </div>
//               <div className="tickCont">
//               <TiTick className="tick"/>
//               </div>
//           </div>
//           </div>
//           <br/>
//           <button type="button" className="buttonProcced" onClick={onClickProccedButton}>Proceed</button>
//         </Col><button type="button" className="buttonContinue" onClick={onClickProccedButton}>
//           continue <MdNavigateNext className="next"/>
//         </button>
//       </Row>
//     </Container>
//   );
// };

// export default SelectYourProfile;
