import React from "react";
import Card from "../Card";


function EmployeeList({ data }) {
  return data.map((employee) => (
    <Card
      picture={employee.picture}
      firstName={employee.name.first}
      lastName={employee.name.last}
      email={employee.email}
      phone={employee.phone}
    />
  ));
}

export default EmployeeList;
