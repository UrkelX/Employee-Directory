import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://randomuser.me/api/?results=20")
      .then(res => {
        const employees = res.data;
        return employees.map(user => {
          return {
            name: user.name,
            email: user.email,
            phone: user.phone,
            image: user.picture.thumbnail,
          };
        });
      });
  }
};