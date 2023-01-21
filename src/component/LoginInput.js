import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailHandler] = useInput("");
  const [password, onPasswordHandler] = useInput("");

  return (
    <form onSubmit={() => login({ email, password })} className="login-input">
      <input type="email" placeholder="Email" value={email} onChange={onEmailHandler} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordHandler} />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
