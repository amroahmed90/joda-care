import React from "react";

const SignOutForm = props => {
  return (
    <div>
      <h3>You're Logged In!</h3>
      <button onClick={props.signOut} className="btn btn-secondary">
        Sign Out
      </button>
    </div>
  );
};
export default SignOutForm;
