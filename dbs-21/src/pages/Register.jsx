import React, { useState } from "react";

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
      <input type="text" name="first_name"></input>
      <label>Last Name</label>
      <input type="text" name="last_name"></input>
      <label>Username</label>
      <input type="text" name="username"></input>
      <label>Password</label>
      <input type="password" name="password"></input>
      <label>Confirm Password</label>
      <input type="password" name="confirmPassword"></input>
      <button type="submit">Register</button>
      <p>Already a member?</p>
    </div>
  );
};

export default SignUp;
