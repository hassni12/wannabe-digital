import { Pagination } from "antd";
import Link from "next/link";
import React from "react";

const BlogPagePosts = ({ pagination, search }) => {
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <>
      <div className={`container  blog_wrapper ${search ? 'py-2' : 'py-5'}`}>
        <div className="search_container d-flex justify-content-end ">
          {search && (
            <div className="input-group mb-3  w-25 ">
              <input
                type="text"
                className="form-control searchInput"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-secondary px-3 "
                type="button"
              ></button>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card_container">
              <Link href={"/blogdetails"}>
                <div className="image_container2">
                  <div className="image"></div>
                </div>
              </Link>
              <div className="text_container">
                <Link href={"/blogdetails"}>
                  <p className="fw-bold">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. In, commodi. consectetur
                    adipisicing elit. Nobis, illo.
                  </p>
                </Link>
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
                  <Link href={"/blogdetails"}>
                    <div className="image_container">
                      <div className="image"></div>
                    </div>
                  </Link>
                  <div className="text_container">
                    <Link href={"/blogdetails"}>
                      <p className="fw-bold">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </Link>
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
                  <Link href={"/blogdetails"}>
                    <div className="image_container">
                      <div className="image"></div>
                    </div>
                  </Link>
                  <div className="text_container">
                    <Link href={"/blogdetails"}>
                      <p className="fw-bold">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </Link>
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
                  <Link href={"/blogdetails"}>
                    <div className="image_container">
                      <div className="image"></div>
                    </div>
                  </Link>
                  <div className="text_container">
                    <Link href={"/blogdetails"}>
                      <p className="fw-bold">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </Link>
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
                  <Link href={"/blogdetails"}>
                    <div className="image_container">
                      <div className="image"></div>
                    </div>
                  </Link>
                  <div className="text_container">
                    <Link href={"/blogdetails"}>
                      <p className="fw-bold">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </Link>
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
        {pagination && (
          <Pagination
            defaultCurrent={1}
            itemRender={itemRender}
            total={50}
            style={{ textAlign: "center", marginTop: "1rem" }}
          />
        )}
      </div>
    </>
  );
};
export default BlogPagePosts;
