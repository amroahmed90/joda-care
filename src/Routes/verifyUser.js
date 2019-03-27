import Auth from "./Auth";
import axios from "axios";

const verifyUser = event => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  axios({
    method: "POST",
    url: "https://jodacare-assignment.herokuapp.com/api/authenticate",
    data: {
      username: username,
      password: password
    },
    header: "content-type: application/jason"
  }).then(response => {
    Auth.logIn(() => {
      this.props.history.push("/profile");
      localStorage.setItem("token", response.data.token);

      console.log(Auth.getAuthentication());
      console.log(localStorage.getItem("token"));
    });
  });
};

export default verifyUser;
