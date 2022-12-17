import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import BuzCircleForAboutUsSection from "../BuzCircleForAboutUsSection";
import SeoSection from "./SeoSection";
export const SeoContents = (props) => {
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
          <SeoSection
            image="./images/Seosection/Rectangle 402.png"
            H1="Search Engine Optimization (SEO)
            "
            P1="SEO is an effort, not magic! Google does not pick at random which websites appear first in the search results. Rankings are modified by the algorithm based on a number of variables. Each of those variables is optimised for our SEO campaigns to illustrate to Google that your website provides the information it seeks.
            "
            H2="The SEO process is not fully automated.
            "
            P2="Although SEO depends on technology to function, it has an impact on actual people who work in actual businesses. We have actual people working on your campaign at every level for this reason.
            "
            H3="SEO is a must
            "
            P3="  If you want to draw clients, having a website for your company is now a requirement. This implies that having SEO for your website is also a must. But because of our distinct scalable strategy, we can offer something for any organisation at every price bracket."
            H4="SEO in action

            "
            P4="Following are the steps we follow to work for SEO to get in action and help your business start buzzing online:
"
            bullets={[
              "Setup an initial campaign",
              "Optimize keywords",
              "Website optimization",
              "Development of a business profile",
              "Portfolio development with links",
              "Unique content creation",
              "Ongoing SEO consultation",
              "Reporting on services and performance" 
            ]}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};
