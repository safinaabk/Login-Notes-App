import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../component/RegisterInput";
import { register } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegistHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="register-page">
            <h2>{locale === "id" ? "Isi form untuk daftar" : "fill the form to register..."}</h2>
            <RegisterInput register={onRegistHandler}></RegisterInput>
            <p>
              {locale === "id" ? "Sudah punya akun?" : "have an account?"}
              <Link to="/">{locale === "id" ? "Masuk" : "Sign in"}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
