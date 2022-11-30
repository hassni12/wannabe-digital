/* eslint-disable @next/next/no-img-element */
import React from "react";

const TeamSection = () => {
  return (
    <>
      <section className="" id="">
        <div className="container" >
          <div className="row upset" >
            <div className="title text-center ">
              <h1 className=""> The Hive</h1>
              <p>
                Meet us, we call ourselves a hive; a fairly compact but
                efficient team. We take immense joy in having a solid output and
                a close-knit workforce.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="" style={{width: "99%"}}>
        <div className="  row  ">
          <div className="col-lg-6 col-md-6 col-12">
            <div></div>
            <img
              src="./../images/TeamSection.png"
              className="w-100 h-75  mt-5"
              alt=""
            />
          </div>
          {/* <div className="col-lg-1 col-md-1 col-12"></div> */}
          <div className="col-lg-6 col-md-6 col-12  text-center" style={{marginTop: "5.3rem"}}>
            <div className="main_container d-sm-flex align-items-center mt-5">
              <div className="team_image_container">
                <img
                  src="./../images/buzzcircle.png"
                  className="w-50 "
                  alt=""
                />
              </div>
              <div className="text-start">
                <h1>Sonia Zia</h1>
                <span>Digital marketing manager </span>
              </div>
            </div>

            <div className="divider my-3"></div>
            <div className="main_container d-sm-flex align-items-center mt-5">
              <div className="team_image_container">
                <img
                  src="./../images/buzzcircle.png"
                  className="w-50 "
                  alt=""
                />
              </div>
              <div className="text-start">
                <h1>Amna Farrukh</h1>
                <span>Business development manager </span>
              </div>
            </div>

            <div className="divider my-3"></div>
            <div className="main_container d-sm-flex align-items-center mt-5">
              <div className="team_image_container">
                <img
                  src="./../images/buzzcircle.png"
                  className="w-50 "
                  alt=""
                />
              </div>
              <div className="text-start">
                <h1>Amna Farrukh</h1>
                <span>Manager HR & Finance </span>
              </div>
            </div>

            <div className="divider my-3"></div>
            <div className="main_container d-sm-flex align-items-center mt-5">
              <div className="team_image_container">
                <img
                  src="./../images/buzzcircle.png"
                  className="w-50 "
                  alt=""
                />
              </div>
              <div className="text-start">
                <h1>Zille Huma</h1>
                <span>Website/App developer </span>
              </div>
            </div>

            <div className="divider my-3"></div>
            <div className="main_container d-sm-flex align-items-center mt-5">
              <div className="team_image_container">
                <img
                  src="./../images/buzzcircle.png"
                  className="w-50 "
                  alt=""
                />
              </div>
              <div className="text-start">
                <h1>Ahmad Iftikhar</h1>
                <span>Website/App developer </span>
              </div>
            </div>

            <div className="divider my-3"></div>
            <div className="main_container d-sm-flex align-items-center mt-5">
              <div className="team_image_container">
                <img
                  src="./../images/buzzcircle.png"
                  className="w-50 "
                  alt=""
                />
              </div>
              <div className="text-start">
                <h1>Samreen Fatima</h1>
                <span>Graphic designer (UI/UX) </span>
              </div>
            </div>

            <div className="divider my-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamSection;
