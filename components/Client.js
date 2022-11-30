import React from "react";
import { Container, Row, Col } from "reactstrap";
import ClientCard from "./Clientreview/ClientCard";
import Slider from "react-slick";
const Client = () => {
  const renderSlides = () =>
    [
      "../images/portfolio1.png",
      "../images/portfolio2.png",
      "../images/portfolio3.png",
      "../images/portfolio4.png",
      "../images/portfolio5.png",
    ].map((num) => (
      // eslint-disable-next-line react/jsx-key
      <div className="d-flex justify-content-center">
        <ClientCard />
      </div>
    ));
  return (
    <section
      className="section backgound_color_Porfolio_client "
      id="portfolio"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center">
              <h1 className=""> Client reviews</h1>
            </div>
          </Col>
        </Row>

        <div>
          <div className="row mx-auto" style={{ marginTop: "5rem" }}>
            <Slider
              dots={false}
              slidesToShow={2}
              slidesToScroll={2}
              autoplay={true}
              autoplaySpeed={5000}
            >
              {renderSlides()}
            </Slider>
          </div>
        </div>
        <Row className="justify-content-center">
          <Col lg={12} md={8}>
            <div
              className="title text-center mt-5"
              style={{ marginTop: "5rem" }}
            >
              <h1 className=""> Our Team</h1>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, obcaecati perferendis! Modi sint illo ipsa, eaque natus
                aspernatur mollitia dolore corporis debitis minus! Odit ex iure
                deleniti, praesentium minus quaerat. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum, obcaecati perferendis!
                Modi sint illo ipsa, eaque natus aspernatur mollitia dolore
                corporis debitis minus! Odit ex iure deleniti, praesentium minus
                quaerat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Client;
