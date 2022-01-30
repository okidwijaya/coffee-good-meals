import React from "react";
import "./style.css";
import { Link, Outlet } from "react-router-dom";
import Navactive from "../../components/navigation/NavActive";
import couponImg from "../../assets/promo-today-st.svg";
import couponImg2 from "../../assets/promo-today-icon-nd.png";
import productImg from "../../assets/Veggie-tomato-mix.png";

const Product = () => {
  return (
    <>
      <Navactive />
      <div className="row product-page flex-row-reverse flex-md-row">
        <aside className="col-12 col-md-3 promo-section-product">
          <p className="promo-product-title">Promo Today</p>
          <p className="promo-product-description">
            Coupons will be updated every weeks.<br /> Check them out!
          </p>
          {/* card coupn component*/}
          <div className="col-9 col-md-6 col-lg-9 btn couponCard green-couponCard">
            <img src={couponImg} alt="promoImg" className="promo-coupon-img" />
            <p className="promo-today-title">
              <strong>HAPPY MOTHER'S DAY!</strong> <br />
              Get one of our favorite <br /> menu for free!
            </p>
          </div>
          <div className="col-9 col-md-6 col-lg-9 btn couponCard yellow-couponCard ">
            <img src={couponImg2} alt="promoImg" className="promo-coupon-img" />
            <div>
              <p className="promo-today-title">
                <strong>HAPPY MOTHER'S DAY!</strong> <br />
                Get one of our favorite <br /> menu for free!
              </p>
            </div>
          </div>
          <div className="col-9 col-md-6 col-lg-9 btn couponCard green-couponCard ">
            <img src={couponImg} alt="promoImg" className="promo-coupon-img" />
            <div>
              <p className="promo-today-title">
                <strong>HAPPY MOTHER'S DAY!</strong> <br />
                Get one of our favorite <br /> menu for free!
              </p>
            </div>
          </div>
          <div className="col-9 col-md-6 col-lg-9 btn couponCard semi-brown-couponCard ">
            <img src={couponImg} alt="promoImg" className="promo-coupon-img" />
            <div>
              <p className="promo-today-title">
                <strong>HAPPY MOTHER'S DAY!</strong> <br />
                Get one of our favorite <br /> menu for free!
              </p>
            </div>
          </div>

          <div className="col-9 col-md-6 col-lg-9 btn btn-apply-coupon">
            Apply Coupon
          </div>
          <div className="terms">
            <p className="li-terms-coupon-title">Terms and Conditions</p>
            <ul className="list-group list-group-numbered">
              <li className="list-group-item li-terms-coupon">
                You can only apply 1 coupon per day
              </li>
              <li className="list-group-item li-terms-coupon">
                It only for dine in
              </li>
              <li className="list-group-item li-terms-coupon">
                Buy 1 get 1 only for new user
              </li>
              <li className="list-group-item li-terms-coupon">
                Should make member card to apply coupon
              </li>
            </ul>
          </div>
        </aside>
        <div className="col-12 col-md-9 productsNavigation" id="activeMenu">
         <div className="product-link-wrapper">
         <Link className="products-navigation active" to="/products/list">
            Favourite and Promo
          </Link>
          <Link className="products-navigation" to="/products/search">
            Coffee
          </Link>
          <Link className="products-navigation" to="/products/noncoffee">
            Non Coffee
          </Link>
          <Link className="products-navigation" to="/products/foods">
            Foods
          </Link>
          <Link className="products-navigation" to="/products/addon">
            Add on
          </Link>
         </div>
          <Outlet />

          {/* card component */}
          <div className="container product-content-wrapper">
            <div className="row">
              <div className="col product-item">
                <img
                  src={productImg}
                  className="img-thumbnail product-img-container"
                  alt="productImg"
                />
                <p className="product-title">Product Title</p>
                <p className="product-price">Product Price</p>
              </div>
              <div className="col product-item">
                <img
                  src={productImg}
                  className="img-thumbnail product-img-container"
                  alt="productImg"
                />
                <p className="product-title">Product Title</p>
                <p className="product-price">Product Price</p>
              </div>
              <div className="col product-item">
                <img
                  src={productImg}
                  className="img-thumbnail product-img-container"
                  alt="productImg"
                />
                <p className="product-title">Product Title</p>
                <p className="product-price">Product Price</p>
              </div>
              <div className="col product-item">
                <img
                  src={productImg}
                  className="img-thumbnail product-img-container"
                  alt="productImg"
                />
                <p className="product-title">Product Title</p>
                <p className="product-price">Product Price</p>
              </div>
            </div>
          </div>
          <p>*the price has been cutted by discount appears</p>
        </div>
      </div>
    </>
  );
};

export default Product;
