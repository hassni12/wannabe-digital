import React from "react";
import Header from "../components/Header";
import BuzCircleForAboutUsSection from "../components/BuzCircleForAboutUsSection";
import ApplyPositionSection from "../components/Careers/ApplyPositionSection";
import Footer from "../components/Footer";
const applyposition = () => {
  return (
    <div>
      <div className="position-relative ">
        <div className="specail_backgroud">
          <Header />
          <section
            className=" blog_section"
            id="services"
            style={{ height: "12rem" }}
          >
            <div className="container ">
              <div className="d-flex align-items-center justify-content-center">
                <h1 className="" style={{ fontSize: "4rem" }}>
                  {" "}
                  Careers{" "}
                </h1>
              </div>
            </div>
          </section>
        </div>
        <BuzCircleForAboutUsSection />
      </div>
      <ApplyPositionSection />
      <Footer />
    </div>
  );
};
export default applyposition;
