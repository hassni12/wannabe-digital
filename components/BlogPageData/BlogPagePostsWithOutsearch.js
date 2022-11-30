import Link from "next/link";
import React from "react";
// Link
const BlogPagePostsWithOutsearch=() => {
  return (
    <>
      <div className="container  blog_wrapper">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12">
            <div className="card_container">
              <Link href="/blogdetails">
                <div className="image_container2">
                  <div className="image"></div>
                </div>
              </Link>

              <div className="text_container">
                <p className="fw-bold">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. In, commodi. consectetur
                  adipisicing elit. Nobis, illo.
                </p>
                <small className="text-muted">November 25 2020</small>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  atque voluptates labore reiciendis ex vel debit Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates
                  officia sequi asperiores explicabo obcaecati fugiat
                  reprehenderit illum non fugit veritatis! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quia totam architecto quam
                  sequi assumenda? Deleniti repellat voluptas cum porro placeat.
                  is consectetur nostrum ratione veniam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-1">
            <div className="divider mx-auto"></div>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="row">
              <div className="col-6">
                <div className="card_container">
                  <Link href="/blogdetails">
                    <div className="image_container">
                      <div className="image"></div>
                    </div>
                  </Link>

                  <div className="text_container">
                    <p className="fw-bold">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <small className="text-muted">November 25 2020</small>
                    <p>
                      Lorem ipatque voluptates labore reiciendis ex vel debitis
                      consectetur nostrum ratione veniam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card_container">
                <Link href='/blogdetails'>
                   <div className="image_container">
                            <div className="image"></div>
                        </div>
                   </Link>
                  <div className="text_container">
                    <p className="fw-bold">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <small className="text-muted">November 25 2020</small>
                    <p>
                      Lorem ipatque voluptates labore reiciendis ex vel debitis
                      consectetur nostrum ratione veniam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card_container">
                <Link href='/blogdetails'>
                   <div className="image_container">
                            <div className="image"></div>
                        </div>
                   </Link>
                  <div className="text_container">
                    <p className="fw-bold">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <small className="text-muted">November 25 2020</small>
                    <p>
                      Lorem ipatque voluptates labore reiciendis ex vel debitis
                      consectetur nostrum ratione veniam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card_container">
                <Link href='/blogdetails'>
                   <div className="image_container">
                            <div className="image"></div>
                        </div>
                   </Link>
                  <div className="text_container">
                    <p className="fw-bold">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <small className="text-muted">November 25 2020</small>
                    <p>
                      Lorem ipatque voluptates labore reiciendis ex vel debitis
                      consectetur nostrum ratione veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPagePostsWithOutsearch;
