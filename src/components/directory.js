import React from "react";
import EmployeeDeck from "./Table";
import API from "../utils/API";





// ------

function EmployeeDirectory ({ data }) { 
    return (
        data.map(results => (
            <EmployeeDeck
                image={results.image}
                name={results.name}
                dept={results.department}
                email={results.email}
                phone={results.phone}
            />
            ))
    )
}

export default EmployeeDirectory;
