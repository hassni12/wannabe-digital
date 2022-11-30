import Link from "next/link";
import React from "react";

const BlogPostCard = (props) => {
  // props.map((s)=>console.log(s) )
  return (
    <>
      <section className="dg-service2 pb120 pt0 blog_section" id="services" style={{borderRadius: "0", paddingBottom: "1.2rem"}}>
        <div className="container ">
          <div className="row upset ">
            <div
              class="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div class="s-block up-hor pt20">
                <div class="nn-card-set">
                  {/* <div class="card-icon"><img src="images/icons/mobile-rafiki.svg" alt="service" class="img-fluid" /></div> */}
                  <h2 >{props.title}</h2>
                  <p className="">{props.underImage[0]}</p>
                  <Link href="" className="d-block text_bold">
                    {props.readMore}
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor pt20" >
                <div className="nn-card-set background_color_blog_post px-3 image_round custom_margin" style={{borderRadius: "0px", paddingBottom: "1.2rem"}}>
                  <div className="card-icon text-center py-3 position-relative">
                    <p
                      className="d-inline position-absolute bg-danger  text-white py-1 px-5 fs-6"
                      style={{
                        top: "30px",
                        left: "-15px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      Feature
                    </p>

                    <img
                      src="images/blog_post.png"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  {/* <h4>Product Design</h4> */}
                  <p className="" style={{maxWidth: "20rem", maxHeight: "2.7rem", fontSize: ".9rem", overflow:"hidden"}}>{props.underImage[1]}</p>
                  <Link href={""} className="d-block text-end text-light">
                    {props.readMore}
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor pt20">
                <div className="nn-card-set background_color_blog_post px-3 image_round"
              style={{borderRadius: "0px", paddingBottom: "1.2rem"}}
                
                >
                  <div className="card-icon text-center py-3 position-relative"  
                  >
                    <p
                      className="d-inline position-absolute bg-danger  text-white py-1 px-5 fs-6"
                      style={{
                        top: "30px",
                        left: "-15px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      Feature
                    </p>

                    <img
                      src="images/blog_post.png"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  {/* <h4>Product Design</h4> */}
                  <p style={{maxWidth: "20rem", maxHeight: "2.7rem", fontSize: ".9rem", overflow:"hidden"}}>{props.underImage[0]}</p>
                  <Link href={""} className="d-block text-end text-light">
                    {props.readMore}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor pt20">
                <div className="nn-card-set background_color_blog_post px-3 image_round"
              style={{borderRadius: "0px", paddingBottom: "1.2rem"}}
                
                >
                  <div className="card-icon text-center py-3 position-relative">
                    <p
                      className="d-inline position-absolute bg-danger  text-white py-1 px-5 fs-6"
                      style={{
                        top: "30px",
                        left: "-15px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      Feature
                    </p>

                    <img
                      src="images/blog_post.png"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  {/* <h4>Product Design</h4> */}
                  <p style={{maxWidth: "20rem", maxHeight: "2.7rem", fontSize: ".9rem", overflow:"hidden"}}>{props.underImage[0]}</p>
                  <Link href={""} className="d-block text-end text-light">
                    {props.readMore}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor pt20">
                <div className="nn-card-set background_color_blog_post px-3 image_round"
              style={{borderRadius: "0px", paddingBottom: "1.2rem"}}
                
                >
                  <div className="card-icon text-center py-3  position-relative ">
                    <p
                      className="d-inline position-absolute bg-danger  text-white py-1 px-5 fs-6"
                      style={{
                        top: "30px",
                        left: "-15px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      Feature
                    </p>
                    <img
                      src="images/blog_post.png"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  {/* <h4>Product Design</h4> */}
                  <p style={{maxWidth: "20rem", maxHeight: "2.7rem", fontSize: ".9rem", overflow:"hidden"}}>{props.underImage[0]}</p>
                  <Link href={""} className="d-block text-end text-light">
                    {props.readMore}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor pt20"
              
              >
                <div className="nn-card-set background_color_blog_post px-3 image_round"
              style={{borderRadius: "0px", paddingBottom: "1.2rem"}}
                
                >
                  <div className="card-icon text-center py-3 position-relative">
                    <p
                      className="d-inline position-absolute bg-danger  text-white py-1 px-5 fs-6"
                      style={{
                        top: "30px",
                        left: "-15px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      Feature
                    </p>

                    <img
                      src="images/blog_post.png"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  {/* <h4>Product Design</h4> */}
                  <p style={{maxWidth: "20rem", maxHeight: "2.7rem", fontSize: ".9rem", overflow:"hidden"}}>{props.underImage[0]}</p>
                  <Link href={""} className="d-block text-end text-light">
                    {props.readMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogPostCard;
