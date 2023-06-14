import React from "react"
import style from "./../../src/styles/Homepage.module.css";
// import {HiOutlineLogout} from "react-icons/hi"
function Dropdownprofiles(){
 return(
    <div className={style.dropdownprofiles}>
        <ul>
         <li>My Profile</li>
         <li>My Portfolio</li>
         <li>Equipments and Gear</li>
         <li>Previous Bookings</li>
         <hr/>
         <li className={style.icon}>
            {/* <HiOutlineLogout/> */}
            Logout</li>

        </ul>

    </div>
 )
}
export default Dropdownprofiles;