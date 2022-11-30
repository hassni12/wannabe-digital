import React from "react";
import Header from "./../components/Header";
import SectionBuz from "../components/SectionBuzCircle";
import DetailsBlogPosts from "../components/BlogPageData/DetailsBlogPost";
import BlogDetailsSlider from "../components/BlogPageData/BlogDetailsSlider";
import Footer from "../components/Footer";
const blogdetails = () => {
  return (
    <>
      <div className="position-relative">
        <div className="specail_backgroud">
          <Header />
          <section className=" blog_section" style={{height: "10rem"}} id="services">
            <div className="container ">
              <div className="d-flex align-items-center justify-content-center">
                {/* <div className="title text-center faq_top_magin faq_section_size "> */}
                  <h1 className="" style={{textAlign: "center", margin: "auto", fontSize: "4rem"}}> Blogs </h1>
                {/* </div> */}
              </div>
            </div>
          </section>
        </div>
        <SectionBuz />
        <DetailsBlogPosts />
        <BlogDetailsSlider></BlogDetailsSlider>
        <Footer />
      </div>
    </>
  );
};
export default blogdetails;
