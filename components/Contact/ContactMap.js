import React from "react";
import MapApi from './MapApi'
const ContactMap = () => {
  return (
    <section className=" blog_section" id="services">
      <div className="container ">
        <div className="row mt-5 ">
          <div className="d-flex align-items-center justify-content-center ">
            {" "}
            <img
              src="./images/Group 374.png"
              className="img-fluid mb-3 "
              alt=""
            />
            <p>May St, Exeter EX4 6LL, United Kingdom</p>
          </div>

          <p className="d-flex align-items-center justify-content-center ">
            Despite having its hive (headquarters) in Exeter, Wannabee Digital
            has operations all around the world.
          </p>
          {/* </div> */}
          <h1 className="text-center"><MapApi/></h1>
        </div>
      </div>
    </section>
  );
};
export default ContactMap;
