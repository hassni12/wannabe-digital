import React from "react";

import SectionBuz from "../components/SectionBuzCircle";
import Header from "./../components/Header";
import ServicesCard from "../components/ServicesPagesCard/ServicesPagesCard";
import ServiceScroller from "../components/ServiceScroll/ServiceScroller";
// import { Footer } from "antd/es/layout/layout";
import BlogPagePosts from "../components/BlogPageData/BlogPagePosts";
import Footer from "../components/Footer";
const Blog = () => {
  return (
    <>
      <div className="position-relative">
        <div className="specail_backgroud">
          <Header />
          <section className=" blog_section" id="services" style={{height: "10rem"}}>
            <div className=" ">
              <div className="d-flex align-items-center justify-content-center">
                {/* <div className="title text-center faq_top_magin faq_section_size "> */}
                  <h1 className="" style={{fontSize: "4rem"}}> Blogs </h1>
                {/* </div> */}
              </div>
            </div>
          </section>
        </div>
        <SectionBuz />
        <BlogPagePosts pagination={false} search={true} />
      </div>
      <ServiceScroller />
      <BlogPagePosts pagination={true} search={false} />
      
      <Footer />
    </>
  );
};

export default Blog;
