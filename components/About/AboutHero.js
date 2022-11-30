/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import { Container, Row } from "reactstrap";
// Image
const AboutHero = () => {
  return (
    <>
      <div class="container text-center " style={{ paddingTop: "30rem" }}>
        <div class="row justify-content-md-center"></div>
        {/* <Row className="w-full flex items-center justify-center gap-5"> */}
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-9 col-md-5">
            <p
              className=" text-start   "
              style={{  fontWeight: "900" }}
            >
              We are a group of enthusiastic digital specialists who love
              creating brands that turn heads. Our staff has experience in all
              elements of digital marketing.
            </p>
            <p
              className=" text-start mt-3"
              style={{ maxWidth: "60rem", fontWeight: "900" }}
            >
              Since our establishment in 2020, we have helped our clients
              transition to the new digital era. We put all our effort into each
              project to ensure your absolute satisfaction.
            </p>
       {/* <div className="bg"></div> */}
            <div  >
              <img
                src="./../images/Mask group.png"
                className="img-fluid text-start mt-5 "
          
                alt=""
              />
            </div>
          </div>
        </div>
   
      </div>
    
    </>
  );
};

export default AboutHero;
