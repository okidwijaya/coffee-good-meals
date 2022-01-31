import React from "react";
import Navdefault from "../../../components/navigation/Nav";
import "../style.css";


const Verifyotp = () => {
  // function clickEvent(first, last) {
  //   if (first.value.length) {
  //     document.getElementById(last).focus();
  //   }
  // }
  return (
    <>
    <Navdefault />
      <div class="container-verify">
        <h1>ENTER OTP</h1>
        <div class="userInput">
          <input
            type="text"
            id="ist"
            maxlength="1"
            onkeyup="clickEvent(this,'sec')"
          />
          <input
            type="text"
            id="sec"
            maxlength="1"
            onkeyup="clickEvent(this,'third')"
          />
          <input
            type="text"
            id="third"
            maxlength="1"
            onkeyup="clickEvent(this,'fourth')"
          />
          <input
            type="text"
            id="fourth"
            maxlength="1"
            onkeyup="clickEvent(this,'fifth')"
          />
          <input type="text" id="fifth" maxlength="1" />
        </div>
        <button class="btn btn-warning">CONFIRM</button>
      </div>
    </>
    //   <OtpInput
    //     value={this.state.otp}
    //     onChange={this.handleChange}
    //     numInputs={6}
    //     separator={<span>-</span>}
    //   />
  );
};

export default Verifyotp;
