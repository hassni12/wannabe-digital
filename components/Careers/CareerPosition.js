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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{" "}
              </p>
              <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
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
