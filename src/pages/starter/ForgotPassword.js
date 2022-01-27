/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />
import React from "react";
import background from "../../assets/forgotPasswordBg.png";

const Forgotpassword = () => {
  return (
    <>
      <div>
        <img src={background} alt="img-fluid" className="forgotpassword-bg" style={{filter:' grayscale(70%)'}} />
      </div>
      <div className="forgotpassword-content">
        <p className="forgotpassword-title">Forgot Your Password ?</p>
        <p className="forgotpassword-text">Don't worry, we got your back</p>
        <form>
          <input type="email" className="col col-md-8 input-email-auth-password" placeholder="Enter your email adress to get link" />
          <div className="col col-md-4 btn btn-warning btn-send-email">Send</div>
        </form>
          <p className="forgotpasssword-information">
            Click here if you didn't recieve any link <br />
            in 2 minutes
          </p>
          <div className="btn btn-resend col-3 d-flex justify-content-center align-items-center">Resend Link</div>
          <p className="forgotpasssword-countdown">01:54</p>
      </div>
    </>
  );
};

export default Forgotpassword;
