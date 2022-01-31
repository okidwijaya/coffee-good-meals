import React from 'react';
import "../style.css";
import defaultImg from "../../../assets/default-img.png";
import Navactive from "../../../components/navigation/Nav";

const Addpromo = () => {
    return (
        <>
        <Navactive />
        <div className="Add-product-wrapper">
  
          <div aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="breadcrumb-page" href="#">Favorite & Promo</a>
              </li>
              <li className="breadcrumb-item">
                <a className="active-page" href="#">Add new promo</a>
              </li>
            </ol>
          </div>
  
          <div className="row add-product-content">
            <aside className="col col-md-4">
              <div>
                <img src={defaultImg} className="add-image" alt="add pic" />
              </div>
              <button className="btn btn-block btn-take-picture">
                Take a picture
              </button>
              <button className="btn btn-block btn-add-byGallery btn-width-container btn-yellow-color font-brown-color">
                Choose from gallery
              </button>
              <div>
                <p className="add-product-title aside-title-input">
                  Enter the Discount:
                </p>
                <div className="dropdown">
                  <button
                    className="btn start-hour-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Input discount
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-wrapper">
                <p className="add-product-title aside-title-input">
                  Expired Date :
                </p>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle start-hour-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select start date
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
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
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="add-product-title aside-title-input">
                  Input Coupon Code:
                </p>
                <div className="dropdown">
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
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
            </aside>
  
            <div className="col col-md-6">
              <form>
                <div className="form-group">
                  <label className="add-product-title">Name :</label>
                  <input
                    type="text"
                    className="form-control add-product-input"
                    id="formGroupExampleInput"
                    placeholder="Type promo name min. 50 characters"
                  />
                </div>
                <div className="form-group">
                  <label className="add-product-title">Normal Price :</label>
                  <input
                    type="text"
                    className="form-control add-product-input"
                    id="formGroupExampleInput2"
                    placeholder="Type the normal price"
                  />
                </div>
                <div className="form-group">
                  <label className="add-product-title">Description :</label>
                  <input
                    type="text"
                    className="form-control add-product-input"
                    id="formGroupExampleInput2"
                    placeholder="Describe your promo min. 150 characters"
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
                  <div className="row w-100 h-25 mx-0">
                    <button className="col mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                      Home Delivery
                    </button>
                    <button className="col mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                      Dine in
                    </button>
                    <button className="col mx-1 btn-take-away border-0 btn-width-form-input-add">
                      Take away
                    </button>
                  </div>
                </div>
                <div className="form-group margin-additional">
                  <button className="col col-md-auto btn btn-block btn-add-byGallery btn-brown-color font-white-color">
                    Save Promo
                  </button>
                  <button className="col col-md-auto btn btn-block btn-take-away">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Addpromo;
