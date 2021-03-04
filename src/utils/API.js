import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://randomuser.me/api/")
      .then(res => {
        const users = res.data;
        return users.map(user => {
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
