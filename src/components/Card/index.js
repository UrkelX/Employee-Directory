import React from "react";
import "./style.css";

function Card(props) {
    return (

        <div className="card">
            <div><img alt={props.first} src={props.image}></img></div>
            <div>{props.first} {props.last} </div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default Card;

