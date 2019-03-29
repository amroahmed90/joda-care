import axios from "axios";

const apiAuth = (username, password) => {
  axios({
    method: 'POST'
    url: 'https://jodacare-assignment.herokuapp.com/api/authenticate'
    data: {
      username,
      password
    },
    header: "content-type: application/jason"
  });
};
