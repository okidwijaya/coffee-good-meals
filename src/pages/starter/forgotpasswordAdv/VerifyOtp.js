import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
// import OtpInput from "react-otp-input-rc-17";
import PinInput from 'react-pin-input';

import {forgotPass, verifyOTP} from '../../../utils/https/auth';
import '../style.css';
import ResetPassword from './ResetPassword';

function Verifyotp() {
  const style = {
    className: PinInput,
    inputStyle: {
      fontFamily: 'Nunito Sans',
      marginRight: '10px',
      marginBottom: '5px',
      MozAppearance: 'textfield',
      width: '80px',
      borderRadius: '6px',
      fontSize: '30px',
      height: '85px',
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid #6d7499',
      textAlign: 'center',
    },
  };
  const [isReset, setIsReset] = useState(false);
  const [otp, setOtp] = useState(0);
  const [count, setCount] = useState(60); //seconds
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  const secondsToTime = (secs) => {
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    return {
      m: minutes,
      s: seconds,
    };
  };

  const handleChange = (e) => {
    setOtp(e);
    // console.log(this.state.otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = JSON.parse(localStorage['email-user']);
    // console.log("email", email)
    const body = {
      email: email,
      otp: otp,
    };
    verifyOTP(body)
      .then((res) => {
        // console.log(res);
        const code = otp;
        localStorage.setItem('otp', JSON.stringify(code));

        setIsReset(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Invalid OTP');
      });
  };

  const resendOtp = () => {
    const email = JSON.parse(localStorage['email-user']);
    const body = {
      email: email,
    };

    forgotPass(body)
      .then((res) => {
        // console.log(res);
        setCount(60);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (count >= 0) {
      const secondsLeft = setInterval(() => {
        setCount((c) => c - 1);
        let timeLeftVar = secondsToTime(count);
        setMinute(timeLeftVar.m);
        setSecond(timeLeftVar.s);
      }, 1000);
      return () => clearInterval(secondsLeft);
    } else {
      console.log('timeout');
    }
  }, [count]);

  return (
    <>
      <div className='container-verify'>
        {!isReset ? (
          <>
            <p className='forgotpassword-title'>Verification Code</p>
            <p className='forgotpassword-text'>
              Please enter the verification code to verify your account
            </p>
            <form onSubmit={handleSubmit}>
              <div className='userInput'>
                {/* <input
                    type="text"
                    className="col col-md-8 input-email-auth-password"
                    placeholder="Enter your verification code"
                    name="otp"
                  /> */}
                {/* <OtpInput
                    value={this.state.otp}
                    onChange={this.handleChange}
                    numInputs={6}
                    className="otpInput"
                  /> */}
                <PinInput
                  length={6}
                  type='numeric'
                  inputMode='number'
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  autoSelect={true}
                  onChange={handleChange}
                  {...style}
                />
              </div>
              <button className='btn btn-warning btn-verify' type='submit'>
                CONFIRM
              </button>
            </form>

            <p className='forgotpasssword-countdown mt-5'>
              {minute < 9 ? '0' + minute : minute} :{' '}
              {second < 9 ? '0' + second : second}
            </p>
            {count === -1 && (
              <>
                <p className="forgotpasssword-information mt-5">
                  Click here if you didn't receive any code <br />
                  in 1 minutes
                </p>
                <div
                  className='btn btn-resend col-3 d-flex justify-content-center align-items-center'
                  onClick={resendOtp}>
                  Resend Link
                </div>
              </>
            )}
          </>
        ) : (
          <ResetPassword />
        )}
      </div>
    </>
  );
}

export default Verifyotp;
