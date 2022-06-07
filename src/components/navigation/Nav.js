/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import logo from "../../assets/logo-barber.png";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import NavActive from "./NavActive.js";

const Navdefault = (props) => {
  const token = props.token;
  const role = props.role;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navActive">
        <div className="navbar-brand">
          <Link to="/" className="text-decoration-none">
            <img src={logo} alt="logo" width="30" height="24" />
            <strong>Barber Shop</strong>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="mx-auto">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/booking" className="nav-link">
                  Booking
                </NavLink>
              </li>
              {role === "2" ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/order" className="nav-link">
                      Orders
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link">
                      Dashboard
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/history" className="nav-link">
                      History
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {token ? (
            <NavActive />
          ) : (
            <>
              <Link to="/login" className="btn btn-nav">
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-warning btn-nav btn-yellow-nav"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

// export default Navdefault;

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    role: state.auth.userData.role,
  };
};
export default connect(mapStateToProps)(Navdefault);
