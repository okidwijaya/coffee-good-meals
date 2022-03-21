import React, { useState, useEffect } from "react";
import "../style.css";
import Navactive from "../../../components/navigation/Nav";
import { getCategory } from "../../../utils/https/category";
import { toast } from "react-toastify";
import { addPostPromo } from "../../../utils/https/promo";
import { useSelector } from "react-redux";
// import axios from "axios";
// import defaultImg from "../../../assets/default-img.png";
import { logout } from "../../../utils/https/auth";
import { logoutAction } from "../../../redux/actions/auth";

// import { Link, useNavigate } from "react-router-dom";

const Addpromo = (props) => {
  const token = useSelector((state) => state.auth.userData.token);
  console.log("my token", token);
  const [valuepdp, setValue] = useState({ discount: 10 });
  const [categories, setCategory] = useState([]);
  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);

  // const handleSubmitDpd = (e) => {
  //   e.preventDefault();
  // };

  // const handleChangedpd = (e) => {
  //   setValue({ value: e.target.value });
  //   console.log(valuepdp);
  // };

  // CATEGORY LOOPING
  // let obj = {
  //   array: [],
  // };
  // for (var l = 0; l < 100; l++) {
  //   obj.array[l] = l + 1;
  // }
  // return (
  //     <div>
  //         <select>
  //             {obj.array.length > 0 && obj.array.map((item) =>
  //                 <option key={item.array}>{item.array}</option>
  //              )}
  //         </select>
  //     </div>
  // )

  useEffect(() => {
    const fetchBusinesses = () => {
      getCategory()
        .then((response) => {
          console.log(response.data);
          setCategory(response.data.result.data);
          console.log("category : ", categories[0].category);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchBusinesses();
  }, []);

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
      [e.target.id_category]: value,
      [e.target.description]: value,
      [e.target.code]: value,
      [e.target.discount]: value,
      [e.target.discount_start]: value,
      [e.target.discount_end]: value,
      [e.target.image]: value,
    });
  };

  console.log("image1 : ", image);

  // const body = {
  //   name: data.name,
  //   id_category: data.id_category,
  //   description: data.description,
  //   code: data.code,
  //   discount: data.valuepdp,
  //   discount_start: data.discount_start,
  //   discount_end: data.discount_end,
  //   image: data.image,
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fomradta token : ", token);
    let body = new FormData();
    body.append("name", e.target.name.value);
    body.append("id_category", e.target.id_category.value);
    body.append("description", e.target.description.value);
    body.append("code", e.target.code.value);
    body.append("discount", valuepdp.value);
    body.append("discount_start", e.target.discount_start.value);
    body.append("discount_end", e.target.discount_end.value);
    if (image) body.append("image", image);

    console.log("body data : ", body);
    console.log(body.discount);
    // console.log("image : ", image);
    addPostPromo(body, token)
      .then((response) => {
        console.log("resposnse pos req", body);
        toast.success("Promo Added.", {
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
              <div
              // value={image.file}
              // name="image"
              >
                {image && (
                  <img src={imgPrev} className="add-image" alt="add pic" />
                )}
              </div>
              <input
                type="file"
                onChange={(e) => handleImage(e)}
                {...data}
                // value={image.file}
              />
              <div className="btn btn-block btn-take-picture">
                Take a picture
              </div>
              <div className="btn btn-block btn-add-byGallery btn-width-container btn-yellow-color font-brown-color">
                Choose from gallery
              </div>

              <div>
                <label className="add-product-title">Enter the Discount:</label>
                <select
                  value={valuepdp.value}
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

              <div className="form-wrapper">
                <label className="add-product-title">Expired Date:</label>
                <input
                  type="date"
                  className="form-control start-hour-btn"
                  id="formGroupExampleInput"
                  placeholder="Select Start Date"
                  // value={data.discount_start}
                  name="discount_start"
                  onChange={handleChange}
                />
                <input
                  type="date"
                  className="form-control start-hour-btn"
                  id="formGroupExampleInput"
                  placeholder="Select End Date"
                  // value={data.discount_end}
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
                    placeholder="Type promo name min. 50 characters"
                    // value={data.code}
                    name="code"
                    onChange={handleChange}
                  />
                </div>
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
                  // value={data.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="add-product-title">Category :</label>

                <select
                  value={categories.id}
                  name="id_category"
                  onChange={handleChange}
                  className="start-hour-btn"
                >
                  <option value="none" selected disabled hidden>
                    Select an Option
                  </option>
                  {categories.length > 0 &&
                    categories.map((category, idx) => (
                      <option value={category.id} key={idx}>
                        {category.category}
                      </option>
                    ))}
                </select>
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

{
  /* <div>
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
              </div> */
}

{
  /* <div className="dropdown">
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
                </div> */
}
