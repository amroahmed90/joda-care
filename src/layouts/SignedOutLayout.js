import React from "react";
import { Component } from "react";
import NavBar from "../components/NavBar";
import SignInForm from "../components/SigInForm";
import SignOutForm from "../components/SignOutForm";

class SignInLayout extends Component {
  state = {
    username: "",
    password: "",
    token: "",
    isSignedIn: false
  };

  getUser = event => {
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    this.setState({ username, password, isSignedIn: true });
    console.log(this.state.username);
    console.log(this.state.password);
  };

  signOut = event => {
    this.setState({ isSignedIn: false });
  };

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <NavBar />
          <SignInForm getUser={this.getUser} />
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

export default SignInLayout;
