import React from "react";
import NavBar from "../components/NavBar";
import SignOutForm from "../components/SignOutForm";
import MessageBox from "../components/MessageBox";

class SignedInLayout extends Component {
  state = {};

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
