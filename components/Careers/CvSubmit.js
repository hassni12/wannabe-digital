import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const CvSubmit = () => {
  const [value, setValue] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <div className="submited_application">
      <div className=" wrapper_background career_position_application_hero_main_page_vh  pb-3">
        <section className="container">
          <div className="row upset">
            <div className="col-lg-12 col-md-6  col-12 margin_top_career_section text-center  ">
           
              <h2 className="p-0 m-0">Submit Your Application</h2>

              <p className="mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>

            <div className="col-lg-8 col-md-6 col-12 text-center mx-auto mt-5">
              {/* <section className="container mt-5 "> */}
              <form onSubmit={onSubmitHandler}>
                {" "}
                <div className="row g-3  mb-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <input
                      type="text"
                      className="form-control border border-dark border-1 p-2"
                      placeholder="First Name*"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <input
                      type="text"
                      className="form-control border border-dark border-1 p-2"
                      placeholder="Last Name*"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 mt-4 ">
                    <PhoneInput className="border border-dark border-1 rounded-2"
                      country={"gb"}
                      inputStyle={{ width: "100%", height: "2.4rem" }}
                      placeholder="Enter phone number"
                      value={value}
                      onChange={(e) => setValue(e)}
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 mt-4 ">
                    <input
                      type="email"
                      className="form-control border border-dark border-1  p-2"
                      placeholder="Email*"
                    />
                  </div>

                  <div className="col-lg-12 col-md-6 col-12 mt-4  ">
                    <textarea
                      className="form-control border border-dark border-1 "
                      placeholder="Message*"
                      style={{ height: "10rem" }}
                    ></textarea>
                  </div>
                  <div className="col-lg-12 col-md-6 col-12 ">
                    <div className="text-center border border-dark border-1 bg-light p-5 mt-3">
                      <div className="dropzone">
                        <img
                          src="./images/Vector.png"
                          className="img-fluid upload-icon "
                        />
                        <input type="file" className="upload-input" />
                      </div>

                      <small className="text-secondary">Cv Upload*</small>
                    </div>
                    <div className="col-lg-12 col-md-6 col-12 text-center mt-5">
                      <input
                        type="button"
                        value="Submit"
                        className="btn Submit_btu px-4 py-2"
                        style={{ borderRadius: "0" }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};
export default CvSubmit;
