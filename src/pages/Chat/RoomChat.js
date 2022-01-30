import React from "react";

import Jason from "../../assets/jason.png";
import Cheryn from "../../assets/cheryn.png";
import Lou from "../../assets/Lou.png";
import Samantha from "../../assets/girl-with-red-clothes.png";
import Checklist from "../../assets/check.svg";
import cameraIcon from "../../assets/camera-icon.svg";

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
            <section className="room-chat-detail col-lg-8 col-md-8">
              <p className="mt-4 mx-5 mb-5">Jason</p>
              <div className="row mt-5 chat">
                <div className="msg-detail col-lg-7 col-md-6">
                  <p>
                    Hey Jason, I can't find the promo section. Can u tell me
                    where is it?
                    <img
                      src={Checklist}
                      alt="checklis"
                      className="checklist1"
                    />
                    <img
                      src={Checklist}
                      alt="checklis"
                      className="checklist2"
                    />
                  </p>
                  <p className="time-msg-1">02.14 PM</p>
                </div>
                <div className="img-user px-5 col-lg-2 col-md-3">
                  <img
                    src={Samantha}
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
              </div>
              <hr />
              <div className="row mt-4 chat">
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
                <div className="msg content mx-0 col-lg-7 col-md-7">
                  <p>
                    Hey, thanks for asking. It's in product menu, you can see
                    them on the left side.
                  </p>
                  <p className="time-msg-2">02.14 PM</p>
                </div>
              </div>
              <div className="chat-box d-flex justify-content-center">
                <input
                  className="input-chat"
                  type="text"
                  placeholder="Type a message..."
                />
                <img src={cameraIcon} alt="camera" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
