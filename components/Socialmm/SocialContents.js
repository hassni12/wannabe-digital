import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import BuzCircleForAboutUsSection from "../BuzCircleForAboutUsSection";
import SocialSection from "./SocialSection";
const SocialContents = (props) => {
  return (
    <>
      <div className="position-relative">
        <div className="specail_backgroud">
          <Header />
          <section
            className="blog_section "
            id="services"
            style={{ height: "10rem" }}
          >
            <div className="container ">
              <div className="d-flex align-items-center justify-content-center ">
                <h1
                  className=""
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "3rem",
                  }}
                >
                  {props.title}
                </h1>
              </div>
            </div>
          </section>
        </div>
        <BuzCircleForAboutUsSection />
        <div className=" wrapper_background seo_hero_main_page_vh pb-3">
          <SocialSection
            image="./images/Seosection/Rectangle 402 (2).png"
            H1="Social Media Marketing (SMM)
            "
            P1="Social media might appear time-consuming and chaotic. However, social media has the ability to produce actual followers who make purchases as well as brand ambassadors that promote your brand.
            "
            P11="Are you also finding it difficult to consistently and efficiently maintain your social media accounts? We have just what you need to start your buzzing around! We ‘Wannabee’ there with you to work together to identify your target audience, craft your story, and share it around the globe."
            H2="Proficient SMM management
            "
            P2="We have a committed group of skilled professionals with appropriate experience in social media marketing. We not only deliver a set of pocket-friendly marketing services in time, we also concentrate on what matters most to your company and also assist you in choosing how to spend your marketing budget.
            "
            H3="Social media audit and boosting
            "
            P3=" Putting a plan into action can help you maximise your outcomes while increasing brand awareness and growth. We work with you to create engaging graphics and creative messages conveyed directly to your target audience via relevant demographics. Our social media marketing services can enhance your sales, followers, and website traffic altogether."
            H4="SMM in action
            "
            P4="
"
            bullets={[
             " Calendars of unique monthly content",
             " Publishing when audiences are most likely to read",
              "Responding promptly",
              "Promote after the fact to reach more people",
              "Post promotion to reach more people",
              "Performance reports for each month"
            ]}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};
export default SocialContents;
