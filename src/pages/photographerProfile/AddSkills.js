// import React, { useState, useRef, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import Link from "next/link";
// import lottie from "lottie-web";
// import animationData from "../../../public/Images/Ourprocess/professional-photographer-taking-picture (1).json";
// import { TiTick} from "react-icons/Ti";
// const AddSkills = () => {

//     const onClickProccedButton=()=>{}
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
//           <div ref={container} style={{ width: "100%", height: "auto" }} />
//           <h4>Digital Platform for Photographers</h4>
//         </Col>
//        <Col className="AddSkiilsMainCont ">
       
//         <div className="AddSkillsScrollCont "> 
// <div className="AddSkillscolorInTheScroll"></div>
//         </div>

//         <br/>

//        <div className="topBackAddSkills">
//             <Link href="/Login">&lt; Back</Link>
//           </div>

//           <h1 className="AddSkillsHeading">Add Skills</h1>
//             <p className="AddSkiilsPara" >Adding your skills will give you a good exposure</p>

//               <div>
//                 <p className="AddSkiilsPara">Pre Production Skills</p>
//                 <div className="rowButtonSkillsCont ">
//                     <button className="skillsButton hover">Portrait Photographer <TiTick /></button>
//                     <button className="skillsButton hover">Lighting <TiTick/></button>
//                     <button className="skillsButton hover">Wedding Photographer <TiTick/></button>
//                      </div>
//               </div>

//               <br/>

//               <div>
//                 <p className="AddSkiilsPara">Post Production Skills</p>
//                 <div className="rowButtonPostSkills">
//                     <button className="SkillsButtonPost hover">Editing <TiTick/></button>
//                     <button className="SkillsButtonPost hover">Color Grading   <TiTick/></button>
//                     <button className="SkillsButtonPost hover">Digital <TiTick/></button>
//                     <button className="SkillsButtonPost hover">Poster Designing <TiTick/></button>
                   
//                      </div>
//               </div>


//               <button className="AlbumDesigning hover">Album Designing <TiTick/></button>
                
            
//             <br/>

//                     <button type="button" className="buttonProcced" onClick={onClickProccedButton}>Proceed</button>
                    
//        </Col>
//        <Col className="AddSkiilsMainContSmallScreen ">
       
//         <div className="AddSkillsScrollContSmallScreen "> 
// <div className="AddSkillscolorInTheScrollSmallScreen"></div>
//         </div>

//         <Image
//             className="NavbarSmallAddSkills"
//             src="/images/Ourprocess/Group 5982@2x.png"
//             alt="Your Logo"
//             width={182}
//             height={40}
//             priority
//           />

//         <br/>

//        {/* <div className="topBackAddSkills">
//             <Link href="/Login">&lt; Back</Link>
//           </div> */}

//           <h1 className="AddSkillsHeadingSmallScreen">Add Skills</h1>
//             <p className="AddSkiilsParaSmallScreen" >Adding your skills will give you a good exposure</p>

//               <div>
//                 <p className="AddSkiilsParaSmallScreen">Pre Production Skills</p>
//                 <div className="rowButtonSkillsContSmallScreen ">
//                     <button className="skillsButtonSmallScreen hover">Portrait Photographer <TiTick /></button>
//                     <button className="skillsButtonSmallScreen hover">Lighting <TiTick/></button>
//                     <button className="skillsButtonSmallScreen hover">Wedding Photographer <TiTick/></button>
//                      </div>
//               </div>

//               <br/>

//               <div>
//                 <p className="AddSkiilsParaSmallScreen">Post Production Skills</p>
//                 <div className="rowButtonPostSkillsSmallScreen">
//                     <button className="SkillsButtonPostSmallScreen hover">Editing <TiTick/></button>
//                     <button className="SkillsButtonPostSmallScreen hover">Color Grading   <TiTick/></button>
//                     <button className="SkillsButtonPostSmallScreen hover">Digital <TiTick/></button>
//                     <button className="SkillsButtonPostSmallScreen hover">Poster Designing <TiTick/></button>
                   
//                      </div>
//               </div>


//               <button className="AlbumDesigningSmallScreen hover">Album Designing <TiTick/></button>
                
            
//             <br/>

//                     <button type="button" className="ButtonNextSmallScreen" onClick={onClickProccedButton}>Next</button>
//        </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddSkills;
