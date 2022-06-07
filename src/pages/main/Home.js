import React from "react";
import "./style.css";
import homeBg from "../../assets/barber.jpg";
import userTestimonial from "../../assets/user-icon.png";
import Navactive from "../../components/navigation/Nav";
import { connect } from "react-redux";
// import SignupCard from "../../components/Auth";

const Home = (props) => {
  return (
    <>
      <Navactive />
      <div className="header-wrapper">
        <div>
          <img src={homeBg} className="bgHeader" alt="bgHeader" />
          <div className="row header-description-wrapper">
            <div className="col-8 col-md-7">
              <p className="header-title">Barber Shop</p>
              <p className="header-text">
                Don't ask the barber if you need a haircut, and don't ask the
                academic if what he's doing is relevant.
              </p>
              <button className="col-8 col-md-4 h-20 btn btn-get-started">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="row company-info-header align-items-center justify-content-center">
          <div className="col col-md-3 card-info-header">
            <div className="row">
              <img
                src={userTestimonial}
                className="header-company-info-icon"
                alt="card-testimonial"
              />
              <div className="col header-info-company">
                <p className="header-company-count">90+</p>
                <p className="header-company-people-info">staff</p>
              </div>
            </div>
          </div>
          <div className="col col-md-3 card-info-header">
            <div className="row">
              <img
                src={userTestimonial}
                className="header-company-info-icon"
                alt="card-testimonial"
              />
              <div className="col header-info-company">
                <p className="header-company-count">30+</p>
                <p className="header-company-people-info">store</p>
              </div>
            </div>
          </div>
          <div className="col col-md-3 card-info-header">
            <div className="row">
              <img
                src={userTestimonial}
                className="header-company-info-icon"
                alt="card-testimonial"
              />
              <div className="col header-info-company">
                <p className="header-company-count">800+</p>
                <p className="header-company-people-info">customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Home);
