import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {
  return (
    <section className="section" id="about">
      <Container>

        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="mt-5 mb-5 font_service">Our Services </h3>
              {/* <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p> */}
            </div>
          </Col>
        </Row>
        <div class="container mt-2">
 
  <div class="row ">
    <div class="col-md-3 col-sm-6 ">
      <div class="card card-block section_color">
      <h4 class="card-title text-right"><i class="material-icons">settings</i></h4>
    <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset"/>
        <h5 class="card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
      <h4 class="card-title text-right"><i class="material-icons">settings</i></h4>
    <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web .</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
      <h4 class="card-title text-right"><i class="material-icons">settings</i></h4>
    <img src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
      <h4 class="card-title text-right"><i class="material-icons">settings</i></h4>
    <img src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>    
  </div>
  
</div>

      </Container>
    </section>
  );
}

export default About;