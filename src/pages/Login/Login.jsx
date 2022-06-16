import React, { useRef, useState } from "react";
import images from "../../constants/images";
import "./Login.css";
import { useAlert, positions, Provider as AlertProvider } from "react-alert";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { data } from "../../constants";

const Login = ({ setLogin }) => {
  const userRef = useRef();
  const passwordRef = useRef();
  const alert = useAlert();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://vu-food-web.herokuapp.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      console.log(res.data);
      setSuccess(true);
      setLogin(true);
      navigate("/") && setLogin(true) && alert.show("Login Success");
    } catch (err) {
      console.log(err);
      setSuccess(false);
      alert.show("Wrong credentials");
    }
  };
  return (
    <div className="app__login section__padding">
      <div className="app__login-form">
        <div className="login__form-title">
          <h2>Login</h2>
        </div>
        <div className="login__form-input">
          <form className="create-form" onSubmit={handleSubmit}>
            <input
              className="form-field"
              placeholder="User Name"
              onChange={() => {}}
              name="name"
              ref={userRef}
            />
            <input
              className="form-field"
              placeholder="Password"
              onChange={() => {}}
              name="password"
              ref={passwordRef}
            />

            {/* <Link to="/"> */}
            <button onClick={() => {}} className="app__button" type="submit">
              Login
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
      <div className="app__login-images">
        <img src={images.login} alt="" />
      </div>
    </div>
  );
};

export default Login;
