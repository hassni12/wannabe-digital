import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Feature from "./Feature";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="wrapper_background position-relative">
      <div className="specail_backgroud wrapper_background">
        <Header />
        <section className="section position-relative hero_section_vh">
          <Container>
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="pr-lg-5  animated fadeInLeft">
                  <h1 className="mb-4 hero_section_text_h1 ">
                    Bringing more buzz to your brand!
                  </h1>
                  <p className="text_color">
                    We aim to deliver digital tranformation through social media
                  </p>
                  <Link href="#" >
                 <button className="main_btn">  GET QUOTE NOW</button> 
                  </Link>
                </div>
              </Col>
              <Col lg={4}>
                <div className="mt-7 mt-lg-0 animated fadeInRight">
                  <img
                    src="/images/heroimage.png"
                    alt=""
                    className="img-fluid mx-auto  hero_image"
                    // style={{width: "11rem", height: "33rem"}}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <Feature />
    </div>
  );
};

export default Hero;
