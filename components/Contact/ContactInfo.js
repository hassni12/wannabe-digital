/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaMap,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
//   Link
const ContactInfo = () => {
  return (
    <>
      <section className="container contact_info_vh">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-12">
            <div className=" mx-auto">
              <h1 className="text-center fw-bold about_us_page_top_margin   mb-5   ">
                Give us a call and speak to our agent anytime around the clock{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="container  blog_wrapper">
          <div className="row border border-dark border-3 rounded-4">
            <div className="col-lg-5 col-md-12">
              <div className="card_container">
                <div className="text_container">
                  <img
                    src="./images/contact_us_avatar.png"
                    className="img-fluid mt-3"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1">
              <div className="divider mx-auto mt-5 h-75 " style={{width:"10px"}} ></div>
            </div>

            <div className="col-lg-5 col-md-12 mt-5">
              <div className="d-flex align-items-center ">
                {" "}
                <img
                  src="./images/Group 373.png"
                  className="img-fluid mb-3"
                  alt=""
                />
                <p className="mx-3">01392 327132</p>
              </div>
              <div className="d-flex align-items-center ">
                {" "}
                <img
                  src="./images/Group 373 (1).png"
                  className="img-fluid mb-3     "
                  alt=""
                />
                <p className="mx-3">wannabeedigital@gmail.com</p>
              </div>
              <div className="d-flex align-items-center ">
                {" "}
                <img
                  src="./images/Group 372.png"
                  className="img-fluid mb-3"
                  alt=""
                />
                <p className="mx-3">www.wannabeedigital.com</p>
              </div>

              <Row
                style={{
                  background: "white",
                  paddingLeft: "1rem",
                  paddingRight: "5rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                <Col>
                  <Col>
                    <p className="font_weight_you_Can_find">You can find us on:</p>
                  </Col>
                  <Col className="d-flex gap-2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #FFBF2C",
                        padding: "1px",
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                      }}
                    >
                      <Link href={""}>
                        <FaFacebookF />
                      </Link>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #FFBF2C",
                        padding: "1px",
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                      }}
                    >
                      <Link href={""}>
                        <FaInstagram />
                      </Link>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #FFBF2C",
                        padding: "1px",
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                      }}
                    >
                      <Link href={""}>
                        <FaYoutube />
                      </Link>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #FFBF2C",
                        padding: "1px",
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                      }}
                    >
                      <Link href={""}>
                        <FaTwitter />
                      </Link>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #FFBF2C",
                        padding: "1px",
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                      }}
                    >
                      <Link href={""}>
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </Col>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactInfo;
