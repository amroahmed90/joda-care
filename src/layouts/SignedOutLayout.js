import React from "react";
import { Component } from "react";
import NavBar from "../components/NavBar";
import SignInForm from "../components/SigInForm";
import SignOutForm from "../components/SignOutForm";

import axios from "axios";
import { withRouter } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import Auth from "../Routes/Auth";

class SignedOutLayout extends Component {
  state = {
    data: {},
    isSignedIn: false
  };

  verifyUser = event => {
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
      localStorage.setItem("token", response.data.token);
      this.setState({ isSignedIn: true });
    });
  };

  signOut = () => {
    this.setState({ isSignedIn: false });
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("token");
  };

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <NavBar />
          <SignInForm verifyUser={this.verifyUser} />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <SignOutForm signOut={this.signOut} />
          <MessageBox />
        </div>
      );
    }
  }
}

export default withRouter(SignedOutLayout);
