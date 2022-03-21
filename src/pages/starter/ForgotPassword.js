import React from "react";
import { toast } from "react-toastify";

import background from "../../assets/forgotPasswordBg.png";
import { forgotPass } from "../../utils/https/auth";
import Verifyotp from "./forgotpasswordAdv/VerifyOtp";

class Forgotpassword extends React.Component {
  state = {
    isVerify: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
    };

    forgotPass(body)
      .then((res) => {
        // console.log(res);
        const email = res.data.result.data.email;
        localStorage.setItem("email-user", JSON.stringify(email));
        toast.success("Verification code has been sent. Please check your email!", {
          autoClose: false,
        });
        this.setState({
          isVerify: true,
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { isVerify } = this.state;

    return (
      <>
        <div>
          <img
            src={background}
            alt="img-fluid"
            className="forgotpassword-bg"
            style={{ filter: " grayscale(70%)" }}
          />
        </div>
        <div className="forgotpassword-content">
          {!isVerify ? (
            <>
              <p className="forgotpassword-title">Forgot Your Password ?</p>
              <p className="forgotpassword-text">
                Don't worry, we got your back
              </p>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="email"
                  className="col col-md-8 input-email-auth-password"
                  placeholder="Enter your email adress to get link"
                  name="email"
                />
                <button
                  type="submit"
                  className="col col-md-4 btn btn-warning btn-send-email"
                >
                  Send
                </button>
              </form>
              {/* <p className="forgotpasssword-information">
                Click here if you didn't recieve any link <br />
                in 2 minutes
              </p>
              <div className="btn btn-resend col-3 d-flex justify-content-center align-items-center">
                Resend Link
              </div>
              <p className="forgotpasssword-countdown">01:54</p> */}
            </>
          ) : (
            <Verifyotp/>
          )}
        </div>
      </>
    );
  }
}

export default Forgotpassword;
