import React from "react";
import { Component } from "react";
import NavBar from "../components/NavBar";
import SignInForm from "../components/SigInForm";

class SignInLayout extends Component {
  state = {
    isSignedIn: false
  };
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <NavBar />
          <SignInForm />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
        </div>
      );
    }
  }
}

export default SignInLayout;
