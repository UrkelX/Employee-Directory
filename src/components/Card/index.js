import React from "react";
import "./style.css";


function Card({firstName, lastName, email, phone, picture}) {
  return (

    <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
    <img
        style={{ maxWidth: "60px"}}
        className="rounded-full shadow-md border border-gray-300"
        src={picture}
        alt="employee"
    />
    <p className="font-bold text-md">{firstName} {lastName}</p>
    <p className="text-blue-500">{email}</p>
    <p>{phone}</p>
</div>
)
}

export default Card;

