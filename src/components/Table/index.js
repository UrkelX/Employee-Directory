import React from "react";
// import API from "../utils/API";

 function EmployeeDeck({ name, picture, login, email, phone}) { 
    return (
        <div>
            <img
                style={{ maxWidth: "60px"}}
                src={picture}
                alt="employee"
            />
            <p>{name}</p>
            <p>{login}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default EmployeeDeck;
