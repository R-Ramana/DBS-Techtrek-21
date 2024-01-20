import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    const input = {
      username: username,
      password: password,
    };

    if (!input.username || !input.password) {
      alert("Username and password cannot be blank!");
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("username", username);
    console.log(username);

    navigate("/iternaries");
    // redirect("/iternaries");
  };

  return (
    <div className="loginContainer">
      <h4>Login</h4>
      <form onSubmit={validateForm}>
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
        <button className="btn" onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
      <p>
        Not a member?
        <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
};

export default Login;
