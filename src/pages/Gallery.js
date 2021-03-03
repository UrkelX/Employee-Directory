import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Card from "../components/Card";

function Gallery() {
  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState([]);
  const [userIndex, setEmployeeIndex] = useState(0);

  // When the component mounts, a call will be made to get random employees.
  useEffect(() => {
    loadEmployees();
  }, []);

  function nextUser(userIndex) {
    // Ensure that the employee index stays within our range of employees
    if (userIndex >= employees.length) {
      userIndex = 0;
    }
    setEmployee(employees[userIndex]);
    setEmployeeIndex(userIndex);
  }

  function previousUser(userIndex) {
    // Ensure that the employee index stays within our range of employees
    if (userIndex < 0) {
      userIndex = employees.length - 1;
    }
    setEmployee(employees[userIndex]);
    setEmployeeIndex(userIndex);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  function loadEmployees() {
    console.log(API.fetchEmployees())
    API.fetchEmployees()
      .then(employees => {
        setEmployees(employees);
        setEmployee(employees[0]);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center h3">Use search and filters to browse employees</p>
      
        <Card
          title={employee.firstName}
          titleTwo={employee.lastName}
          email={employee.email}
          image={employee.picture}
          // profileUrl={employee.profileUrl}
          // handleBtnClick={handleBtnClick}
        />
    
    </div>
  );
}

export default Gallery;
