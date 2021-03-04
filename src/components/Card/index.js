import React from "react";
import "./style.css";

function Card({ firstName, picture, phone, email }) {
  return (
    <div>
      {firstName}
      {picture}
      {phone}
      {email}
    </div>
  );
}

export default Card;
