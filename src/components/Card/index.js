import React from "react";
import "./style.css";


function Card(firstName, lastName, email, phone, picture) {
  return (

      <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
          <div><img alt={picture} src={picture}></img></div>
          <div>{firstName} {lastName} </div>
          <div>{phone}</div>
          <div>{email}</div>
      </div>
  );
}

export default Card;

