import React from "react";
import chat from "../../assets/chat-icon.png";
import imgProfile from "../../assets/profile-bg.png";

export default function NavActive() {
  return (
    <>
      <form className="form-inline my-2 my-lg-0 search-nav">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
      </form>
      <button className="btn chat-nav">
        <img src={chat} alt="chat icon" className="chat-img-nav" />
      </button>
      <button className="btn btn-profile-nav">
        <img src={imgProfile} className="profile-img-nav" alt="chat icon" />
      </button>
    </>
  );
}
