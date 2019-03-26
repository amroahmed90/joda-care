import React from "react";
import NavBar from "../components/NavBar";
import SignOutForm from "../components/SignOutForm";
import MessageBox from "../components/MessageBox";

class SignedInLayout extends Component {
  state = {};
  getUserData = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const token = localStorage.getItem("token");
    const tokenBearer = "Bearer " + token;
    axios({
      method: "GET",
      url: "https://jodacare-assignment.herokuapp.com/api/messages",
      data: {
        username: username,
        password: password
      },
      headers: {
        "content-type": "application/jason",
        Authorization: tokenBearer
      }
    }).then(response => {
      this.setState({ data: response.data.results });
      console.log(response.data.results);
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <SignOutForm />
        <MessageBox />
      </div>
    );
  }
}

export default SignedInLayout;
