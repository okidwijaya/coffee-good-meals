import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/auth";

import homeBg from "../../assets/loginbg.png";
import logo from "../../assets/icon.svg";
import googleIcon from "../../assets/google-icon.svg";

import SignupCard from "../../components/starter";
import "./style.css";
import { useNavigate } from "react-router-dom";

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
      const { navigate } = this.props;
      return navigate("/", { replace: true });
    }
  }

  render() {
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
                  required
                />
              </div>
              <div className="mb-3">
                <div className="btn-forgot-password">Forgot Password</div>
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

          <aside className="col-6 col-lg-6 signup-img-wrapper">
            <img src={homeBg} className="img-fluid" alt="Responsive" />
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
