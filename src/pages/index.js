import React from 'react'
import NavBar from "../../Components/NavBar/Navbar"
import Footer from '../../Components/Footer/Footer';
import Terms from '../../Components/Terms and Conditions/Terms';
import Homepage from '../../Components/Homepage/Homepage';

const index = () => {
  return (
    <div>
      <NavBar/>
      <Homepage/>
      {/* <Terms/>
      <Footer/> */}
    </div>
    
  )
}

export default index;