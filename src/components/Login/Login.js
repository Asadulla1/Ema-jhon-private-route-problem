import React from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../hooks/UseFirebase";
import "./Login.css";
const Login = () => {
  const { signInUsingGoogle } = UseFirebase();
  return (
    <div className="login-form">
      <div>
        <h2>Please Login</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your email here" />{" "}
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br /> <br />
          <input type="submit" value="Submit" className="btn-regular" />
        </form>
        <p>
          New to Ema-Jhon?
          <Link to="/register">Create New Account</Link>
        </p>
        <br />
        <button className="btn-regular" onClick={signInUsingGoogle}>
          Google SignIn
        </button>
      </div>
    </div>
  );
};

export default Login;
