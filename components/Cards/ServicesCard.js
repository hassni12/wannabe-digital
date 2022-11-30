import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ServicesCard = (props) => {
  return (
    <>
      <Card 
      className="animated fadeInUp "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          width: "17rem",
          background: "#FFB814",
          borderRadius: "40px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          border: "none",
          padding: "1px",
          marginTop: "9rem"
        }}
      >
        <img src={props.img} width={200} height={200} />
        <img
          src="./images/hero_middle.png"
          style={{ position: "absolute", top: "-.8rem", right: "14rem" }}
          width={50}
          height={50}
        />

        <Card.Title className="text-white text-align-center font-weight-bolder " style={{fontWeight:"bold"}}>
          {props.title}
        </Card.Title>
        <Card.Body
          className="d-flex flex-column align-items-center justify-content-center pt-0"
          style={{ gap: "6px" }}
        >
          {props.bullets.map((e, key) => {
            return (
              <li
                key={key}
                style={{
                  listStyle: "none",
                  fontSize: ".87rem",
                  color:"black",
                  // fontWeight: "100",
                }}
              >
                {e}
              </li>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
};

export default ServicesCard;
