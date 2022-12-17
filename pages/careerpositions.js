import React from "react";
import Header from "./../components/Header";
import BuzCircleForAboutUsSection from "./../components/BuzCircleForAboutUsSection";
import CareerPosition from "./../components/Careers/CareerPosition";
import Positions from "./../components/Careers/Positions"
import Footer from "./../components/Footer";
const Careers = () => {
  return (
    <div>
      <div className="position-relative ">
        <div className="specail_backgroud">
          <Header />
          <section className=" blog_section" id="services"style={{height: "12rem"}}>
            <div className="container ">
                <div className="d-flex align-items-center justify-content-center">
                  <h1 className="" style={{fontSize: "4rem"}}> Careers </h1>
              </div>
            </div>
          </section>
        </div>
        <BuzCircleForAboutUsSection />
        
      </div>
      <CareerPosition />

      <Footer />
    </div>
  );
};
export default Careers;
