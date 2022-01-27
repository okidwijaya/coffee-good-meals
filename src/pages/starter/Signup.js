import React from "react";
import homeBg from "../../assets/loginbg.png";
import Header from "../../components/header";
import SignupCard from "../../components/starter";
import googleIcon from '../../assets/google-icon.svg';
import './style.css';

const Signup = () => {
  return (
    <>
      <main>
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
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input type="text" className="form-control" id="inputPhoneNumber" />
          </div>
          <div className="d-grid gap-2 col-12 mx-auto p-0" style={{ width: "100%" }}>
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
            ><img src={googleIcon} alt="logo" width="20" height="20" />
              Signup with Google
            </div>
          </div>
        </form>
      </section>

      <aside className="col-6 col-lg-6 signup-img-wrapper">
        <img src={homeBg} className="img-fluid" alt="Responsive" />
      </aside>

     
      </main>
      <SignupCard />
    </>
  );
};

export default Signup;
