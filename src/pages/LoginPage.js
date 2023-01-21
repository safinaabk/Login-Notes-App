import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../component/LoginInput";
import { login } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="login-page">
            <h2>{locale === "id" ? "Silakan masuk untuk melanjutkan ..." : "Login to use the app, please..."}</h2>
            <LoginInput login={onLogin} />
            <p>
              {locale === "id" ? "Belum punya akun?" : "Dont have account?"} <Link to="/register">{locale === "id" ? "Daftar di sini." : "Sign up here"}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
