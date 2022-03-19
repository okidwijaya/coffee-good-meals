import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import homeBg from "../../assets/loginbg.png";
import SignupCard from "../../components/Auth";
import googleIcon from "../../assets/google-icon.svg";
import Header from "../../components/Header";
import { register } from "../../utils/https/auth";
import "./style.css";

function WrapperRegister(props) {
  const navigate = useNavigate();

  return <Signup {...props} navigate={navigate} />;
}

class Signup extends React.Component {
  state = {
    input: {},
    errorMsg: {},
    isValid: false,
  };

  changeHandler = (e) => {
    let input = this.state.input;
    input[e.target.name] = e.target.value;
    this.setState({
      input,
    });
  };

  validate = (e) => {
    let errors = {};
    let input = this.state.input;
    let isValid = true;

    if (typeof input["email"] !== "undefined") {
      const validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!validEmail.test(input["email"])) {
        isValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    if (typeof input["password"] !== "undefined") {
      const validPass = new RegExp(
        "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$"
      );
      if (!validPass.test(input["password"])) {
        isValid = false;
        errors["password"] =
          "Password must be at least 6 characters, including uppercase letter and numbers";
      }
    }

    if (typeof input["phone"] !== "undefined") {
      const pattern = new RegExp("^([0-9]{10,12})$");
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Phone number must contain 10-12 digits";
      }
    }

    this.setState({
      errorMsg: errors,
    });
    return isValid;
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.validate()) {
      let input = {};
      input["email"] = "";
      input["password"] = "";
      input["phone"] = "";
      this.setState({ input: input });

      const { email, password, phone } = this.state.input;

      const body = {
        email: email,
        password: password,
        phone: phone,
      };

      register(body)
        .then((res) => {
          toast.success("Registration successful!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          const { navigate } = this.props;
          return navigate("/login", { replace: true });
        })
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <>
        <main>
          <div className="starter-wrapper">
            <section className="col-6 col-lg-6 signup-form-wrapper">
              <Header />
              <form className="signup-form" onSubmit={this.submitHandler}>
                <p className="signup-form-title">Sign Up</p>
                <div className="mb-3">
                  <label className="form-label">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail1"
                    name="email"
                    placeholder="Enter your email address"
                    value={this.state.input.email || ""}
                    onChange={this.changeHandler}
                  />
                  <div className="text-danger mb-2">
                    {this.state.errorMsg.email}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    id="inputPassword1"
                    value={this.state.input.password || ""}
                    onChange={this.changeHandler}
                  />
                  <div className="text-danger mb-2">
                    {this.state.errorMsg.password}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number:</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="form-control"
                    id="inputPhoneNumber"
                    value={this.state.input.phone || ""}
                    onChange={this.changeHandler}
                  />
                  <div className="text-danger mb-2">
                    {this.state.errorMsg.phone}
                  </div>
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
  }
}

export default WrapperRegister;
