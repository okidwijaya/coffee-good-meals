import React from "react";
import logo from "../../assets/icon.svg";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container-fluid">
          <div className="col-sm-2 ml-0  container">
            <div className="navbar-brand">
              <img src={logo} alt="logo" width="30" height="24" />
              <strong>Coffee Shop</strong>
            </div>
          </div>
          <div className="d-flex">
            <div className="btn btn-warning btn-login" type="submit">
              Signup
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
