import React from "react";
import Card from "./Card";


function EmployeeList ({ data }) { 
    return (
        data.map(employee => (
            <Card
                image={employee.picture}
                name={employee.name}
                email={employee.email}
                phone={employee.phone}
            />
            ))
    )
}

export default EmployeeList;
