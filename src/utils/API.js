import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=20").then((res) => {
      const users = res.data;
      return users.map((employee) => {
        return {
          firstName: employee.name.first,
          picture: employee.picture,
          phone: employee.phone,
          email: employee.email,
        };
      });
    });
  },
};
