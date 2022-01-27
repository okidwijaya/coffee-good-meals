import React from 'react';
import homeBg from "../../assets/loginbg.png";
import logo from "../../assets/icon.svg";
import SignupCard from "../../components/starter";
import googleIcon from '../../assets/google-icon.svg';
import './style.css';

const Login = () => {
    return (
        <>
      <main>
      <section className="col-6 col-lg-6 signup-form-wrapper">
      
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <div className="container-fluid">
          <div className="container">
            <div className="navbar-brand">
              <img src={logo} alt="logo" width="30" height="24" />
              <strong>Coffee Shop</strong>
            </div>
          </div>
          <div className="d-flex">
            <div className="btn btn-warning btn-login" type="submit">
              Login
            </div>
          </div>
        </div>
      </nav>

          <form className="signup-form">
          <p className="signup-form-title">Login</p>
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
            <div className="btn-forgot-password">Forgot Password</div>
          </div>
          <div className="d-grid gap-2 col-12 mx-auto p-0" style={{ width: "100%" }}>
            <div
              className="btn btn-warning btn-signup"
              style={{ width: "100%" }}
              type="button"
            >
              Login
            </div>
            <div
              className="btn btn-light btn-signup btn-signup-custom"
              style={{ width: "100%" }}
              type="button"
            ><img src={googleIcon} alt="logo" width="20" height="20" />
              Login with Google
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
}

export default Login;
