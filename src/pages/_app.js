import '@/styles/globals.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { useEffect } from 'react';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-back',
      once: true,
    });
  }, []);
  return(
    <>
    <Head>
         <meta name="viewport" content="viewport-fit=cover" />
       </Head>
   <Component {...pageProps} />
   </>
  )
 
}
