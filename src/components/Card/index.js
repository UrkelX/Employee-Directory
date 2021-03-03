import React from "react";
// import CardBody from "../CardBody";
// import CardBtn from "../CardBtn";
// import CardImg from "../CardImage";
// import CardHeading from "../CardHeading";
import "./style.css";

function Card({ title, image, profileUrl, email, handleBtnClick }) {
  return (
    <div ClassName="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
      {/* <CardHeading title={title} />
      <CardImg image={image} />
      <CardBody profileUrl={profileUrl} />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="next"
      /> */}

      <img
        style={{ maxWidth: "60px" }}
        className="rounded-full shadow-md border border-gray-300"
        src={image}
        alt="employee"
      />
      <p className="font-bold text-md">{title}</p>
      <p>Content Here</p>
      <p className="text-blue-500">{email}</p>
      <p>More Content Here</p>
    </div>
  );
}

export default Card;

