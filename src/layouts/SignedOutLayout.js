import React from "react";
import { Component } from "react";
import NavBar from "../components/NavBar";
import SignInForm from "../components/SigInForm";
import SignOutForm from "../components/SignOutForm";

import axios from "axios";
import { withRouter } from "react-router-dom";

class SignInLayout extends Component {
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
      this.setState({ isSignedIn: true });
      localStorage.setItem("token", response.data.token);
    });
    this.getUserData();
  };

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
        </div>
      );
    }
  }
}

export default withRouter(SignInLayout);
