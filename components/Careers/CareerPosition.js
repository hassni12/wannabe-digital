import React from "react";
import CvSubmit from "./CvSubmit"
import Positions from "./Positions";
const CareerPosition = () => {
  return (
    <>
      <div className=" wrapper_background career_hero_page_vh pb-3">
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
                  <li><p className="p-0 m-0">Market competitive salary</p> </li>
                  <li><p className="p-0 m-0">Balanced work life</p></li>
                  <li><p className="p-0 m-0">Employee training program</p></li>
                  <li><p className="p-0 m-0">Paid time offs</p></li>
                  <li><p className="p-0 m-0">Healthy work environment</p></li>
                  <li><p className="p-0 m-0">Completely remote</p></li>
                </ul>
                
                
              </div>
              </div>
            <div className="col-lg-6 col-md-6 col-12  mt-5">

              <img
                src="./images/career_hero_section.png"
                className="img-fluid mt-5 h-100 "
                alt=""
              />
              {/* career_hero_section.png */}
            </div>
          </div>
         <Positions/>
        </section>
      </div>
    </>
  );
};
export default CareerPosition;
