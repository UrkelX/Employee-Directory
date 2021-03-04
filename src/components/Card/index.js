import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card({ firstName, picture, phone, email, handleBtnClick }) {
  return (
    <div>
      <CardHeading firstName={firstName} />
      <CardImg picture={picture} />
      <CardBody phone={phone} email={email}/>
      <CardBtn
        style={{ opacity: picture ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: picture ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
