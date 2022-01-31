import React from "react";
import { Link } from "react-router-dom";

import Jason from "../../assets/jason.png";
import Cheryn from "../../assets/cheryn.png";
import Lou from "../../assets/Lou.png";
// import searchIcon from "../../assets/Search-icon.png"

import Navactive from "../../components/navigation/NavActive";
import "./index.css";

function Chat() {
  return (
    <>
      <Navactive />
      <div className="bg-chat">
        <div className="chat-section">
          <div className="row">
            <section className="contact-staff col-lg-4 col-md-4">
              <input
                type="search"
                className="form-control search-chat mx-auto mt-5 mb-5"
                placeholder="Search chat"
              />
              {/* <img src={searchIcon} alt="search icon" className="search" /> */}
              <p>Choose a staff you want to talk with</p>
              <div className="row staff mt-4">
                <div className="img-staff col-lg-3 col-md-3">
                  <img src={Jason} alt="jason" className="rounded-circle" />
                </div>
                <div className="contact-list col-lg-8 col-md-8">
                  <p className="staff-name mb-2">Jason</p>
                  <p>
                    Hey, I'm Jason, Let's talk and share what's on your
                    thoughts!
                  </p>
                </div>
              </div>
              <hr />
              <div className="row staff">
                <div className="img-staff col-lg-3 col-md-3">
                  <img src={Cheryn} alt="jason" className="rounded-circle" />
                </div>
                <div className="contact-list col-lg-8 col-md-8">
                  <p className="staff-name mb-2">Cheryn</p>
                  <p>
                    Hey, I'm Cheryn, can i help you? Just chat me if you have
                    some trouble in ordering, happy shopping!
                  </p>
                </div>
              </div>
              <hr />
              <div className="row staff">
                <div className="img-staff col-lg-3 col-md-3">
                  <img src={Lou} alt="jason" className="rounded-circle" />
                </div>
                <div className="contact-list col-lg-8 col-md-8">
                  <p className="staff-name mb-2">Lou</p>
                  <p>
                    Hey, I'm Lou, I'll here to help you, just talk to me and we
                    solve the problem. Have a good day!
                  </p>
                </div>
              </div>
            </section>
            <section className="room-chat-section col-lg-8 col-md-8">
              <p className="mt-4 mx-5 mb-5">Room Chat</p>
              <Link to="/room-chat">
                <div className="row mt-5 chat">
                  <div className="img-staff col-lg-2 col-md-2">
                    <img
                      src={Jason}
                      alt="jason"
                      className="rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="msg mx-0 col-lg-7 col-md-7">
                    <p className="staff-name mb-2">Jason</p>
                    <p>
                      Hey Jason, I can't find the promo section. Can u tell me
                      where is it?
                    </p>
                  </div>
                  <div className="time col-lg-2 col-md-2">
                    <p>02.14 PM</p>
                  </div>
                </div>
              </Link>
              <hr />
              <div className="last d-flex justify-content-center text-center">
                <p>
                  You have no conversation, start chat other staff! <br /> Have
                  a good day!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
