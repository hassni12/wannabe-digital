import React from "react";
import Question from "./FaqQuestion/Questions";
const Faq = () => {
  return (
    <>
      <section className="dg-service2 pb120 pt0 blog_section" id="services">
        <div className="container ">
          <div className="row upset ">
            <div className="title text-center  faq_top_magin faq_section_size ">
              <h1> FAQ&rsquo;s</h1>
            </div>
            <Question />
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
