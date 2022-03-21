import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { resetPassword } from "../../../utils/https/auth";
import "../style.css";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errorMsg: {},
      isValid: false,
      icon1: "far fa-eye-slash",
      icon2: "far fa-eye-slash",
      type1: "password",
      type2: "password",
    };
  }

  handleToggle1 = () => {
    if (this.state.type1 === "password") {
      this.setState({
        icon1: "far fa-eye",
        type1: "text",
      });
    } else {
      this.setState({
        icon1: "far fa-eye-slash",
        type1: "password",
      });
    }
  };

  handleToggle2 = () => {
    if (this.state.type2 === "password") {
      this.setState({
        icon2: "far fa-eye",
        type2: "text",
      });
    } else {
      this.setState({
        icon2: "far fa-eye-slash",
        type2: "password",
      });
    }
  };

  handleChange = (e) => {
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

    if (typeof input["newPass"] !== "undefined") {
      const validPass = new RegExp(
        "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$"
      );
      if (!validPass.test(input["newPass"])) {
        isValid = false;
        errors["newPass"] =
          "Password must be at least 6 characters, including lowercase, uppercase and numbers";
      }
    }

    if (
      typeof input["newPass"] !== "undefined" &&
      typeof input["confirmPass"] !== "undefined"
    ) {
      if (input["newPass"] !== input["confirmPass"]) {
        isValid = false;
        errors["confirmPass"] = "Passwords don't match";
      }
    }
    this.setState({
      errorMsg: errors,
    });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      const { newPass } = this.state.input;
      // console.log(this.state.input);
      const email = JSON.parse(localStorage["email-user"]);
      const otp = JSON.parse(localStorage["otp"]);

      const body = {
        email: email,
        otp: otp,
        password: newPass,
      };

      resetPassword(body)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Password Reset Successfully",
            text: "Please login to continue",
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              let input = {};
              input["newPass"] = "";
              input["confirmPass"] = "";
              this.setState({ input: input });
              localStorage.removeItem("email-user");
              localStorage.removeItem("otp");
              const { navigate } = this.props;
              navigate("/login", { replace: true });

              setTimeout(() => {
                window.location.reload(false);
              }, 5000);
            }
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  render() {
    return (
      <>
        <div className="container-reset">
          <p className="forgotpassword-title">RESET PASSWORD</p>
          <p className="forgotpassword-text">Please enter your new password</p>
          <form onSubmit={this.handleSubmit}>
            <div className="resetPass text-left">
              <label htmlFor="newPass" className="new-resetPass">
                New Password :
              </label>
              <input
                className="form-control new"
                type={this.state.type1}
                name="newPass"
                value={this.state.input.newPass || ""}
                onChange={this.handleChange}
              />
              <div
                className="toggleReset1"
                onClick={this.handleToggle1}
              >
                <i className={this.state.icon1}></i>
              </div>
              <div
                className="text-danger mb-3"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  opacity: "0.9",
                }}
              >
                {this.state.errorMsg.newPass}
              </div>
              <label htmlFor="confirmPass" className="confirm-resetPass">
                Confirm New Password :
              </label>
              <input
                className="form-control confirm"
                type={this.state.type2}
                name="confirmPass"
                value={this.state.input.confirmPass || ""}
                onChange={this.handleChange}
              />
              <div
                className={this.state.errorMsg.newPass ? "toggleReset2 resetIcon" : "toggleReset2"}
                onClick={this.handleToggle2}
              >
                <i className={this.state.icon2}></i>
              </div>
              <div
                className="text-danger mb-5"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  opacity: "0.9",
                }}
              >
                {this.state.errorMsg.confirmPass}
              </div>
            </div>
            <div className="btn-resetPass">
              <button className="btn btn-warning" type="submit">
                Reset Password
              </button>
            </div>
            {/* <div className="cancel-resetPass mt-4">
              <button className="btn btn-secondary" type="button">
                Cancel
              </button>
            </div> */}
          </form>
        </div>
      </>
    );
  }
}

function WrapperResetPass(props) {
  const navigate = useNavigate();

  return <ResetPassword {...props} navigate={navigate} />;
}

export default WrapperResetPass;
