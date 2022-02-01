import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import homeBg from "../../assets/loginbg.png";
import SignupCard from "../../components/Auth";
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
        toast.success("Registration successful!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        return navigate("/login", { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <main>
        <div className="starter-wrapper">
          <section className="col-6 col-lg-6 signup-form-wrapper">
            <Header />
            <form className="signup-form" onSubmit={submitHandler}>
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
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
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

          <aside className="col-12 col-md-12 col-lg-6 signup-img-wrapper">
            <img src={homeBg} className="img-fluid" alt="Responsive" />
          </aside>
        </div>
      </main>

      <SignupCard />
    </>
  );
};

export default Signup;
