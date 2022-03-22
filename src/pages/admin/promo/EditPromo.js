import React, { useState, useEffect } from "react";
import "../style.css";
import Navactive from "../../../components/navigation/Nav";
import { toast } from "react-toastify";
import { editPromoCoupon, getPromoDetail } from "../../../utils/https/promo";
import { useSelector } from "react-redux";
import { logout } from "../../../utils/https/auth";
import { logoutAction } from "../../../redux/actions/auth";
import defaultImg from "../../../assets/default-img.png";
import SelectRound from "../../../components/SelectRound";
import { useParams } from "react-router-dom";

// import axios from "axios";
// import { editPromoCoupon } from "../../../utils/https/category";

const Editpromo = (props) => {
  const token = useSelector((state) => state.auth.userData.token);
  console.log("my token", token);
  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);
  const [getPromo, setGetPromo] = useState([]);
  const [imageShow, setImageShow] = useState(null);

  // const idp = props.id;
  // console.log(idp);

  let idpromos = useParams();
  console.log("parms :", idpromos);

  useEffect(() => {
    const fetchBusinesses = () => {
      getPromoDetail(idpromos.id)
        .then((response) => {
          setGetPromo(response.data.result.data);
          console.log(response.data);
          setImageShow(response.data.result.data.image);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchBusinesses();
  }, []);

  console.log("img promo", imageShow);
  const imgpreview = `${process.env.REACT_APP_HOST}/promos/${imageShow}`;
  console.log("imgurl", imgpreview);

  const [data, setData] = useState({
    name: "",
    id: "",
    description: "",
    code: "",
    discount: "",
    discount_start: "",
    discount_end: "",
    image: "",
    R: true,
    X: true,
    XL: true,
    dine_in: true,
    home_delivery: true,
    take_away: true,
    categories: null,
    selectedCategory: null,
    canSubmit: false,
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fomradta token : ", token);
    let body = new FormData();
    body.append("name", data.name);
    body.append("id", getPromo.id);
    body.append("description", data.description);
    body.append("code", data.code);
    body.append("discount", data.discount);
    body.append("discount_start", data.discount_start);
    body.append("discount_end", data.discount_end);
    body.append("R", data.R);
    body.append("X", data.X);
    body.append("XL", data.XL);
    body.append("dine_in", data.dine_in);
    body.append("home_delivery", data.home_delivery);
    body.append("take_away", data.take_away);
    if (image) body.append("image", image);

    console.log("body data : ", body);
    console.log(body.discount);
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
                  {image &&
                  (
                    <img
                      src={imgPrev}
                      className="coupon-edit-img"
                      alt="add pic"
                    />
                  ) !== null ? (
                    <img
                      src={imgPrev}
                      className="coupon-edit-img"
                      alt="add pic"
                    />
                  ) : (
                    <img
                      src={defaultImg}
                      className="coupon-edit-img"
                      alt="add pic"
                    />
                  )}

                  <div className="pencil-edit-promo">
                    <input
                      type="file"
                      id="file"
                      className="change-promo-img-btn img-edit-promo"
                      onChange={(e) => handleImage(e)}
                      {...data}
                    />
                    <label
                      htmlFor="file"
                      className="input-file-edit-btn change-promo-img-btn"
                    >
                      <i className="bi bi-pencil"></i>
                    </label>
                  </div>
                  {/* <input
                    type="file"
                    onChange={(e) => handleImage(e)}
                    {...data}
                    // value={image.file}
                  /> */}
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
                    name="code"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </aside>

            {/* <p name="id">{getPromo.id}</p> */}

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
                  <SelectRound
                    value="R"
                    name="R"
                    isSelected={data.R}
                    onChange={(val) => {
                      setData({ ...data, R: !data.R });
                    }}
                  />
                  <SelectRound
                    value="X"
                    name="X"
                    isSelected={data.X}
                    onChange={(val) => {
                      setData({ ...data, X: !data.X });
                    }}
                  />
                  <SelectRound
                    value="XL"
                    name="XL"
                    isSelected={data.XL}
                    onChange={(val) => {
                      setData({ ...data, XL: !data.XL });
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <p className="add-product-title">Input delivery methods :</p>
                <p className="form-desc">
                  Click methods you want to use for this product
                </p>
                <div className="row w-100 h-25 mx-0">
                  <button
                    type="button"
                    className={`col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer ${
                      data.home_delivery && " btn-yellow-color"
                    }`}
                    onClick={() => {
                      setData({ ...data, home_delivery: !data.home_delivery });
                    }}
                  >
                    Home Delivery
                  </button>
                  <button
                    type="button"
                    className={`col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer ${
                      data.dine_in && " btn-yellow-color"
                    }`}
                    onClick={() => {
                      setData({
                        ...data,
                        dine_in: !data.dine_in,
                      });
                    }}
                  >
                    Dine In
                  </button>
                  <button
                    type="button"
                    className={`col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add cursor-pointer ${
                      data.take_away && " btn-yellow-color"
                    }`}
                    onClick={() => {
                      setData({
                        ...data,
                        take_away: !data.take_away,
                      });
                    }}
                  >
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
                    name="discount"
                    onChange={handleChange}
                    className="start-hour-btn"
                  >
                    <option value="none" selected disabled>
                      Select an Option
                    </option>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="50">50%</option>
                  </select>
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
