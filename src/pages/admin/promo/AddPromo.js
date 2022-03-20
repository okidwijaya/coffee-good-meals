import React, { useState } from "react";
import "../style.css";
import defaultImg from "../../../assets/default-img.png";
import Navactive from "../../../components/navigation/Nav";
import axios from "axios";

const Addpromo = () => {
  const [data, setData] = useState({
    name: "",
    id_category: "",
    description: "",
    code: "",
    discount: "",
    discount_start: "",
    discount_end: "",
    image: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
      [e.target.id_category]: value,
      [e.target.description]: value,
      [e.target.code]: value,
      [e.target.discount]: value,
      [e.target.discount_start]: value,
      [e.target.discount_end]: value,
      [e.target.image]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      id_category: data.id_category,
      description: data.description,
      code: data.code,
      discount: data.discount,
      discount_start: data.discount_start,
      discount_end: data.discount_end,
      image: data.image,
    };
    // console.log(userData);
    axios.post("/", userData).then((response) => {
      // console.log(data);
      console.log(response.status);
      console.log(response.userData);
      // console.log(response.data);

      // console.log(response.data.token);
    });
  };
  console.log(data);

  return (
    <>
      <Navactive />
      <div className="Add-product-wrapper">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="breadcrumb-page" href="/">
                Favorite & Promo
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="active-page" href="/">
                Add new promo
              </a>
            </li>
          </ol>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row add-product-content">
            <aside className="col-11 col-sm-11 col-md-10 col-lg-5">
              <div>
                <img src={defaultImg} className="add-image" alt="add pic" />
              </div>
              <div className="btn btn-block btn-take-picture">
                Take a picture
              </div>
              <div className="btn btn-block btn-add-byGallery btn-width-container btn-yellow-color font-brown-color">
                Choose from gallery
              </div>
              <div>
                <p className="add-product-title">Enter the Discount:</p>
                <div className="dropdown">
                  <div
                    className="btn start-hour-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Input discount
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-wrapper">
                <p className="add-product-title">Expired Date :</p>
                <div className="dropdown">
                  <div
                    className="btn dropdown-toggle start-hour-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select start date
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn start-hour-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select end date
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div>
                {/* <p className="add-product-title">Input Coupon Code:</p> */}
                <div className="form-group">
                  <label className="add-product-title">
                    Input Coupon Code:
                  </label>
                  <input
                    type="text"
                    className="form-control add-code-input"
                    id="formGroupExampleInput"
                    placeholder="Type promo name min. 50 characters"
                    value={data.code}
                    name="code"
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="dropdown">
                  <button
                    className="btn start-hour-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Input Coupon Code
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </div>
                </div> */}
              </div>
            </aside>

            <div className="col-11 col-sm-11 col-md-10 col-lg-6 mx-auto">
              <div className="form-group">
                <label className="add-product-title">Name :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput"
                  placeholder="Type promo name min. 50 characters"
                  value={data.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="add-product-title">Normal Price :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput2"
                  placeholder="Type the normal price"
                  // value={data.price}
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="add-product-title">Description :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput2"
                  placeholder="Describe your promo min. 150 characters"
                  value={data.description}
                  name="description"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <p className="add-product-title">Input product size :</p>
                <p className="form-desc">
                  Click size you want to use for this product
                </p>
                <div>
                  <button className="btn btn-radio btn-yellow-color">R</button>
                  <button className="btn btn-radio btn-yellow-color">X</button>
                  <button className="btn btn-radio btn-yellow-color">XL</button>
                  <button className="btn btn-radio-load">
                    200
                    <br />
                    gr
                  </button>
                  <button className="btn btn-radio-load">
                    300
                    <br />
                    gr
                  </button>
                  <button className="btn btn-radio-load">
                    500
                    <br />
                    gr
                  </button>
                </div>
              </div>
              <div className="form-group">
                <p className="add-product-title">Input delivery methods :</p>
                <p className="form-desc">
                  Click methods you want to use for this product
                </p>
                <div className="row w-100 h-25 mx-auto">
                  <button className="col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                    Home Delivery
                  </button>
                  <button className="col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                    Dine in
                  </button>
                  <button className="col-11 col-md col-lg mx-1 btn-take-away border-0 btn-width-form-input-add">
                    Take away
                  </button>
                </div>
              </div>
              <div className="form-group margin-additional">
                <button
                  type="submit"
                  className="col col-md col-lg btn btn-block btn-add-byGallery btn-brown-color font-white-color"
                >
                  Save Promo
                </button>
                <button className="col col-md col-lg btn btn-block btn-take-away">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addpromo;
