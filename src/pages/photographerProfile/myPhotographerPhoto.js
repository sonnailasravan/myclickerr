import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
 import Image from "next/image";
import style from "../../styles/photographer.module.css";
//  import Myphotos from "./myphotos";
 import { router, useRouter } from "next/router";
 
 function Myphotographerphoto(){
    const [openPhoto, setopenPhoto] = useState(false);
    const onClickphoto=()=>{
       router.push("/Myphotos")  
    }
    const onClickaddphoto=()=>{
        router.push("/Addwork")  
    }
    // 36
return(
    <div>
        <Container>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item active"><a href="#"></a>Home</li>
         <li className="breadcrumb-item active"><a href="#"></a> My Profile</li>
        <li className="breadcrumb-item " aria-current="page">My Portfolio</li>
        </ol>
        </nav>
        <div className={style.Gear}>
          <div>
            <h2>My Portfolio</h2>
          </div>
          <div>
         <button  onClick={onClickaddphoto} className={style.NewGearbtn}>+ Add More</button>
         </div>
         </div>
         <Container className={style.photographercontainer}>
        <div className="main-second-rowimg">
      
      
      <div className="second-photorow" >
      <div  className="second-row-imgs">
          <div>
           
               <Image
           
         src="/images/Rectangle 9915@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div >
               <Image
         
         src="/images/Ourprocess/Rectangle 2938@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div >
               <Image
         
         src="/images/Ourprocess/Rectangle 2943@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
    </div>
    <div  className="second-row-imgs">
               <div>
               <Image
         
         src="/images/Ourprocess/Rectangle 2937@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div>
               <Image
          
         src="/images/Ourprocess/Rectangle 2937@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div>
               <Image
          
         src="/images/Ourprocess/Rectangle 2938@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
        </div>
               
     </div>
       </div>   
      
       
      <div  className="second-photorow">
      <div  className="second-row-imgs">
          <div>
               <Image
            
         src="/images/Rectangle 9915@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div >
               <Image
         
         src="/images/Ourprocess/Rectangle 2938@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div >
               <Image
         
         src="/images/Ourprocess/Rectangle 2943@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
    </div>
    <div  className="second-row-imgs">
               <div>
               <Image
         
         src="/images/Ourprocess/Rectangle 2937@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div>
               <Image
          
         src="/images/Ourprocess/Rectangle 2937@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div>
               <Image
          
         src="/images/Ourprocess/Rectangle 2938@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
        </div>
               
     </div>   
      </div>
     <div  className="second-photorow">
      <div  className="second-row-imgs">
          <div>
               <Image
            
         src="/images/Rectangle 9915@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div >
               <Image
         
         src="/images/Ourprocess/Rectangle 2938@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div >
               <Image
         
         src="/images/Ourprocess/Rectangle 2943@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
         width={100}
         height={70}
       />
          </div>
    </div>
    <div  className="second-row-imgs">
               <div>
               <Image
         
         src="/images/Ourprocess/Rectangle 2937@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div>
               <Image
          
         src="/images/Ourprocess/Rectangle 2937@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
               </div>
               <div>
               <Image
          
         src="/images/Ourprocess/Rectangle 2938@2x.png"
         alt="Image 1"
         style={{ width: "100%" }}
           width={150}
         height={70}
       />
        </div>
               
        
      </div>
       
       </div>
      
   </div>
         </Container>

        </Container>
    </div>
)
 }
 export default Myphotographerphoto;