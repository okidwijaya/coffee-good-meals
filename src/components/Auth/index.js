import React from "react";
import '../style.css';

const SignupCard = () => {
  return (
    <>
      <div className="d-inline-flex member-card justify-content-center align-items-center">
        <div className="mx-auto">
          <p className="promo-card-signup">Get your member<br/>card now!</p>
          <p className="promo-card-signup-text">Let's join with our member and enjoy the deals.</p>
        </div>
        <div className="btn btn-warning mx-auto btn-card-promo-signup">Create Now</div>
      </div>
    </>
  );
};

export default SignupCard;
