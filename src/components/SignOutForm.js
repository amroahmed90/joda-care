import React from "react";

const SignOutForm = props => {
  const username = localStorage.getItem("username").split("@")[0];
  return (
    <div id="sign-out">
      <h3>Hello, {username}!</h3>
      <button onClick={props.signOut} className="btn btn-secondary">
        Sign Out
      </button>
    </div>
  );
};
export default SignOutForm;
