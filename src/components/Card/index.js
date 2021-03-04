import React from "react";
import "./style.css";


function Card(props) {
  return (

      <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
          <div><img alt={props.last} src={props.image}></img></div>
          <div>{props.title} {props.first} {props.last} </div>
          <div>{props.gender}</div>
          <div>{props.age}</div>
          <div>{props.phone}</div>
          <div>{props.email}</div>
      </div>
  );
}

export default Card;

