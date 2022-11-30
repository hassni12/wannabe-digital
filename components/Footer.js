import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
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
import FiPhone from "react-icons/fa"

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Useful links",
      child: [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about" },
        { title: "Services", link: "/services" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Blogs", link: "/blogs" },
        { title: "Careers", link: "/" },
      ],
    },
  ];

  return (
    <section
      className=""
      style={{
        background: "#FFBF2C",
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
        // paddingTop: "2rem",
        width: "100%",
        // paddingBottom: "5rem",
        boxSizing: "border-box",
        margin: "auto",
        marginTop: "5rem",
      }}
    >
      <div className=" footer_middle_style_logo">
          <img src="./images/wot.png" className="img-fluid" style={{height:"6rem"}}  alt="" />
          <img src="./images/wot.png" className="img-fluid"   alt="" />
          <img src="./images/wot.png" className="img-fluid" style={{height:"6rem"}}  height={20} alt="" />
        </div>
      
      <Row style={{ paddingLeft: "5rem", paddingRight: "5rem", width: "100%", margin: "auto" }}>
        <Col lg={4}>
          <div className="mb-4">
            {/* <p className="text-muted mt-4 mb-2">email@email.com</p>
                <h6 className="text-muted font-weight-normal">+99 1234-5678-9</h6> */}
            <Image src={"/images/logo.png"} width={130} height={100} />
            <p style={{ fontWeight: "bold", maxWidth: "15rem" }}>
              Bringing more buzz to your brand!
            </p>
          </div>
        </Col>
        <Col>
          <Row>
            {links.map((link, key) => (
              <Col key={key} md={4}>
                <h6 className="text-dark mb-3">{link.title}</h6>
                <ul className="list-unstyled company-sub-menu">
                  {link.child.map((fLink, key) => (
                    <li key={key}>
                      <Link href={fLink.link}>{fLink.title}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}

            <Col md={4}>
              <h6 className="text-dark">Contact us:</h6>
              <p
                className=""
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                {/* <FiPhone/> */}
                 01392 327132
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          background: "white",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          width: "100%",
          margin: "auto"
        }}
      >
        <Col>
          <Col>
            <p>You can find us on:</p>
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
        <Col>
          <div style={{display :"flex", alignItems: "center", justifyContent: "center",width: "fit-content", gap :"5px"}}>
            <FaMapMarkerAlt style={{fontSize: "1.4rem", marginTop: '-1.2rem'}}/>
            <p style={{ fontSize: "1.2rem" }} className="">
              May St, Exeter EX4 6LL, United Kingdom
            </p>
          </div>
          <div style={{display :"flex", alignItems: "center", justifyContent: "center",width: "fit-content", gap :"5px"}}>
          <FaRegEnvelope style={{fontSize: "1.4rem", marginTop: '-1.2rem'}}/>
            <p style={{ fontSize: "1.2rem" }}>wannabeedigital@gmail.com</p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 " style={{width: "100%", margin: "auto"}}>
       
          <div className="text-center">
            <p className="">© Copyright wannabeedigital 2022. All Right Reserved</p>
          </div>
      </Row>
    </section>
  );
};

export default Footer;
