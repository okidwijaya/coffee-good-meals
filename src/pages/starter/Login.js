import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import homeBg from "../../assets/barber-auth.jpg";
import logo from "../../assets/logo-barber.png";
import googleIcon from "../../assets/google-icon.svg";

import SignupCard from "../../components/Auth";
import Loading from "../../components/loadingComp/LoadingComp";
import "./style.css";
import { validateLogin } from "../../helpers/validation";

function WrapperLogin(props) {
  const navigate = useNavigate();

  return <Login {...props} navigate={navigate} />;
}

function Login(props) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("far fa-eye-slash");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon("far fa-eye");
      setType("text");
    } else {
      setIcon("far fa-eye-slash");
      setType("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(validateLogin(values));
    const validateBody = validateLogin(values);

    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (Object.keys(validateBody).length === 0) {
      setIsSubmit(true);
      dispatch(loginAction(body));
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log("isSubmit", isSubmit);
      console.log("useEff error", error);
    }
    if (auth.isPending === true) {
      setIsFetching(true);
    }
    if (auth.isFulfilled === true) {
      // toast.success('Login successful');
      toast.success("Login Success");
      const { navigate } = props;
      return navigate("/", { replace: true });
    }
  }, [auth, error, isSubmit, props]);

  useEffect(() => {
    if (auth.isRejected === true) {
      setIsFetching(false);
      let errors = {};
      errors.form = "Email/Password is invalid";
      setError(errors);
    }
  }, [auth]);

  return (
    <>
      <main>
        <section className="col-12 col-sm-6 col-lg-6 login-form-wrapper">
          <nav className="navbar navbar-light navbar-expand-lg login-nav-bar">
            <div className="container-fluid">
              <div className="col-sm-2 ml-0 container">
                <Link to="/">
                  <div className="navbar-brand">
                    <img src={logo} alt="logo" width="30" height="24" />
                    <strong>Barber Shop</strong>
                  </div>
                </Link>
              </div>
              <div className="d-flex">
                <Link to="/signup">
                  <div className="btn btn-warning btn-login" type="submit">
                    Sign Up
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          <form className="login-form" onSubmit={submitHandler} noValidate>
            <p className="login-form-title">Login</p>
            <div className="mb-3">
              <label className="form-label">Email address:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
                value={values.email}
                onChange={handleChange}
              />
              {error.email && (
                <div className="text-danger error">{error.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type={type}
                name="password"
                className="form-control"
                id="inputPassword1"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {error.password && (
                <div className="text-danger error">{error.password}</div>
              )}
            </div>
            <div
              className={error.email ? "togglePass toggles" : "togglePass"}
              onClick={handleToggle}
            >
              <i className={icon}></i>
            </div>
            {error.form && (
              <div className="text-danger error mb-3 mt-2 text-center">
                {error.form}
              </div>
            )}
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
                {/* Login */}
                {isFetching ? <Loading /> : "Login"}
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
          <img
            src={homeBg}
            className="img-fluid img-responsive-starter"
            alt="Responsive"
          />
        </aside>
      </main>
    </>
  );
}

export default WrapperLogin;
