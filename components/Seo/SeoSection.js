import React from "react";

const SeoSection = (props) => {
  return (
    <section className="container">
      <div className="row">
        <div
          className="col-lg-12 col-md-6 col-12 mx-auto "
          style={{ marginTop: "10rem" }}
        >
          <img src={props.image} className="img-fluid w-100 h-100" alt="" />
        </div>
        <div className="col-lg-12 col-md-6 col-12 mt-5">
          <h1 className="mt-4 mb-5">{props.H1}</h1>

          <p>{props.P1}</p>

          <h3 className="mt-4 mb-4">{props.H2}</h3>
          <p>{props.P2}</p>

          <h3 className="mt-4 mb-4">{props.H3}</h3>

          <p>{props.P3}</p>
          <h3 className="mt-4 mb-4">{props.H4}</h3>
          <p>{props.P4}</p>
          {props.bullets.map((e, key) => {
            return (
              <>
                <div
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  key={key}
                >
                  <img
                    src="../images/wot.png"
                    style={{ width: "3%", height: "10%" }}
                    alt=""
                  />
                  <li
                    style={{
                      listStyle: "none",
                      fontSize: ".87rem",
                      fontWeight: "bold",
                      //   width: "fit-content",
                    }}
                  >
                    {e}
                  </li>
                </div>
              </>
            );
          })}
        </div>

        <div className="col-lg-12 col-md-6 col-12 text-center mt-5">
          <button
            style={{
              border: "none",
              padding: "1rem 2rem",
              background: "#ffb814e5",
            }}
            className="rounded-5 fw-bold"
          >
            GET QUOTE NOW
          </button>
        </div>
      </div>
    </section>
  );
};
export default SeoSection;
