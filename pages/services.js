import React from "react";

import SectionBuz from "../components/SectionBuzCircle";
import Header from "./../components/Header";
import ServicesCard from "../components/ServicesPagesCard/ServicesPagesCard";
import Footer from '../components/Footer'
const services = () => {
  return (
    <>
      <div className="position-relative">
        <div className="specail_backgroud">
          <Header />
          <section className="dg-servi blog_section" id="services" style={{height: "10rem"}}>
            <div className="container ">
              {/* <div className=""> */}
                <div className="d-flex align-items-center justify-content-center ">
                  <h1 className="" style={{textAlign: "center", margin: "auto", fontSize: "3rem"}}> Our Services </h1>
                {/* </div> */}
              </div>
            </div>
          </section>
        </div>
        <SectionBuz />
        <ServicesCard />
        <Footer/>
      </div>
    </>
  );
};

export default services;
