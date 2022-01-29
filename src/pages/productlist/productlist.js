import React from "react";
import "./index.css";
// import { Link, Outlet } from "react-router-dom";
import Navactive from "../../components/navigation/NavActive";
import ColdBrew from "../../assets/Cold brew.png";

const ProductList = () => {
  return (
    <>
      <Navactive />
      <section className="row">
        <div className="col col-md-6 image-detail-product">
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
           <button className="btn button-askStaff">Ask a Staff</button>
        </div>
        <div className="col col-md-6 bg-success detail-delivery">
          

          <p className="methods-delivery">Choose Delivery Methods</p>
          <div className="button-methods">
            <button className="btn dine">Dine in</button>
            <button className="btn door">Door Delivery</button>
            <button className="btn pick">Pick Up</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
