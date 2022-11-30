import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import logo from '../public/images/logo.png'
// conimport Service from './Service';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar
        bg="gold"
        expand="lg"
        className={`header navbar navbar-expand-lg ${
          sticky ? " sticky" : ""
        }  align-items-center`}
      >
        {/* <Container> */}
          <Navbar.Brand href="#home">
            <div className="container mx-5">
              <img
                src={"./images/logo.png"}
                className="img-fluid mt-3 "
                style={{ height:85 , width: 100 }}
                alt=""
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav menu-navbar-nav align-items-center mt-2 navbar_margin_right ">
              <Link href={"/"} className="nav-link nav-item">
                <button className="border-0" style={{padding: "6px", background: "none", fontWeight: "bold"}}>Home</button>
              </Link>
              <Link href={"/about"} className="nav-link nav-item">
                <button className="border-0" style={{padding: "6px", background: "none", fontWeight: "bold"}}>About Us</button>
              </Link>
              <Link href={"/services"} className="nav-link nav-item">
                <button className="border-0" style={{padding: "6px", background: "none", fontWeight: "bold"}}>Services</button>
              </Link>
              <Link href={"/blog"} className="nav-link nav-item">
                <button className="border-0" style={{padding: "6px", background: "none", fontWeight: "bold"}}>Blogs</button>
              </Link>
              <Link href={"/careers"} className="nav-link nav-item">
                <button className= "border-0" style={{padding: "6px", background: "none", fontWeight: "bold"}}>Careers</button>
              </Link>
              <Link href={"/contact"} className="nav-link nav-item">
                <button className= "border-0" style={{padding: "6px", background: "none", fontWeight: "bold"}}>Contact Us</button>
              </Link>
            
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
   
    </div>
  );
};

export default Header;
