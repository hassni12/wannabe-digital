import React from "react";
import { Container, Row } from "reactstrap";

const AboutHero = () => {
  return (
    <Container fluid className="pt-20" style={{ paddingTop: "5rem" }}>
      <Row className="w-full flex items-center justify-center gap-5">
        <h1 className="text-center m-auto">About Us</h1>
        {/* <AboutHero /> */}
        <div className="flex flex-col gap-5">
          <p
            className="text-white text-center m-auto text-5xl"
            style={{ maxWidth: "43rem", fontWeight: "100" }}
          >
            We are a group of enthusiastic digital specialists who love creating
            brands that turn heads. Our staff has experience in all elements of
            digital marketing.
          </p>
          <p
            className="text-white text-center m-auto text-5xl"
            style={{ maxWidth: "42rem", fontWeight: "100" }}
          >
            Since our establishment in 2020, we have helped our clients
            transition to the new digital era. We put all our effort into each
            project to ensure your absolute satisfaction.
          </p>
        </div>
        {/* <div className="flex items-center justify-center bg-white rounded-circle absolute" style={{width: "5rem", height: "5rem",position: "absolute", top: "39.4rem", left: "40rem", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
              <img src="/images/heroimage.png"  alt="" className="hero_image text-center m-auto"/>
            </div> */}
        <div
          className="bg-white hero_middle d-flex align-items-center justify-content-center"
          style={{
            padding: "1rem",
            borderRadius: "50%",
            width: "9rem",
            height: "9rem",
            position: "absolute",
            top: "88%"
          }}
        >
          <img
            src="./images/heromiddle.png"
            className="img-fluid rounded-circle"
            alt=""
          />
        </div>
      </Row>
    </Container>
  );
};

export default AboutHero;
