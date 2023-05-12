import React from 'react';
import Head from 'next/head';
import Homepage from '../../Components/Homepage/Homepage';
import Header from '../../Components/NavBar/Header';


const index = () => {
  return (
    <div>
      <Head>
        <title>MyClicker</title>
      </Head>
      <Header/>
      <Homepage/>
    </div>
    
  )
}

export default index;