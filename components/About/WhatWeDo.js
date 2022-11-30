import React from "react";
import { Container, Row } from "reactstrap";
import AboutCard from "../Cards/AboutCard";

const WhatWeDo = () => {
  return (
    <>
      <Container className="pt-20" style={{ paddingTop: "5rem" }}>
        <Row className="w-full flex items-center justify-center gap-5">
          <h1 className="text-center my-5">What We Do?</h1>
        </Row>
        <div className="row mx-auto ">
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/about_card_1.png"}
              title={"Search Engine Optimization (SEO)"}
              bullets={[
                "Website Design",
                "Landing Page Design",
                "Web Banners & Graphics",
                "UI & UX Design",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/about_card_2.png"}
              title={"Pay Per Click (PPC) Management"}
              bullets={[
                "Paid Search Ads",
                "Display Ads",
                "PPC Remarketing",
                "Social Advertising and Video ",
                "Advertising",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/about_card_3.png"}
              title={"Social Media Marketing (SMM)"}
              bullets={["  Social Media Management", "Brand Monitoring"]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/card4.png"}
              title={"Content Marketing"}
              bullets={[
                "Content Creation",
                "Blog Content Creation",
                "Infographics & Asset Design",
                " Case Studies & Website Content",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/card5.png"}
              title={"Web Development"}
              bullets={[
                " Front-end development",
                "Back-end development",
                "Full stack development",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/card6.png"}
              title={"Web Designing"}
              bullets={[
                "Website Design",
                "Landing Page Design",
                "Web Banners & Graphics",
                "UI & UX Design",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/card7.png"}
              title={"Email Marketing"}
              bullets={[
                "Managing email list",
                "Email marketing automation",
                "Email campaigns",
                "Tracking email performances",
                "Copywriting",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/card8.png"}
              title={"Conversion Optimization"}
              bullets={[
                "               Website analysis",
                "Gather feedback",
                "Identify sales record",
                "Conduct A/B tests",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/card9.png"}
              title={"App Development  "}
              bullets={[
                "Administrative Dashboard",
                "Application & Server Codebases",
               " High-Fidelity Designs",
               " Administrative Dashboard",
                "Play Store and App Store ",
               " Submission"
                
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <AboutCard
              img={"./images/aboutCardLogos/card10.png"}
              title={"App Designing"}
              bullets={[
                "User Testing",
               " User Flows And Prototypes",
                "Interface And Interactive Design",
               " Scalable Design Methods",
                
              ]}
            />
          </div>
        </div>

        <div></div>
      </Container>
    </>
  );
};

export default WhatWeDo;
