import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = () => {};

  return (
    <div>
      <h4>Register</h4>
      <label>First Name</label>
      <input
        type="text"
        name="first_name"
        onChange={handleFirstNameChange}
      ></input>
      <label>Last Name</label>
      <input
        type="text"
        name="last_name"
        onChange={handleLastNameChange}
      ></input>
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={handleUserNameChange}
      ></input>
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={handlePasswordChange}
      ></input>
      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        onChange={handleConfirmPasswordChange}
      ></input>
      <button type="submit">Register</button>
      <p>
        Already a member?
        <Link to="/login">Login Here</Link>
      </p>
    </div>
  );
};

export default Register;
