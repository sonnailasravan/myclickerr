import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
 import Image from "next/image";
 import style from "../../styles/photographer.module.css"
 import { router, useRouter } from "next/router";
 function Addwork(){
    const onClickphoto=()=>{
        router.push("/Myphotographerphoto")  
     }
    //  37
     return(
        <div>
        <Container>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item active"><a href="#"></a>Home</li>
         <li class="breadcrumb-item active"><a href="#"></a> My Profile</li>
        <li class="breadcrumb-item " aria-current="page">My Portfolio</li>
        </ol>
        </nav>
        <div className={style.addworkicon}>
          <div>
        <h6 onClick={onClickphoto}><span>&#60;</span>Back</h6>
         </div>
       <div className={style.addform}>
         <div className={style.mainnputadd}>
         <input type="text" className={style.addinput}/>
         <label className={style.addaddrres}>Event Name</label>
       </div>
         </div>
         <div className= {style.Addmedia}>
    <label>Add Media</label>
  </div>
  <div className={style.addmediaimg}>
    
    <label for="fistimg">          
    <Image  
        src="/images/5e22b7e4e6c3f59ce415dd8e5104d203@2x.png"
        alt="Image 1"
        style={{ width: ""}}
        width={40.13}
        height={33.76}
      />
    </label>
    <input type="file" id="fistimg" accept=".png, .jpg"/>

  </div>
  <div className={style.addworkbgn}>
  <button  onClick={onClickphoto} className={style.NewGearbtn}>Save your work</button>
  </div>
         </div>
         </Container>
        </div>
     )
 }
 export default Addwork;