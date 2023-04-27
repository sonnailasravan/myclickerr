import React from 'react'
import NavBar from "../../Components/NavBar/Navbar"
import Terms from '../../Components/Terms and Conditions/Terms';
import Homepage from '../../Components/Homepage/Homepage';

const index = () => {
  return (
    <div>
      <NavBar/>
      <Homepage/>
      {/* *<Terms/> */}
    </div>
    
  )
}

export default index;