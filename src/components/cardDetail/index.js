import React from "react";
import "./index.css";
import ColdBrew from "../../assets/Cold brew.png";

const DetailCard = () => {
  return (
    <>
      <div className="row col-md-12 card-detail">
        <div className="col col-md-5 detail-card-coffee">
            <div className="row detail-card-product">
                <img src={ColdBrew} alt="coffee" className="product-image"></img>
                <div className="detail-list-product">
                    <p className="brand-detail-list">Cold Brew</p>
                    <p className="size-detail">x1 (Large)</p>
                    <p className="size-detail">x1 (Regular)</p>
                </div>
                <div className="button-counter-detail">
                    <button className="btn mr-3 minus-detail">-</button>
                    <button className="btn mr-3 count-detail">2</button>
                    <button className="btn plus-detail">+</button>
                </div>
            </div>
        </div>
        <div className="col col-md-2 checkout">
            <p className="checkout-detail">Checkout</p>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
