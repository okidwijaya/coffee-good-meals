import React, { useState, useEffect } from "react";
import "../style.css";
import Navactive from "../../../components/navigation/Nav";
import { toast } from "react-toastify";
import { editPromoCoupon, getPromoDetail } from "../../../utils/https/promo";
import { useSelector } from "react-redux";
import { logout } from "../../../utils/https/auth";
import { logoutAction } from "../../../redux/actions/auth";

// import axios from "axios";
// import { editPromoCoupon } from "../../../utils/https/category";
// import defaultImg from "../../../assets/cold-brew-hd.png";

const Editpromo = (props) => {
  const token = useSelector((state) => state.auth.userData.token);
  console.log("my token", token);
  const [valuepdp, setValue] = useState({ discount: 10 });
  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);
  const [getPromo, setGetPromo] = useState([]);

  useEffect(() => {
    const fetchBusinesses = () => {
      getPromoDetail()
        .then((response) => {
          setGetPromo(response.data.result.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchBusinesses();
  }, []);

  const [data, setData] = useState({
    name: "",
    id: "",
    description: "",
    code: "",
    discount: "",
    discount_start: "",
    discount_end: "",
    image: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };
  console.log("image file upl : ", image);

  const handleChange = (e) => {
    const value = e.target.value;

    setValue({ value: e.target.value });
    console.log("value pdp", valuepdp);
    // console.log(image, file);
    // console.log("atrger", e.target);
    setData({
      ...data,
      // setValue(e.target.code):value,
      [e.target.name]: value,
      [e.target.id]: value,
      [e.target.description]: value,
      [e.target.code]: value,
      [e.target.discount]: value,
      [e.target.discount_start]: value,
      [e.target.discount_end]: value,
      [e.target.image]: value,
    });
  };

  console.log("image1 : ", image);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fomradta token : ", token);
    let body = new FormData();
    body.append("name", e.target.name.value);
    body.append("id", getPromo.id);
    body.append("description", e.target.description.value);
    body.append("code", e.target.code.value);
    body.append("discount", valuepdp.value);
    body.append("discount_start", e.target.discount_start.value);
    body.append("discount_end", e.target.discount_end.value);
    if (image) body.append("image", image);

    console.log("body data : ", body);
    console.log(body.discount);
    // console.log("image : ", image);
    editPromoCoupon(body, token)
      .then((response) => {
        console.log("resposnse pos req", body);
        toast.success("Update success.", {
          position: "top-right",
          autoClose: 5000,
        });

        console.log(response);
      })
      .catch((err) => {
        console.log(err, err.message);
        if (
          err.response.data.err_code === "TOKEN_EXPIRED" ||
          err.response.data.err_code === "INVALID_TOKEN"
        ) {
          props.dispatch(logoutAction());
          toast.warning("Token Expired", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      });
  };
  // console.log(data);

  return (
    <>
      <Navactive />
      <div className="Add-product-wrapper">
        <div className="row d-flex justify-content-between mx-auto mt-2 w-100">
          <div aria-label="col-5 col-sm breadcrumb">
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
          <button className="col-3 mx-8 mb-5 btn btn-cancel-edit-promo">
            cancel
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row add-product-content">
            <aside className="col col-md-5">
              <div className="card-coupon-edit align-item-center align-content-center">
                <div>
                  <div>
                    {image && (
                      <img
                        src={imgPrev}
                        className="coupon-edit-img"
                        alt="add pic"
                      />
                    )}
                  </div>
                  <input
                    type="file"
                    onChange={(e) => handleImage(e)}
                    {...data}
                    // value={image.file}
                  />
                </div>
                {/* <img
                    src={defaultImg}
                    className="coupon-edit-img"
                    alt="product img promo"
                  />
                  <button className="change-promo-img-btn">
                    <i className="bi bi-pencil"></i>
                  </button> */}
                <p className="coupon-edit-card-title">
                  {`${getPromo.name}` !== null
                    ? `${getPromo.name}`
                    : "Beef Spaghetti"}
                </p>
                <p className="coupon-edit-card-desc-title">
                  {`${getPromo.discount}` !== null
                    ? `${getPromo.discount}`
                    : "-"}
                  % OFF
                </p>
                <p className="coupon-edit-card-desc-product">
                  {`${getPromo.description}` !== null
                    ? `${getPromo.description}`
                    : "Desctiption null"}
                </p>
                <hr className="dashed" />
                <p className="coupon-edit-card-desc-product">coupon code</p>
                <p className="coupon-edit-card-desc-title">
                  {`${getPromo.code}` !== null ? `${getPromo.code}` : "No code"}
                </p>
                <p className="coupon-edit-card-regulation">
                  Valid untill{" "}
                  {`${getPromo.discount_end}` !== null
                    ? `${getPromo.discount_end}`
                    : "No code"}
                </p>
              </div>

              <div className="form-wrapper">
                <label className="add-product-title">Expired Date:</label>
                <input
                  type="date"
                  className="form-control start-hour-btn"
                  id="formGroupExampleInput"
                  placeholder={
                    `${getPromo.discount_start}` !== null
                      ? `${getPromo.discount_start}`
                      : "Select Start Date"
                  }
                  // value={getPromo.discount_start}
                  name="discount_start"
                  onChange={handleChange}
                />
                <input
                  type="date"
                  className="form-control start-hour-btn"
                  id="formGroupExampleInput"
                  placeholder={
                    `${getPromo.discount_end}` !== null
                      ? `${getPromo.discount_end}`
                      : "Select End Date"
                  }
                  // value=
                  name="discount_end"
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="form-group">
                  <label className="add-product-title">
                    Input Coupon Code:
                  </label>
                  <input
                    type="text"
                    className="form-control start-hour-btn"
                    id="formGroupExampleInput"
                    placeholder={
                      `${getPromo.promo}` !== null
                        ? `${getPromo.promo}`
                        : "Type promo name min. 50 characters"
                    }
                    // value={getPromo.code}
                    name="code"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </aside>

            <p name="id">{getPromo.id}</p>

            <div className="col col-md-6">
              <div className="form-group">
                <label className="add-product-title">Name :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput"
                  placeholder={
                    `${getPromo.name}` !== null
                      ? `${getPromo.name}`
                      : "Type promo name min. 50 characters"
                  }
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
                />
              </div>
              <div className="form-group">
                <label className="add-product-title">Description :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput2"
                  placeholder={
                    `${getPromo.description}` !== null
                      ? `${getPromo.description}`
                      : "Describe your promo min. 150 characters"
                  }
                  // value={getPromo.description}
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
                <div className="row w-100 h-25 mx-0">
                  <button className="col-8 col-sm-7 col-md-7 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                    Home Delivery
                  </button>
                  <button className="col-8 col-sm-7 col-md-7 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                    Dine in
                  </button>
                  <button className="col-8 col-sm-7 col-md-7 btn-take-away border-0 btn-width-form-input-add">
                    Take away
                  </button>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="add-product-title">
                    Enter the Discount:
                  </label>
                  <select
                    value={
                      `${valuepdp.value}` !== null
                        ? `${valuepdp.value}`
                        : `${getPromo.discount}`
                    }
                    name="discount"
                    onChange={handleChange}
                    className="start-hour-btn"
                  >
                    <option value="none" selected disabled>
                      {/* hidden */}
                      Select an Option
                    </option>
                    {/* <option selected disabled>
                    Set Discount
                  </option> */}
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="50">50%</option>
                  </select>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
                <button className="col col-md-auto btn btn-block btn-save-changes btn-brown-color font-white-color">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Editpromo;
