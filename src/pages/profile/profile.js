import React from "react";
import "./index.css";
import Navactive from "../../components/navigation/NavActive";
import imgProfile from "../../assets/default-img.png";
import iconPen from "../../assets/pen-icon.svg";

const Profile = () => {
  return (
    <>
      <Navactive />
      {/* <div className="row profile">
        <div className="bg-profile">
            <div className="title-profile">User Profile</div>
            <div className="detail-profile">
                <aside className="col-3 col-md-3 edit-profile">
                    <img src={imgProfile} alt="imageProfile" className="profile-image"/>
                    <p className="name-profile">Zulaikha</p>
                    <p className="email-profile">zulaikha17@gmail.com</p>
                    <button className="btn choose-photo-profile">Choose photo</button>
                    <button className="btn remove-photo-profile">Remove photo</button>
                    <button className="btn edit-password-profile">Edit Password</button>
                    <p className="save-change">Do you want to save the change?</p>
                    <button className="btn save-profile">Save Change</button>
                    <button className="btn cancel-profile">Cancel</button>
                    <button className="btn logout-profile">Log Out</button>
                </aside>
                <side className="col-9 col-md-9 detail-profile">
                    
                </side>
            </div>
        </div>
      </div> */}
      {/* <div className="row profile">
        <div className="bg-profile">
          <div className="title-profile">User Profile</div>
          <div className="detail-profile">
            <aside className="col-3 col-md-3 edit-profile">
              <img
                src={imgProfile}
                alt="imageProfile"
                className="profile-image"
              />
              <p className="name-profile">Zulaikha</p>
              <p className="email-profile">zulaikha17@gmail.com</p>
              <button className="btn choose-photo-profile">Choose photo</button>
              <button className="btn remove-photo-profile">Remove photo</button>
              <button className="btn edit-password-profile">
                Edit Password
              </button>
              <p className="save-change">Do you want to save the change?</p>
              <button className="btn save-profile">Save Change</button>
              <button className="btn cancel-profile">Cancel</button>
              <button className="btn logout-profile">Log Out</button>
            </aside>
            <div className="col-9 col-md-9 profile-detail"></div>
          </div>
        </div>
      </div> */}
      <div className="row bg-profile">
          <h1 className="title-profile">User Profile</h1>
        <section className="row profile">
          <aside className="col col-md-4 edit-profile">
            <img
              src={imgProfile}
              alt="imageProfile"
              className="profile-image"
            />
            <p className="name-profile">Zulaikha</p>
            <p className="email-profile">zulaikha17@gmail.com</p>
            <button className="btn choose-photo-profile">Choose photo</button>
            <button className="btn remove-photo-profile">Remove photo</button>
            <button className="btn edit-password-profile">Edit Password</button>
            <p className="save-change">Do you want to save the change?</p>
            <button className="btn save-profile">Save Change</button>
            <button className="btn cancel-profile">Cancel</button>
            <button className="btn logout-profile">Log Out</button>
          </aside>
          <div className="col col-md-8 profile-detail">
            <div className="col-md-12 d-flex title-edit-profile">
              <h2 className="contact">Contact</h2>
              <img src={iconPen} alt="icon-edit-profile" />
            </div>
            <div className="row">
              <div className="col-md-8 space">
                <label htmlFor="email" className="form-label">
                  Email address :
                </label>
                <input type="text" className="form-control" name="email" />
              </div>
              <div className="col-md-4 space">
                <label htmlFor="email" className="form-label">
                  Mobile number :
                </label>
                <input type="text" className="form-control" name="contact" />
              </div>
              <div className="col-md-8">
                <label htmlFor="delivery" className="form-label">
                  Delivery address :
                </label>
                <input type="text" className="form-control" name="delivery" />
              </div>
              <div className="col-md-12 d-flex title-edit-profile">
                <h2 className="details">Details</h2>
              </div>
              <div className="col-md-8 space">
                <label htmlFor="name" className="form-label">
                  Display Name :
                </label>
                <input type="text" className="form-control" name="email" />
              </div>
              <div className="col-md-4 space">
                <label htmlFor="dob" className="form-label">
                  DD/MM/YY :
                </label>
                <input type="date" className="form-control" name="dob" />
              </div>
              <div className="col-md-8">
                <label htmlFor="name" className="form-label">
                  First name :
                </label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="col-md-8">
                <label htmlFor="name" className="form-label">
                  Last name :
                </label>
                <input type="text" className="form-control" name="name" />
              </div>
            </div>
            <div className="radio-button-gender">
                <div className="form-check form check inline radioButton1">
                    <input 
                    className="radio-input"
                    type="radio"
                    name="gender"
                    id="male"
                    />
                    <label className="radio-label" htmlFor="inlineRadio1">
                        Male
                    </label>
                </div>
                <div className="form-check form check inline radioButton2">
                    <input 
                    className="radio-input"
                    type="radio"
                    name="gender"
                    id="female"
                    />
                    <label className="radio-label" htmlFor="inlineRadio2">
                        Female
                    </label>
                </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
