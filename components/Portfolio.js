import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProfolioSlider from "./Slider/PorfolioSlider";
// import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";
import Image from "next/image"

import { Carousel } from "antd";
const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const Portfolio = () => {
  const renderSlides = () =>
    ["../images/portfolio1.png", "../images/portfolio2.png","../images/portfolio3.png", "../images/portfolio4.png","../images/portfolio5.png"].map((num) => (
      // eslint-disable-next-line react/jsx-key
      <div className="d-flex justify-content-center">
            <img  className="" style={{width: "25rem", height:"17rem"}}  src={`${num}`} alt="" />
          </div>
    ));
  return (
    <section
      className="backgound_color_Porfolio_section wrapper_background_portfolio"
      id="portfolio"
      style={{paddingTop: '3rem', paddingBottom: "10rem"}}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div
              className="title text-center mb-5 "
              style={{
              }}
            >
              <h1 className="">Portfolio/Recent Work</h1>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
            marginTop: '-2rem'
          }}
        >
          <img src="./images/portfolio1.png" alt="" style={{width: "25rem", height:"17rem"}}   />
          <img src="./images/portfolio2.png" alt="" style={{width: "25rem", height:"17rem"}}  />
          <img src="./images/portfolio3.png" alt="" style={{width: "25rem", height:"17rem"}}   />
        </Row>

        <div style={{ marginTop: "1rem", position: "relative" }}>
          <div style={{ height: ".8rem", position: "relative" }} className="">
            <Slider
              dots={false}
              slidesToShow={2}
              slidesToScroll={2}
              autoplay={true}
              autoplaySpeed={3000}
            >
                   {renderSlides()}

            </Slider>
          </div>
        </div>
        {/* </Row> */}
      </Container>
    </section>
  );
};

export default Portfolio;
