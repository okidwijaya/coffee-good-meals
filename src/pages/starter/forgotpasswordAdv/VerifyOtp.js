import React from "react";
import { toast } from "react-toastify";
import { verifyOTP } from "../../../utils/https/auth";
import "../style.css";
import ResetPassword from "./ResetPassword";

class Verifyotp extends React.Component {
  state = {
    isReset: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const email = JSON.parse(localStorage["email-user"]);
    // console.log("email", email)
    // console.log("otp", e.target.otp.value)
    const body = {
      email: email,
      otp: e.target.otp.value,
    };

    verifyOTP(body)
      .then((res) => {
        // console.log(res);
        const otp = e.target.otp.value;
        localStorage.setItem("otp", JSON.stringify(otp));

        this.setState({
          isReset: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Invalid OTP", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
  };

  render() {
    const { isReset } = this.state;

    return (
      <>
        <div className="container-verify">
          {!isReset ? (
            <>
              <p className="forgotpassword-title">Verification Code</p>
              <p className="forgotpassword-text">
                Please enter the verification code to verify your account
              </p>
              <form onSubmit={this.handleSubmit}>
                <div className="userInput">
                  <input
                    type="text"
                    className="col col-md-8 input-email-auth-password"
                    placeholder="Enter your verification code"
                    name="otp"
                  />
                </div>
                <button className="btn btn-warning btn-verify" type="submit">
                  CONFIRM
                </button>
              </form>
            </>
          ) : (
            <ResetPassword />
          )}
        </div>
      </>
    );
  }
}

export default Verifyotp;
