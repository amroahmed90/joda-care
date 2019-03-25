import React from "react";

const SignInForm = props => {
  return (
    <div>
      <h3>Sign In</h3>
      <form className="container">
        <div className="form-group">
          <input
            className="form-control text-center"
            type="email"
            name="username"
            placeholder="example@jodacare.com"
          />
          <input
            className="form-control text-center"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
