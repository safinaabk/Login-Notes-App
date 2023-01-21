import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { register } from "../utils/api";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <input type="text" placeholder="Name" value={name} onChange={onNameChange}></input>
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange}></input>
      <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={onPasswordChange}></input>
      <button>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
