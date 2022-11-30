import React from "react";
import CvSubmit from "./CvSubmit";
const CareerHeroSection = () => {
  return (
    <>
      <div className=" wrapper_background career_hero_main_page_vh pb-3">
        <section className="container">
          <div className="row upset">
            <div className="col-lg-6 col-md-6 col-12 margin_top_career_section">
              <h1 className="text-start fw-bold  mb-3 ">
                Ready for a change?{" "}
              </h1>
              <p className="text-start ">
                Wannabee is an ever-growing hive, and we are always looking for
                brilliant people to join our team. We want to hear from you if
                you have a strong passion for digital marketing and want to join
                a thriving team of professionals.
              </p>
              <div>
                <h1>Wannabee Perks</h1>
              </div>
              <div>
                <ul>
                  <li>Market competitive salary</li>
                  <li>Balanced work life</li>
                  <li>Employee training program</li>
                  <li>Paid time offs</li>
                  <li>Healthy work environment</li>
                  <li>Completely remote</li>
                </ul>
                
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12  mt-5">
              <img
                src="./images/career_hero_section.png"
                className="img-fluid mt-5 "
                alt=""
              />
              {/* career_hero_section.png */}
            </div>
          </div>
          <div className="row upset">
          <div className="col-lg-12 col-md-6 col-12 mx-auto"style={{marginTop:"10rem"}}>
            <p className="text-center " >
            Currently no job Avaliable 
            </p>
          </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CareerHeroSection;
