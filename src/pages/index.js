import React from 'react';
import Head from 'next/head';
import Homepage from '../pages/HomePage';


const index = () => {
  return (
    <div>
      <Head>
        <title>MyClicker</title>
      </Head>
      <Homepage/>
    </div>
    
  )
}

export default index;