import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchEmployees: function() {
    return axios
      .get("https://randomuser.me/api/?results=20")
  }
};

