/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { Container, Row, Col } from "reactstrap";

const BuzCircleForAboutUsSection = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="bg-white hero_middle rounded-circle">
          <img src="./images/wot.png" className="img-fluid" alt="" />
        </div>
        <section className="buz_about_class_vh">
          <div className="wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-lg-0 "></div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default BuzCircleForAboutUsSection;
