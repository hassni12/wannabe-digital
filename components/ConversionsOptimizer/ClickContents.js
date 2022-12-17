import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import BuzCircleForAboutUsSection from "../BuzCircleForAboutUsSection";
import ClickSection from "./ClickSection";
 const ClickContents = (props) => {
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
          <ClickSection
            image="./images/Seosection/Rectangle 402 (1).png"
            H1="Pay Per Click management
            "
            P1="Management is an understatement, we transform PPC accounts into dependable sources of growth and revenue. Reach your targets more quickly with our top-notch PPC management team. There is no outsourcing or middleman. You will collaborate directly with a group of internal PPC experts who will improve your account daily.

            "
            H2="Expert PPC management
            "
            P2="Our methodical PPC strategy is straightforward. An environment tightly managed and supportive of learning and predictable progress is produced through careful management, data intelligence, and enterprise-level expertise. By using demographic targeting, keyword intent, and other techniques, we are committed to ensuring a high percentage of qualified clicks in order to improve performance continuously.

            "
            H3="Diligence and commitment
            "
            P3="  Our team gives you the attention you deserve. We do not flinch from
            working extended hours online, and we&apos;ll offer thoughtful,
            timely comments and recommendations on the course of action on a
            frequent basis. For as long as we are managing your account, we
            maintain an ongoing, open dialogue."
            H4="PPC in action

            "
            P4="We aim to take your campaigns to the next level by following our result-focused approach through:

"
            bullets={[
              "Thorough data analysis",
              "Extensive competitor research",
              " Trendspotting",
              "Customised, actionable reporting",
            ]}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};
export default ClickContents