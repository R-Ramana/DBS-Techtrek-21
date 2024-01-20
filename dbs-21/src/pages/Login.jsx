import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    redirect("/dashboard");
  };

  return (
    <div className="loginContainer">
      <h4>Login</h4>
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={handleUsernameChange}
      ></input>
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={handlePasswordChange}
      ></input>
      <button type="submit">Login</button>
      <p>
        Not a member?
        <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
};

export default Login;
