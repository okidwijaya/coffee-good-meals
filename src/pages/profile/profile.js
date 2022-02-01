import React from "react";
import "./index.css";

import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
  deletePhoto,
  editPassword,
  editProfile,
  profile,
} from "../../utils/https/users";
import { logout } from "../../utils/https/auth";
import { logoutAction, updateUserPhoto } from "../../redux/actions/auth";

import Navactive from "../../components/navigation/Nav";
import iconPen from "../../assets/pen-icon.svg";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.target = React.createRef(null);
    this.state = {
      userData: "",
      profilePic: require("../../assets/avatar.jpg"),
      selectedGender: "",
      selectedFile: null,
      show: false,
      isEdit: true,
      input: {},
      errorMsg: {},
      isValid: false,
    };
  }

  getUserData = () => {
    const image = this.props.photo;
    const token = this.props.token;
    // console.log('token',token)
    // console.log('image', image)

    profile(token)
      .then((res) => {
        // console.log(res.data.result.data);
        const moment = require("moment");
        let dob = moment(res.data.result.data.dob).format("YYYY-MM-DD");
        // console.log(dob)
        const result = { ...res.data.result.data, dob };

        if (image !== null) {
          this.setState({
            profilePic: process.env.REACT_APP_HOST + `/users/${image}`,
          });
        }
        this.setState({
          userData: result,
          selectedGender: res.data.result.data.gender,
        });
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getUserData();
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      selectedGender: e.target.value,
    });
  };

  fileSelectedHandler = (e) => {
    // console.log(e.target.files[0]);
    const uploaded = e.target.files[0];
    this.setState({
      selectedFile: e.target.files[0],
      profilePic: URL.createObjectURL(uploaded),
    });
  };

  // Edit profile
  submitHandler = (e) => {
    e.preventDefault();

    const token = this.props.token;

    const body = new FormData();
    if (this.state.selectedFile !== null) {
      body.append(
        "image",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    }
    body.append("email", e.target.email.value);
    body.append("phone", e.target.phone.value);
    body.append("address", e.target.address.value);
    body.append("display_name", e.target.displayName.value);
    body.append("first_name", e.target.firstName.value);
    body.append("last_name", e.target.lastName.value);
    body.append("dob", e.target.dob.value);
    body.append("gender", this.state.selectedGender);

    editProfile(body, token)
      .then((res) => {
        console.log(res.data);
        const image = res.data.result.data.image;
        if (image !== null && typeof image !== "undefined") {
          this.props.dispatch(updateUserPhoto(image));
        }
        this.getUserData();
        toast.success("Profile updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Profile update is failed", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  cancelHandler = (e) => {
    const image = this.state.userData.image;
    // console.log(image)
    if (image !== null && typeof image !== "undefined") {
      this.setState({
        profilePic: process.env.REACT_APP_HOST + `/users/${image}`,
      });
    }
    this.setState({
      selectedGender: this.state.userData.gender,
    });
  };

  // edit Password
  changeHandler = (e) => {
    let input = this.state.input;
    input[e.target.name] = e.target.value;
    this.setState({
      input,
    });
  };

  validate = (e) => {
    let errors = {};
    let input = this.state.input;
    let isValid = true;

    if(typeof input["newPass"] !== "undefined") {
      const validPass = new RegExp('^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$');
      if (!validPass.test(input["newPass"])) {
        isValid = false;
        errors["newPass"] = "Password must be at least 6 characters, including uppercase letter and numbers"
      }
    }

    if (
      typeof input["newPass"] !== "undefined" &&
      typeof input["confirmPass"] !== "undefined"
    ) {
      if (input["newPass"] !== input["confirmPass"]) {
        isValid = false;
        errors["confirmPass"] = "Passwords don't match";
      }
    }
    this.setState({
      errorMsg: errors,
    });
    return isValid;
  };

  submitPasswordHandler = (e) => {
    e.preventDefault();
    if (this.validate()) {
      let input = {};
      input["currentPass"] = "";
      input["newPass"] = "";
      input["confirmPass"] = "";
      this.setState({ input: input });

      const { currentPass, newPass } = this.state.input;
      // console.log(this.state.input);

      const data = {
        currentPass: currentPass,
        newPass: newPass,
      };
      const token = this.props.token;
      // console.log(data);

      editPassword(data, token)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Password Updated Successfully",
            text: "Please login again to continue",
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              this.props.dispatch(logoutAction());
              const { navigate } = this.props;
              navigate("/login", { replace: true });

              setTimeout(() => {
                window.location.reload(false);
              }, 5000);
            }
          });
          // console.log("update success")
        })
        .catch((err) => {
          let errors = {};
          errors["currentPass"] = "Password is invalid";
          this.setState({
            errorMsg: errors,
          });
          // console.error(err);
        });
    }
  };

  onLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        const token = this.props.token;
        logout(token)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));

        this.props.dispatch(logoutAction());
        Swal.fire({
          title: "Logout Successful",
          text: "You have successfully logged out",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 5000);
      }
    });
  };

  deletePhoto = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to remove this photo?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const token = this.props.token;
        deletePhoto(token)
          .then((res) => {
            console.log(res);
            const image = null;
            // console.log("image", image);
            this.props.dispatch(updateUserPhoto(image));
            this.getUserData();
          })
          .catch((err) => console.error(err));
        Swal.fire({
          title: "photo removed successfully",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 5000);
      }
    });
  };

  render() {
    const { display_name, address, dob, email, phone, first_name, last_name } =
      this.state.userData;
    const { profilePic, selectedGender, isEdit } = this.state;
    // console.log("photo user", this.state.userData.image);
    return (
      <>
        <Navactive />
        <div className="row bg-profile">
          <h1 className="title-profile">User Profile</h1>
          <form onSubmit={this.submitHandler} onReset={this.cancelHandler}>
            <section className="row profile">
              <aside className="col-12 col-md-4 edit-profile">
                <div className="image-profile-wrapper">
                  <img
                    src={profilePic}
                    alt="imageProfile"
                    className="profile-image rounded-circle"
                  />
                </div>
                <input
                  type="file"
                  onChange={this.fileSelectedHandler}
                  ref={this.target}
                  style={{ display: "none" }}
                />
                <p className="name-profile">{display_name}</p>
                <p className="email-profile">{email}</p>
                <button
                  className="btn choose-photo-profile"
                  type="button"
                  onClick={() => this.target.current.click()}
                >
                  Choose photo
                </button>
                <button
                  className="btn remove-photo-profile"
                  type="button"
                  onClick={this.deletePhoto}
                >
                  Remove photo
                </button>
                {/* <Link to="/profile/edit-password" className="btn edit-password-profile" replace={true}>
                {/* <Link to="/profile/password" replace={true}> */}
                {/* Edit Password */}
                {/* </Link> */}
                <button
                  className="btn edit-password-profile"
                  type="button"
                  onClick={() => {
                    this.setState({ show: !this.state.show });
                  }}
                >
                  Edit Password
                </button>
                <p className="save-change">Do you want to save the change?</p>
                <button className="btn save-profile" type="submit">
                  Save Change
                </button>
                <button className="btn cancel-profile" type="reset">
                  Cancel
                </button>
                <button
                  className="btn logout-profile"
                  type="button"
                  onClick={this.onLogout}
                >
                  Log Out
                </button>
              </aside>
              <div className="col-12 col-md-8 profile-detail">
                <div className="col-md-12 px-0 mb-1 d-flex title-edit-profile">
                  <h2 className="contact">Contacts</h2>
                  <img
                    src={iconPen}
                    alt="icon-edit-profile"
                    onClick={() => {
                      this.setState({ isEdit: !this.state.isEdit });
                    }}
                  />
                </div>
                <div className="row">
                  <div className="col-md-8 space">
                    <label htmlFor="email" className="form-label">
                      Email address :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      defaultValue={email}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="col-md-4 space">
                    <label htmlFor="email" className="form-label">
                      Mobile number :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      defaultValue={phone}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="col-md-8">
                    <label htmlFor="delivery" className="form-label">
                      Delivery address :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      defaultValue={address}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="col-md-12 mb-2 d-flex title-edit-profile">
                    <h2 className="details">Details</h2>
                  </div>
                  <div className="col-md-8 space">
                    <label htmlFor="name" className="form-label">
                      Display Name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="displayName"
                      defaultValue={display_name}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="col-md-4 space">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth :
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      defaultValue={dob}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="col-md-8">
                    <label htmlFor="name" className="form-label">
                      First name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      defaultValue={first_name}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="col-md-8">
                    <label htmlFor="name" className="form-label">
                      Last name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      defaultValue={last_name}
                      disabled={isEdit}
                    />
                  </div>
                </div>
                <div className="radio-button-gender">
                  <div className="form-check form check inline radioButton1">
                    <input
                      className="radio-input"
                      type="radio"
                      name="gender"
                      id="male"
                      defaultValue="M"
                      checked={selectedGender === "M"}
                      onChange={this.handleChange}
                      disabled={isEdit}
                    />
                    <label className="radio-label mx-1" htmlFor="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form check inline radioButton2">
                    <input
                      className="radio-input"
                      type="radio"
                      name="gender"
                      id="female"
                      defaultValue="F"
                      checked={selectedGender === "F"}
                      onChange={this.handleChange}
                      disabled={isEdit}
                    />
                    <label className="radio-label mx-1" htmlFor="inlineRadio2">
                      Female
                    </label>
                  </div>
                </div>
                {/* <Outlet /> */}
              </div>
            </section>
          </form>
        </div>

        {/* Modal */}
        <div className="modal-editPass">
          <Modal show={this.state.show} className="modal-edit-password">
            <Modal.Header>
              <Modal.Title className="mx-auto">EDIT PASSWORD</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-editPass">
              <form
                className="form-container"
                onSubmit={this.submitPasswordHandler}
              >
                <label htmlFor="currentPass" className="current-pass">
                  Current Password :
                </label>
                <input
                  className="form-control current mb-3"
                  type="password"
                  name="currentPass"
                  value={this.state.input.currentPass || ""}
                  onChange={this.changeHandler}
                />
                <div className="text-danger mb-2">
                  {this.state.errorMsg.currentPass}
                </div>
                <label htmlFor="newPass" className="new-pass">
                  New Password :
                </label>
                <input
                  className="form-control new"
                  type="password"
                  name="newPass"
                  value={this.state.input.newPass || ""}
                  onChange={this.changeHandler}
                />
                <div className="text-danger mb-2">
                  {this.state.errorMsg.newPass}
                </div>
                <label htmlFor="confirmPass" className="confirm-pass">
                  Confirm New Password :
                </label>
                <input
                  className="form-control confirm"
                  type="password"
                  name="confirmPass"
                  value={this.state.input.confirmPass || ""}
                  onChange={this.changeHandler}
                />
                <div className="text-danger mb-2">
                  {this.state.errorMsg.confirmPass}
                </div>
                <div className="col-md-12 text-center mt-5 changePass">
                  <button type="submit" className="btn btn-warning">
                    Change Password
                  </button>
                </div>
                <div className="col-md-12 text-center mt-3 cancel-edit">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      this.setState({ show: !this.state.show });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    photo: state.auth.userData.photo,
  };
};

function WrapperProfile(props) {
  const navigate = useNavigate();

  return <Profile {...props} navigate={navigate} />;
}

export default connect(mapStateToProps)(WrapperProfile);
