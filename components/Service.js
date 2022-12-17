import React from "react";
  import { Container, Row, Col } from "reactstrap";
import ServicesCard from "./Cards/ServicesCard";

const Service = () => {
  // const services = [
  //   { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  //   { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  //   { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  //   { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  //   { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  //   { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  // ]

  return (
    <section className="section" id="" style={{paddingTop: "5rem"}}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5 ">
              <h1 className="">Our services</h1>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "2rem",
          }}
        >
          <ServicesCard
            title="DIGITAL MARKETING"
            bullets={[
              "Social Media Marketing",
              "Search Engine Optimization (SEO)",
              "Email Marketing",
              "Google Adwords",
              "Google Adsense",
              "Influencer Marketing",
              "Ecommerce Marketing",
              "Content Writing",
            ]}
            img={"./images/services_card1.png"}
          />
          <ServicesCard
            title="GRAPHIC DESIGNING"
            bullets={[
              "Logo Design Services",
              "Package Design",
              "Branding Kit",
              "Brochures Rack Cards & Booklets",
              "Business Cards",
              "Letterhead & Envelopes",
              "Posters, Banners And Signage",
              "Social Media Graphics & Digital",
            ]}
            img={"./images/services_card2.png"}
          />
          <ServicesCard
            title="WEB DEVELOPMENT"
            bullets={[
              "UI/UX Design",
              "Web Development",
              "Custom Development",
              "Wordpress Development",
              "E commerce Store Websites",
            ]}
            img={"./images/services_card3.png"}
          />
          <ServicesCard
            title="APP DEVELOPMENT"
            bullets={[
              "Android Apps",
              "IOS Apps",
              "Cross Platforms Apps",
              "Hybird Apps"
            ]}
            img={"./images/services_card4.png"}
          />
        </Row>
      </Container>
    </section>
  );
};

export default Service;
