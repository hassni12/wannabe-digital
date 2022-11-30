// import { Modal } from "bootstrap";
import React, { useState } from "react";
import GoogleCaptcaha from "../Recaptcha/GoogleCaptcaha";
import SectionBuz from "../SectionBuzCircle";
import Modal1 from "./Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SubmitForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState();
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="container bg-white rounded-4 mt-4 mb-3">
      <div className="row upset">
        <div className="col-lg-8 col-md-6 col-12">
          <section className="container mt-5 ">
            <form onSubmit={onSubmitHandler}>
              {" "}
              <div className="row g-3  mb-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-lg-12 col-md-6 col-12 mt-4 ">
                  <input
                    type="email"
                    className="form-control p-2"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-lg-12 col-md-6 col-12 mt-4">
                  <select id="disabledSelect" class="form-select" placeholder="Interested In">
                    <option className="" hidden selected disabled style={{color: "gray", opacity: "70"}}>Intersted In </option>
                    <option className="color_dropDown ">
                      Digital marketing
                    </option>
                    <option className="color_dropDown">
                      Graphic designing
                    </option>
                    <option className="color_dropDown">Web develeopment</option>
                    <option className="color_dropDown">App development</option>
                  </select>
                </div>
                {/* <div className="col-lg-12 col-md-6 col-12 mt-4 "> */}
                {/* <input
                    type="text"
                 
                    className="form-control p-2"
                    placeholder="your Country"
                   
                  /> */}
                  <div>
                <PhoneInput
                  country={"gb"}
                  inputStyle={{width: "100%", height: "2.4rem"}}
                  placeholder="Enter phone number"
                  value={value}
                  onChange={(e) => setValue(e)}
                />
                </div>
                {/* </div> */}

                <div className="col-lg-12 col-md-6 col-12 mt-4 ">
                  <textarea
                    className="form-control"
                    placeholder="Please provide more details of services you are looking for"
                    //   id="floatingTextarea2"
                    style={{ height: "10rem" }}
                  ></textarea>
                </div>
                <div className="col-lg-12 col-md-6 col-12 mt-4 ">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12"></div>
                    <div className="col-lg-8 col-md-6 col-12 ">
                      <div className="d-flex align-items-center">
                        <GoogleCaptcaha />
                        <Modal1 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-4 p-0">
          <img
            src="./images/teamwork business people.png"
            className="img-fluid"
            alt=""
          />
          {/* <div className="col-lg-4 col-md-6 col-12">sadddd</div> */}
        </div>
      </div>
    </section>
  );
};
export default SubmitForm;
