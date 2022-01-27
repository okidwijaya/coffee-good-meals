import React from "react";
import { useNavigate } from "react-router-dom";

import homeBg from "../../assets/loginbg.png";
import SignupCard from "../../components/starter";
import googleIcon from "../../assets/google-icon.svg";

import Header from "../../components/header";
import { register } from "../../utils/https/auth";
import "./style.css";

const Signup = (props) => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
    };

    register(body)
      .then((res) => {
        return navigate("/login", { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <>

      <main>
        <section className="col-6 col-lg-6 signup-form-wrapper">
          <Header />
          <form className="signup-form" onSubmit={submitHandler}>

      <div className="starter-wrapper">
        <section className="col-6 col-lg-6 signup-form-wrapper">
          <Header />
          <form className="signup-form">
            <p className="signup-form-title">Sign Up</p>
            <div className="mb-3">
              <label className="form-label">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail1"

                name="email"
                placeholder="Enter your email address"

                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"

                name="password"
                placeholder="Enter your password"

                id="inputPassword1"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number:</label>
              <input

                type="number"
                className="form-control"
                name="phone"
                placeholder="Enter your phone number"

                type="text"
                className="form-control"

                id="inputPhoneNumber"
              />
            </div>
            <div
              className="d-grid gap-2 col-12 mx-auto p-0"
              style={{ width: "100%" }}
            >

              <button
                className="btn btn-warning btn-signup"
                style={{ width: "100%" }}
                type="submit"
              >
                Signup
              </button>

              <div
                className="btn btn-warning btn-signup"
                style={{ width: "100%" }}
                type="button"
              >
                Signup
              </div>

              <div
                className="btn btn-light btn-signup btn-signup-custom"
                style={{ width: "100%" }}
                type="button"
              >
                <img src={googleIcon} alt="logo" width="20" height="20" />
                Signup with Google
              </div>
            </div>
          </form>
        </section>

        <aside className="col-6 col-lg-6 signup-img-wrapper">
          <img src={homeBg} className="img-fluid" alt="Responsive" />
        </aside>

      </main>

      </div>

      <SignupCard />
    </>
  );
};

export default Signup;
