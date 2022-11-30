import React from "react";
import AboutHero from "../components/About/AboutHero";
import WhatWeDo from "../components/About/WhatWeDo";
import Header from "../components/Header";
import BuzCircleForAboutUsSection from "../components/BuzCircleForAboutUsSection";
import Footer from "../components/Footer";
import TeamSection from "../components/About/TeamSection";
import Values from "../components/About/Values";
import SectionBuz from "../components/SectionBuzCircle";

const about = () => {
  return (
    <>
      <div className="position-relative">
        <div className="specail_backgroud">
          <Header />
          <section className=" blog_section" id="services">
            <div className="container ">
              <div className="row upset">
                <div className="title text-center blog_top_margin ">
                  <h1 className="mt-3 "> About Us</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        className="new_background_about_team_section position-relative layer pb-8"
        style={{ height: "120rem" }}
      >
        <div
          className="specail_backgoud"
          style={{ paddingBottom: "5rem", height: "100%" }}
        >
          <SectionBuz />

          <AboutHero />
        </div>
        <div className="wrapper_background">
          <WhatWeDo />
        </div>
        <img
          src="./../images/linedivblogsection.png"
          className="w-100 mt-5"
          style={{ margin: "15rem 0rem" }}
          alt=""
        />
        <TeamSection />
        <Values />
        <Footer></Footer>
      </div>
    </>
  );
};
export default about;
