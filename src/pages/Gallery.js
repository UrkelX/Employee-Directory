import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

function Gallery() {
  const [employee, setUser] = useState({});
  const [employees, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random employees.
  useEffect(() => {
    loadUsers();
  }, []);

  function nextUser(userIndex) {
    // Ensure that the employee index stays within our range of employees
    if (userIndex >= employees.length) {
      userIndex = 0;
    }
    setUser(employees[userIndex]);
    setUserIndex(userIndex);
  }

  function previousUser(userIndex) {
    // Ensure that the employee index stays within our range of employees
    if (userIndex < 0) {
      userIndex = employees.length - 1;
    }
    setUser(employees[userIndex]);
    setUserIndex(userIndex);
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

  function loadUsers() {
    API.fetchEmployees()
      .then(employees => {
        setUsers(employees);
        setUser(employees[0]);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Welcome to LinkedUp</h1>
      <p className="text-center h3">Click on the arrows to browse employees</p>
      <Row>
        <CardContainer
          firstName={employee.name.first}
          picture={employee.picture}
          phone={employee.phone}
          email={employee.email}
          // profileUrl={employee.profileUrl}
          handleBtnClick={handleBtnClick}
        />
      </Row>
    </div>
  );
}

export default Gallery;
