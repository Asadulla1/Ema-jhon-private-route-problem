import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Please Create a New Account</h2>
        <form onSubmit="">
          <input type="text" name="" id="" placeholder="Type your name here" />
          <br />
          <input type="email" name="" id="" placeholder="Your Email here" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Your Password here"
          />{" "}
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-write Password"
          />{" "}
          <br />
          <input type="submit" value="Submit" className="btn-regular" />
          <br />
        </form>
        <p>
          Already Registered? <Link to="/login">Go to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
