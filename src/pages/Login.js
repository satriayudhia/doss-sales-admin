import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { AppContext } from "../configs/AppContext";

import DefaultInput from "../components/DefaultInput";
import DefaultInputPassword from "../components/DefaultInputPassword";

const Login = () => {
  const [state, dispatch] = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch({
        type: "LOGIN",
      });
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="w-100">
      <header className="login-header">
        <img
          src="https://doss.co.id/_next/static/images/logo_doss_2-f80e2d723392731fc39da01df1685445.png"
          alt="doss"
        />
      </header>
      <div className="login-content">
        <img
          src="https://main.mobile.doss.co.id/storage/uploads/2023/01/vecteezy-illustration-of-people-trying-to-solve-the-puzzle-of-9734274.webp"
          alt="bg login"
          className="login-bg"
        />

        <section className="login-card-container">
          <div className="login-text-header mb-5">Masuk</div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="default-label">Email</label>
              <DefaultInput />

              <label className="default-label mt-3">Kata Sandi</label>
              <DefaultInputPassword />

              <div className="login-forgot-pass mt-3">Lupa kata sandi?</div>

              <Button
                type="submit"
                variant="contained"
                className="card-list-accept-btn w-100 h-40 mt-3"
                disableElevation
              >
                Masuk
              </Button>
            </div>
          </form>
        </section>

        <div className="login-copyright">
          &#169;2023 PT Global Sukses Digital
        </div>
      </div>
    </div>
  );
};

export default Login;
