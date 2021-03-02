import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchEmployees: function() {
    return axios
      .get("https://randomuser.me/api/?results=20")
      .then(res => {
        const users = res.data;
        return users.map(user => {
          return {
            login: user.login,
            image: user.avatar_url,
            profileUrl: user.html_url
          };
        });
      });
  }
};