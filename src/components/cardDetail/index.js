import React from "react";
import "./index.css";

const DetailCard = (props) => {
  const detailProduct = props.detailProduct;
  const image = process.env.REACT_APP_HOST + `/products/${detailProduct.image}`
  // console.log('product', detailProduct)
  return (
    <>
      <div className="row col-md-12 card-detail mb-5">
        <div className="col-12 col-md-5 detail-card-coffee">
            <div className="row detail-card-product">
                <img src={image} alt="coffee" className="product-image"></img>
                <div className="detail-list-product">
                    <p className="brand-detail-list">{detailProduct.name}</p>
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
        <div className="col-12 col-md-2 checkout">
            <p className="checkout-detail">Checkout</p>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
