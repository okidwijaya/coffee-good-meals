/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import defaultImg from "../../../assets/cold-brew-hd.png";
import Navactive from "../../../components/navigation/Nav";

const Editproduct = () => {
  const [counter, setCounter] = React.useState(1);
  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };

  return (
    <>
      <Navactive />
      <div className="Add-product-wrapper">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="breadcrumb-page" href="#">
                Favorite & Promo
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="active-page" href="#">
                Cold Brew
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="active-page" href="#">
                Edit product
              </a>
            </li>
          </ol>
        </div>

        <div className="row add-product-content">
          <aside className="col col-md-5">
            <div className="product-img-edit">
              <img src={defaultImg} className="edit-image" alt="edit pic" />
            </div>
            <button className="btn change-img-btn"><i className="bi bi-trash"></i></button>
            <p className="product-time-desc">
              Delivery only on <strong>Monday to</strong> <br />
              <strong>friday</strong> at <strong>1 - 7 pm</strong>
            </p>
          </aside>

          <div className="col col-md-6">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control edit-product-input"
                  id="formGroupExampleInput"
                  placeholder="Type product name min. 50 characters"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control edit-product-input-price"
                  id="formGroupExampleInput2"
                  placeholder="Type the price"
                />
              </div>
              <div className="form-group">
                <textarea
                  type="description"
                  className="form-control description-product-input"
                  id="formGroupExampleInput2"
                  placeholder="Describe your product min. 150 characters"
                />
              </div>

              <div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle start-hour-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select start hour
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
                    Select end hour
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

              <div className="form-group my-5">
                {/* counter btn */}
               <div className="row">
               <div className="col-3 count-wrapper d-flex align-items-md-center">
                  <div className="btn edit-product-btn-count" onClick={subCounter}>
                    -
                  </div>
                  <div className="edit-product-number">{counter}</div>
                  <div className="btn edit-product-btn-count" onClick={addCounter}>
                    +
                  </div>
                </div>
                <button className="col-5 mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color font-brown-color ">
                  Add to cart
                </button>
               </div>
                <button className="col col-md-auto btn btn-block btn-add-byGallery btn-brown-color font-white-color save-change-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editproduct;
