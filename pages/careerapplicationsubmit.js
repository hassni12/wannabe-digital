import React from "react";
import Header from "./../components/Header";
import BuzCircleForAboutUsSection from "./../components/BuzCircleForAboutUsSection";
// import ApplyPositionSection from '../components/Careers/ApplyPositionSection'
import CvSubmit from "./../components/Careers/CvSubmit";
import Footer from "./../components/Footer";
const applyposition = () => {
  return (
    <>
      <div className="position-relative ">
        <div className="specail_backgroud ">
          <Header />
          <section
            className=" blog_section"
            id="services"
            style={{ height: "12rem" }}
          >
            <div className="container ">
              <div className="d-flex align-items-center justify-content-center mt-1">
                <h1 className="" style={{ fontSize: "4rem" }}>
                  {" "}
                  Content Marketing Executive
                </h1>
              </div>
            </div>
          </section>
        </div>
        <BuzCircleForAboutUsSection />
      </div>
      <CvSubmit />
      <Footer />
    </>
  );
};
export default applyposition;
