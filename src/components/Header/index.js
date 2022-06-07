import React from "react";
import logo from "../../assets/logo-barber.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container-fluid">
          <div className="col-sm-2 ml-0  container">
            <div className="navbar-brand">
              <img src={logo} alt="logo" width="30" height="24" />
              <strong>Barber Shop</strong>
            </div>
          </div>
          <div className="d-flex">
            <Link to="/login">
              <div className="btn btn-warning btn-login" type="submit">
                Login
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
