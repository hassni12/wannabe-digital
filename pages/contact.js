import React from "react";

import SectionBuz from "../components/SectionBuzCircle";
import Header from "./../components/Header";
import ServicesCard from "../components/ServicesPagesCard/ServicesPagesCard";
import BuzCircleForAboutUsSection from "../components/BuzCircleForAboutUsSection";
import SubmitForm from "../components/Contact/SubmitForm";
import ContactInfo from "../components/Contact//ContactInfo";
import Footer from "../components/Footer";
import ContactMap from "../components/Contact/ContactMap";
const services = () => {
  return (
    <>
      <div className="position-relative ">
        <div className="specail_backgroud">
          <Header />
          <section className=" blog_section" id="services">
            <div className="container ">
              <div className="row upset">
                <div className="title text-center faq_top_magin faq_section_size ">
                  <h1 className=""> Contact Us </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
        <BuzCircleForAboutUsSection />
        <div className="wrapper_background"></div>
        <div className=" wrapper_background contact_page_vh pb-3">
          <section className="container">
            <div className="row upset">
              <div className="col-lg-12 col-md-6 col-12">
                <div className="card_container mx-auto">
                  <h1 className="text-center fw-bold about_us_page_top_margin mb-3  ">
                    Get in touch with us
                  </h1>
                  <p className="text-center fw-bold">
                    Send us a message using this form, and we will respond to
                    you as soon as we can. You can also reach us using the
                    details provided below for our online platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <SubmitForm />
        </div>
        <ContactInfo />
        <ContactMap />
        <Footer />
      </div>
    </>
  );
};

export default services;
