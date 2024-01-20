import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
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
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    const input = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    if (
      !input.first_name ||
      !input.last_name ||
      !input.username ||
      !input.password
    ) {
      alert("First Name, Last Name, Username and Password cannot be blank!");
    }

    if (input.password !== input.confirmPassword) {
      alert("Passwords do not match!");
    } else if (input.password.length < 7 || input.password.length > 20) {
      alert("Passwords must be 7 to 20 characters long");
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="registerContainer">
      <h4>Register</h4>
      <form onSubmit={validateForm}>
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
      </form>
    </div>
  );
};

export default Register;
