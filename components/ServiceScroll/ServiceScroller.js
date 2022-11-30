import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
const ServiceScroller = () => {
  const renderSlides = () =>
    [
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
    ].map((num) => (
      // eslint-disable-next-line react/jsx-key
      <div className="d-flex justify-content-center">
        <img className="" src={`${num}`} alt="" />
      </div>
    ));
  return (
    <section
      className="service_scroller_background d-flex align-items-center justify-content-center "
      id="portfolio"
      style={{paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <Container>
        {/* <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div
              className="title text-center mb-5 "
              style={{
                marginTop: "4rem",
              }}
            >
              <h1 className="">Portfolio/Recent Work</h1>
            </div>
          </Col>
        </Row> */}

        <div>
          <div className="">
            <Slider
              dots={true}
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
export default ServiceScroller;
