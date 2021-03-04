import React from "react";
import "./style.css";

function Card({ name, image, phone, email }) {
  return (
    <div>
      {name}
      {image}
      {phone}
      {email}
    </div>
  );
}

export default Card;
