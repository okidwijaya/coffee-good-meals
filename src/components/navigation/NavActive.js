/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/icon.svg";
import chat from "../../assets/chat-icon.png";
import imgProfile from "../../assets/profile-bg.png"
import './style.css'

const Navactive = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navActive">
        <div className="navbar-brand">
          <img src={logo} alt="logo" width="30" height="24" />
          <strong>Coffee Shop</strong>
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
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Your Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                History
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 search-nav">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
          </form>
          <button className="btn chat-nav">
            <img src={chat} alt="chat icon" className="chat-img-nav"/>
          </button>
          <button className="btn btn-profile-nav">
            <img src={imgProfile} className="profile-img-nav" alt="chat icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navactive;
