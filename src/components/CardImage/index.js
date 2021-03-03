import React from "react";

function CardImg({ image }) {
  return (
    <div>
      <img
        style={{ maxWidth: "60px" }}
        className="rounded-full shadow-md border border-gray-300"
        src={image}
        alt="employee"
      />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;