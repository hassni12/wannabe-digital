import React, { Component } from "react";
import Slider from "react-slick";

const ProfolioSlider =()=> {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div  className="mx-3" >
          <img src="./images/portfolio2.png" alt="" />
        </div>
          <div   className="mx-3" >
          <img src="./images/portfolio3.png" alt="" />  
          </div>
        
        </Slider>
      </div>
    );
  }
export default ProfolioSlider