import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
// import Portfolio from '../components/Portfolio';
import Client from '../components/Client';
import Blog from '../components/Blog';
import Faq from '../components/Faq';
import Script from 'next/script'
// import Script from 'next/script'
const Index = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="85" >
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script> 
    <Script src="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
      <Layout pageTitle="Landing Page Nextjs">
      <Hero />
 
      <Service />
      <Portfolio /> 
      <Client/>
     <Blog/> 
    <Faq/>

     </Layout>

    {/* Client */}
    </div>
    
  )
}

export default Index;
