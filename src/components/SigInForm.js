import React from "react";

const SignInForm = props => {
  return (
    <div id="sign-in-box" className="col-md-4 offset-md-4">
      <h3 id="sign-in-header">Sign In</h3>
      <form className="container" onSubmit={props.verifyUser}>
        <div className="form-group">
          <input
            id="email-input"
            className="form-control text-center"
            type="email"
            name="username"
            placeholder="example@jodacare.com"
          />
          <input
            id="password-input"
            className="form-control text-center"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button id="sign-in-button" className="btn btn-primary btn-block">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
