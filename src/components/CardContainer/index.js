import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ firstName, picture, phone, email, handleBtnClick }) {
  return (
    <div className="jumbotron card-container">
      <Card
        firstName={firstName}
        picture={picture}
        phone={phone}
        email={email}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
}

export default CardContainer;
