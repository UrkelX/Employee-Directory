import React from "react";
import "./style.css";

function CardContainer(props) {
  return (
      <div className="container max-w-6xl px-10 mx-auto">
          {props.children}
      </div>
  )
}

export default CardContainer;
