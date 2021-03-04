import React from "react";
import Card from "../Card";

function EmployeeList({ data }) {
  return data.map((employee) => (
    <Card
      title={employee.name.first}
      image={employee.picture}
      email={employee.email}
      phone={employee.phone}
    />
  ));
}

export default EmployeeList;
