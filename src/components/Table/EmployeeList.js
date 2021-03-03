import React from "react";
import Card from "../Card";

function EmployeeList({ data }) {
  return data.map((employee) => (
    <Card
      title={employee.firstName}
      image={employee.picture}
      email={employee.email}
      phone={employee.phone}
    />
  ));
}

export default EmployeeList;
