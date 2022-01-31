import React from "react";
import "../style.css";
import Navdefault from "../../../components/navigation/Nav";


const ResetPassword = () => {
  // function getEmail() {
  //   var parameters = {};
  //   var url = window.location.href;
  //   console.log(url);
  //   var parametersString = url.split('?')[1];
  //   if (typeof parametersString == 'undefined') {
  //     console.log('no url parameter');
  //     return;
  //   }
  //   var parameterString = parametersString.split('&');
  //   for (var index in parameterString) {
  //     var keyValue = parameterString[index].split('=');
  //     var key = keyValue[0];
  //     var value = decodeURIComponent(keyValue[1]);
  //     console.log('Webpage URL parameter key,value: ' + key + ',' + value);
  //     parameters[key] = value;
  //   }

  //   if (typeof parameters.email != 'undefined') {
  //     if (parameters.email.indexOf('#') !== -1) {
  //       parameters.email = parameters.email.slice(0, -1);
  //     }
  //     return parameters.email;
  //   }

  // }
  return (
    <>
    <Navdefault/>
      <div className="reset-password-box">
        <div className="title-bar">
          <div className="title">PASSWORD RESET</div>
        </div>

        {/* <div className="username">
  <label for="username-input" className="username-label">Username</label>
  <input type="text" id="username-input" autofocus/>
</div> */}

        <div className="password">
          <label className="password-label">
            Old Password
          </label>
          <input type="password" id="password-input" />
        </div>

        <div className="new-password">
          <label className="new-password-label">
            New Password
          </label>
          <input type="password" id="new-password-input" />
        </div>

        <div className="password-verification">
          <label className="password--verification-label">
            Password Verification
          </label>
          <input type="password" id="password-verification-input" />
        </div>

        <div className="back-login">
          <div className="back">
            <a href="#">
              <i className="fa fa-angle-double-left"></i> Back to Login
            </a>
          </div>
          <div
            className="reset-password-button"
            // onclick="airTableResetPassword()"
          >
            <a href="#">Reset Password</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
