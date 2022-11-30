import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";

const BlogDetailsSlider = () => {
  const renderSlides = () =>
    [
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
      "../images/blogDetails.png",
    ].map((num) => (
      // eslint-disable-next-line react/jsx-key
      <div className="d-flex flex-column">
        <Link href={"/blogdetails"}>
          <div>
            <img className="d-block" src={`${num}`} alt="" />
          </div>
        </Link>
        <Link href={"/blogdetails"}>
          <h2>Lorem ipsum dolor, sit amet consectetur </h2>
        </Link>
        <small>November 25 2020</small>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, soluta
          voluptate delectus dolorem dolorum expedita
        </p>
      </div>
    ));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    centerPadding: "6px",

    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container blogdetails_scroller_background">
      {/* <h2> Multiple items </h2> */}
      <Slider {...settings}>{renderSlides()}</Slider>
    </section>
  );
};

export default BlogDetailsSlider;
