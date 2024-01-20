import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginBtn = (e) => {
    e.preventDefault();
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
      <button type="submit" onClick={loginBtn}>
        Login
      </button>
      <p>Not a member?</p>
    </div>
  );
};

export default Login;
