import React from "react";
import Header from "../components/Header";
import SectionBuz from "../components/SectionBuzCircle";
import RecentPorfolioImageSection from "../components/RecentPorfolio/RecentPorfolioImageSection";
import Footer from "../components/Footer";
const portfolio = () => {
  return (
    <>
      
      <div className="position-relative">
        <div className="specail_backgroud">
          <Header />
          <section className=" blog_section" id="services">
            <div className="container ">
              <div className="row upset">
                <div className="title text-center faq_top_magin faq_section_size ">
                  <h1 className="text-bold">Recent Portfolio</h1>
                </div>
              </div>
            </div>
          </section>
        </div>

        <SectionBuz />
        <RecentPorfolioImageSection />
        <Footer />
      </div>
    </>
  );
};
export default portfolio;
