/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/icon.svg";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

const Navdefault = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navActive">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="logo" width="30" height="24" />
            <strong>Coffee Shop</strong>
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
                <NavLink to="/products" className="nav-link">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Your Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/history" className="nav-link">
                  History
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-warning">Login</button>
          <button className="btn btn-warning">SignUp</button>
        </div>
      </nav>
    </>
  );
};

export default Navdefault;
