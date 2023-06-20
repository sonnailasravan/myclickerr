import "@/styles/globals.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Head from "next/head";
import MainHeader from "./MainHeader";
import Footer from "../../Components/Footer/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your app description" />
      </Head>
      <div id="root">
        <MainHeader/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
}
