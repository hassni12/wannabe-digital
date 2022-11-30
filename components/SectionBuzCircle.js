import React from "react";

const SectionBuz = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className="hero_middle d-flex align-items-center justify-content-center"
          style={{
            // padding: "1rem",
            // borderRadius: "50%",
            // width:"fit-content",
            // height: "fit-content",
            // background: "transparent"
            // position: "absolute",
            // top: "88%"
          }}
        >
          <img
            src="./images/Group 363.png"
            className="img-fluid rounded-circle"
            alt=""
            width={100}
            height={100}
            style={{marginTop: "1rem"}}
          />
        </div>
        <section className="buz_class_vh">
          <div className="wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-lg-0 "></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionBuz;
