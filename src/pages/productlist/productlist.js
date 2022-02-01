import React from "react";
import "./index.css";
// import { Link, Outlet } from "react-router-dom";
import Navactive from "../../components/navigation/Nav";
import ColdBrew from "../../assets/Cold brew.png";
import DetailCard from "../../components/cardDetail";

const ProductList = () => {
  return (
    <>
      <Navactive />
      <section className="row">
        <div className="col-12 col-md-6 image-detail-product">
          <p className="title-productDetail">
            Favorite {"&"} Promo {">"} Cold Brew
          </p>
          <img
            src={ColdBrew}
            alt="coffee cold"
            className="coffee-productDetail"
          />
          <p className="brand-coffee">Cold Brew</p>
          <p className="price-coffee">IDR 30.000</p>
          <button className="btn button-addCart">Add to Cart</button>
          <button className="btn button-askStaff">Ask a Staff</button>
        </div>
        <div className="col-12 col-md-6 detail-delivery">
          <div className="col col-md-10 detail-name">
            <p className="delivery-time">
              Delivery only on <b>Monday to friday</b> at <b>1 - 7 pm</b>
            </p>
            <p className="detail-name-delivery">
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and steeped for as long as
              48 hours.
            </p>
            <p className="choose-size">Choose a size</p>
            <div className="button-size-choose">
              <button className="btn btn-radio btn-yellow-color">R</button>
              <button className="btn btn-radio btn-yellow-color">X</button>
              <button className="btn btn-radio btn-yellow-color">XL</button>
            </div>
          </div>
          <p className="methods-delivery">Choose Delivery Methods</p>
          <div className="button-methods">
            <button className="btn dine">Dine in</button>
            <button className="btn door">Door Delivery</button>
            <button className="btn pick">Pick Up</button>
          </div>
          <div className="col col-md-8 set-time-choose">
            <label htmlFor="email" className="form-set-time">
              Set Time :
            </label>
            <input type="text" className="set-time" name="set-time" placeholder="Enter the time you arrived"/>
          </div>
        </div>
      </section>
      <DetailCard />
    </>
  );
};

export default ProductList;
