import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { toast } from "react-toastify";

import homeBg from "../../assets/loginbg.png";
import logo from "../../assets/icon.svg";
import googleIcon from "../../assets/google-icon.svg";

import SignupCard from "../../components/Auth";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";


class Login extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    this.props.dispatch(loginAction(body));
  };

  componentDidUpdate() {
    if (this.props.auth.isFulfilled === true) {
      toast.success("Login successful", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      const { navigate } = this.props;
      return navigate("/", { replace: true });
    }
    if (this.props.auth.isRejected === true) {
      toast.error("Invalid Email/Password", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <section className="col-12 col-sm-6 col-lg-6 signup-form-wrapper">
            <nav className="navbar navbar-light navbar-expand-lg login-nav-bar">
              <div className="container-fluid">
                <div className="col-sm-2 ml-0 container">
                  <div className="navbar-brand">
                    <img src={logo}  alt="logo" width="30" height="24" />
                    <strong>Coffee Shop</strong>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="btn btn-warning btn-login" type="submit">
                    Sign Up
                  </div>
                </div>
              </div>
            </nav>

            <form className="signup-form" onSubmit={this.submitHandler}>
              <p className="signup-form-title">Login</p>
              <div className="mb-3">
                <label className="form-label">Email address:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="inputPassword1"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-3">
                <Link to="/forgotpassword">
                <div
                  className="btn-forgot-password"
                  style={{ textDecoration: "underline" }}
                >
                  Forgot Password?
                </div>
                </Link>
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
                  Login
                </button>
                <div
                  className="btn btn-light btn-signup btn-signup-custom"
                  style={{ width: "100%" }}
                  type="button"
                >
                  <img src={googleIcon} alt="logo" width="20" height="20" />
                  Login with Google
                </div>
              </div>
            </form>
          </section>

          <aside className="col-12 col-md-12 col-lg-6 signup-img-wrapper">
            <img src={homeBg} className="img-fluid img-responsive-starter" alt="Responsive" />
          </aside>
        </main>
        <SignupCard />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

function WrapperLogin(props) {
  const navigate = useNavigate();

  return <Login {...props} navigate={navigate} />;
}

export default connect(mapStateToProps)(WrapperLogin);
// export default Login;
