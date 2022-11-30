import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionBuz from "./SectionBuzCircle";

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) => (
        <Row
          key={key}
          className={
            feature.id === 1 ? "align-items-center" : "align-items-center mt-5"
          }
        >
          <Col md={5}>
            <div>
              <img
                src={feature.img}
                alt=""
                className="img-fluid d-block mx-auto imge_style_size"
              />
            </div>
          </Col>
          <Col md={{ size: 6, offset: 1 }}>
            <div className="mt-5 mt-sm-0 mb-4">
              <div className="my-4">
                <i className={feature.icon}></i>
              </div>
              <h5 className="mb-4 pt-5 text_style_about_us">{feature.title}</h5>
              <p className="mb-3 p_text_style">{feature.desc}</p>
              {/* <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a> */}
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

const Feature = () => {
  const features = [
    {
      id: 1,
      img: "./images/_Downloader 1.png  ",
      title: "About Us",
      desc: "We are a group of enthusiastic digital specialists who love creating brands that turn heads. Our staff has experience in all elements of digital marketing. Since our establishment in 2020, we have helped our clients transition to the new digital era. We put all our effort into each project to ensure your absolute satisfaction.",
      link: "/",
    },
  ];

  return (
    <>
      <div style={{ position: "relative", paddingBottom: "8rem" }} >
        {/* <div
          className="bg-white hero_middle d-flex align-items-center justify-content-center"
          style={{
            padding: "1rem",
            borderRadius: "50%",
            width: "9rem",
            height: "9rem",
          }}
        >
          <img
            src="./images/wot.png"
            className="img-fluid rounded-circle"
            alt=""
          />
        </div> */}
        <SectionBuz />
        <section className="about_section_vh" style={{marginTop: "-5em"}}>
          <div className="wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-lg-0 ">
                  <div className="border-0">
                    <img
                      src="./images/_Downloader 1.png"
                      alt=""
                      className="img-fluid about_section_img"
                    />
                  </div>
                </div>
                <div className="col-lg-6  col-md-12 margin_top_class ">
                  <h1 className="mt-5">About Us</h1>
                  <p className="">
                    We are a group of enthusiastic digital specialists who love
                    creating brands that turn heads. Our staff has experience in
                    all elements of digital marketing.
                  </p>
                  <p className="">
                    Since our establishment in 2020, we have helped our clients
                    transition to the new digital era. We put all our effort
                    into each project to ensure your absolute satisfaction.
                  </p>
                  <Link href={"/about"}><button className="" style={{fontWeight: "bold", background: "none", border: "none"}} >See More</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <img
          src="./images/Rectangle 286.png"
          className="img-fluid border_style"
          alt=""
        />
      </div>
    </>
  );
};

export default Feature;
