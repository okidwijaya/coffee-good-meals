import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EditPassword = () => {
  return (
    <>
      <div className="row change-password">
        <div className="col-md-12">
          <div className="col-md-10 form-change-password">
            <h1 className="change-password-component">Change Password</h1>
            <label htmlFor="password" className="form-edit-password">
              Current Password :
            </label>
            <input type="text" className="form-control" name="email" />
            <label htmlFor="password" className="form-edit-password">
              New Password :
            </label>
            <input type="text" className="form-control" name="email" />
            <label htmlFor="password" className="form-edit-password">
              Repeat New Password :
            </label>
            <input type="text" className="form-control" name="email" />
            <button className="btn save-change-profile">Save Change</button>
            <Link to="/profile" replace={true} className="btn close-edit-profile">Close</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPassword;
