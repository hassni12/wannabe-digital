/* eslint-disable @next/next/no-img-element */
import React from "react";

const Values = () => {
  return (
    <>
      <section className=" blog_section" id="services">
        <div className="container ">
          <div className="row upset">
            <div className="title text-center blog_top_margin ">
              <h1 className=" "> Our Values</h1>
              {/* <p >Meet us, we call ourselves a hive; a fairly compact but efficient team. 
We take immense joy in having a solid output and a close-knit workforce.
</p> */}
            </div>
            <div className="container text-start">
              {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
              <div className="row">
                <div className="col-lg-12 col-md-6 col-12 ">
                  <h1>Ethical</h1>
                  <p>
                    We are 100% sustainable, dealing in paperless and
                    eco-friendly working methods.We intend to grow with you
                    along and save our planet on the way.
                  </p>
                </div>

                <div className="row align-items-center ">
                  <div className="col-lg-6 col-md-6 col-12">
                    .
                    <img
                      src="./../images/values.png"
                      className="w-100  mt-5"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-1 col-md-1 col-12"></div>
                  <div className="col-lg-5 col-md-6 col-12  mt-5">
                    <h1>Reliable</h1>
                    <p>
                      We ensure our clients receive the best quality services
                      and powerfuloutcomes in time without compromising on the
                      quality.
                    </p>
                    <h1 className="">Best practices</h1>
                    <p>
                      We apply best practices to all services offered, ensuring
                      that each client receives consistent high-quality service
                      from start to end.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-12 ">
                    <h1>Result focused</h1>
                    <p>
                      We grow with you, and that is why we focus on your Return
                      On Investment (ROI) as our top priority by empowering your
                      business with real results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Values;
