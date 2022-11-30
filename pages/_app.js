
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import '../styles/globals.css';
import '../styles/animate.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle");
  // }, []);
  return(
    <>
    <Component {...pageProps} />
    {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>  */}

    </>

  ) 
}

export default MyApp
