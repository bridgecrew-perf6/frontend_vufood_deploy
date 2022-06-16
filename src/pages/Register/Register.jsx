import React, { useRef, useState } from "react";
import images from "../../constants/images";
import "./Register.css";
import { useAlert, positions, Provider as AlertProvider } from "react-alert";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { data } from "../../constants";

const Register = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const alert = useAlert();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://vu-food-web.herokuapp.com/api/auth/register",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      console.log(res.data);
      setSuccess(true);
      navigate("/login") && alert.show("Register Success");
    } catch (err) {
      console.log(err);
      setSuccess(false);
      alert.show("Something went wrong");
    }
  };
  return (
    <div className="app__login section__padding">
      <div className="app__login-form">
        <div className="login__form-title">
          <h2>Register</h2>
        </div>
        <div className="login__form-input">
          <form className="create-form" onSubmit={handleSubmit}>
            <input
              className="form-field"
              placeholder="Name"
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

            <button onClick={() => {}} className="app__button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="app__login-images">
        <img src={images.login} alt="" />
      </div>
    </div>
  );
};

export default Register;
