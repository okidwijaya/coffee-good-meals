import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import homeBg from "../../assets/loginbg.png";
import SignupCard from "../../components/Auth";
import googleIcon from "../../assets/google-icon.svg";
import Header from "../../components/Header";
import { register } from "../../utils/https/auth";
import Loading from "../../components/loadingComp/LoadingComp";
import { validateSignup } from "../../helpers/validation";
import "./style.css";

function WrapperRegister(props) {
  const navigate = useNavigate();

  return <Signup {...props} navigate={navigate} />;
}

function Signup(props) {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("far fa-eye-slash");
  const [values, setValues] = useState({
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
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
    setError(validateSignup(values));
    const validateBody = validateSignup(values);

    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
    };

    if (Object.keys(validateBody).length === 0) {
      setIsSubmit(true);
      setIsLoading(true);
      register(body)
        .then((res) => {
          setIsLoading(false);
          toast.success("Registration success!");
          const { navigate } = props;
          return navigate("/login", { replace: true });
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          let errors = {};
          errors.form = "Email already exist";
          setError(errors);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log("isSubmit", isSubmit);
      console.log("useEff error", error);
    }
  });

  return (
    <>
      <main>
        <div className="starter-wrapper">
          <section className="col-6 col-lg-6 signup-form-wrapper">
            <Header />
            <form className="signup-form" onSubmit={submitHandler} noValidate>
              <p className="signup-form-title">Sign Up</p>
              <div className="mb-3">
                <label className="form-label">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail1"
                  name="email"
                  placeholder="Enter your email address"
                  value={values.email}
                  onChange={changeHandler}
                />
                {error.email && (
                  <div className="text-danger error">{error.email}</div>
                )}
                {error.form && (
                  <div className="text-danger error">{error.form}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type={type}
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  id="inputPassword1"
                  value={values.password}
                  onChange={changeHandler}
                />
                {error.password && (
                  <div className="text-danger error">{error.password}</div>
                )}
              </div>
              <div
                className={error.email ? "icon-toggle toggle" : "icon-toggle"}
                onClick={handleToggle}
              >
                <i className={icon}></i>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="form-control"
                  id="inputPhoneNumber"
                  value={values.phone}
                  onChange={changeHandler}
                />
                {error.phone && (
                  <div className="text-danger error">{error.phone}</div>
                )}
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
                  {/* Signup */}
                  {isLoading ? <Loading /> : "Sign Up"}
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
}

export default WrapperRegister;
