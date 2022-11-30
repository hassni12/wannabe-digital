/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "react-bootstrap/Card";

const AboutCard = (props) => {
  return (
    <>
      <Card
        className="g-0 mx-auto my-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20rem",

          borderRadius: "4px",
          height: "25rem",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          border: "none",
        }}
      >
        {/* <div style={{ }} className="justify-content-center"> */}
        <div
          className="w-100 text-center py-3"
          style={{ background: "#ffa710" }}
        >
          <img src={props.img} width={100} height={100} />
        </div>
        {/* </div> */}

        <Card.Title
          className="text-align-left mt-4 font-weight-bolder underline font-bold px-4 "
          style={{ fontStyle: "underline", width: "100%", fontWeight: "bold" }}
        >
          {props.title}
          <hr
            className="-mt-16"
            style={{
              marginTop: "-1px",
              fontWeight: "bolder",
              height: "2px",
              background: "black",
            }}
          />
        </Card.Title>
        <Card.Body
          className="d-flex flex-column pt-0 p-1 w-full"
          style={{ gap: "6px", width: "100%" }}
        >
          {props.bullets.map((e, key) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "5px",
                  }}
                  key={key}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "white",
                      borderRadius: "50px",
                    }}
                  ></div>

                  <img
                    src="../images/wot.png"
                    style={{ width: "10%", height: "102%" }}
                    alt=""
                  />
                  <li
                    style={{
                      listStyle: "none",
                      fontSize: ".87rem",
                      fontWeight: "bold",
                      width: "fit-content",
                    }}
                  >
                    {e}
                  </li>
                </div>
              </>
            );
          })}
        </Card.Body>
      </Card>

      {/* <img src="../../public/images/about_card_2.png"      style={{  width: "10%", height:"12%" }} alt="" /> */}
    </>
  );
};

export default AboutCard;
