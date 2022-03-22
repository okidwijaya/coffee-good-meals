import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const DetailCard = (props) => {
  const [counter, setCounter] = useState(1);
  const detailProduct = props.detailProduct;
  const image = process.env.REACT_APP_HOST + `/products/${detailProduct.image}`;
  // console.log('product', detailProduct)

  return (
    <>
      <div className="row col-md-12 card-detail mb-5">
        <div className="col-9 col-md-5 detail-card-coffee">
          <div className="row detail-card-product">
            <img
              src={image}
              alt="coffee"
              className="product-image"
              onError={({ currentTarget }) => {
                console.log(currentTarget);
                currentTarget.onerror = null;
                currentTarget.src = require("../../assets/Veggie-tomato-mix.png");
              }}
            ></img>

            <div className="detail-list-product">
              <p className="brand-detail-list">{detailProduct.name}</p>
              {/* <p className="size-detail">x1 (Large)</p>
              <p className="size-detail">x1 (Regular)</p> */}
            </div>
            <div className="button-counter-detail">
              <button
                className="btn mr-3 minus-detail"
                onClick={() => {
                  if (counter > 1) {
                    setCounter(counter - 1);
                    props.quantity(counter - 1);
                  }
                }}
              >
                -
              </button>
              <button className="btn mr-3 count-detail">{counter}</button>
              <button
                className="btn plus-detail"
                onClick={() => {
                  if (counter < detailProduct.stock) {
                    setCounter(counter + 1);
                    props.quantity(counter + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col col-md-2 checkout"> */}
          <Link to={"/payment"}>
            <button className="btn checkout-detail"><p className="checkoutButton">Checkout</p></button>
          </Link>
        {/* </div> */}
      </div>
    </>
  );
};

export default DetailCard;
