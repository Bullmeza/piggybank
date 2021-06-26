import React from "react";
import LoginPopup from "./login_popup";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <h1 className="center-welcome">Welcome to KidBank!</h1>
      <LoginPopup />
    </div>
  );
}

export default Login;
