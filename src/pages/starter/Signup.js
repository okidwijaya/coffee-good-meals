import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import homeBg from "../../assets/barber-auth.jpg";
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
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(validateSignup(values));
    const validateBody = validateSignup(values);
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log("cek body", validateBody);
    if (Object.keys(validateBody).length === 0) {
      setIsSubmit(true);
      register(body)
        .then((res) => {
          setIsloading(false);
          toast.success("Registration Successfull", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
          props.history.push("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log("submit", isSubmit);
      console.log("useEf", error);
    }
  }, [error, isSubmit, props]);

  return (
    <>
      <main>
        <div className="starter-wrapper">
          <section className="col-12 col-sm-6 col-lg-6 signup-form-wrapper">
            <Header />
            <form className="signup-form" onSubmit={submitHandler} noValidate>
              <p className="signup-form-title">Sign Up</p>
              <div className="input-name">
                <input
                  type="name"
                  className="name"
                  id="name"
                  placeholder="Name"
                  name="name"
                ></input>
              </div>
              <div className="input-email">
                <input
                  type="email"
                  className="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                ></input>
              </div>
              {error.email && (
                <div className="text-danger fw-bold error">{error.email}</div>
              )}
              <div className="input-password">
                <input
                  type="password"
                  className="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                ></input>
              </div>
              {error.password && (
                <div className="text-danger fw-bold error">
                  {error.password}
                </div>
              )}
              <div
                className="d-grid gap-2 col-12 mx-auto p-0"
                style={{ width: "100%" }}
              >
                <button
                  className="btn btn-warning btn-signup"
                  style={{ width: "100%" }}
                  type="submit"
                >
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
    </>
  );
}

export default WrapperRegister;
