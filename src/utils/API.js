import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchEmployees: function() {
    return axios
      .get("https://randomuser.me/api/?results=20")
      .then(res => {
    const employees = res.data.results;
    return employees.map(employee => {
      return {
        firstName: employee.name.first,
        lastName: employee.name.last,
        email: employee.email,
        phone: employee.phone,
        picture: employee.picture.thumbnail
      };
    });
  });
  }
};

