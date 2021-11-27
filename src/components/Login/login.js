import React from "react";
import { Button } from "@mui/material";
import logo from "../../asset/logo.jpg";
import "./style.css";
import { useLocalContext } from "../../Context/Context";

//used for login
const Login = () => {
  const { login } = useLocalContext();

  return (
    <div className="login">
      <div className="login__title">
        <h1>STUDY BUDDY</h1>
      </div>
      <br></br>
      <br></br>
      <img className="login__logo" src={logo} alt="class"></img>
      <Button variant="contained" color="warning" onClick={() => login()}>
        Login Now!
      </Button>
    </div>
  );
};

export default Login;
