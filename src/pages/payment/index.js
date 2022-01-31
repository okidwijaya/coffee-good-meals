import React from "react";
import "./index.css";
import Navactive from "../../components/navigation/Nav";
import hazelnut from "../../assets/Haxelnut-latte.png";
import cardIcon from "../../assets/card-icon.png";
import bankIcon from "../../assets/Bank-icon.png";
import cash from "../../assets/Cash-on-deliver-icon.png"

const Payment = () => {
  return (
    <>
      <Navactive />
      <main className="payment-page">
        <h1 className="title-payment">
          Checkout your <br /> item now!
        </h1>
        <div className="row">
          <div className="col col-md-6">
            <div className="col col-md-10 order-summary">
              <h2 className="title-order-summary">Order Summary</h2>
              <div className="row detail-summary">
                <div className="col col-md-3 image-order-summary">
                  <img
                    src={hazelnut}
                    alt="hazelnut"
                    className="hazelnut-image"
                  />
                </div>
                <div className="col col-md-6 detail-order-summary">
                  <p className="name-order-summary">Hazelnut Latte</p>
                  <p className="count-summary">x1</p>
                  <p className="size-summary">Regular</p>
                </div>
                <div className="col col-md-3 pricing">
                  <p className="price-summary">IDR 24.0</p>
                </div>
              </div>
              <div className="row detail-summary-second">
                <div className="col col-md-3 image-order-summary">
                  <img
                    src={hazelnut}
                    alt="hazelnut"
                    className="hazelnut-image"
                  />
                </div>
                <div className="col col-md-6 detail-order-summary">
                  <p className="name-order-summary">Chicken Fire Wings</p>
                  <p className="count-summary">x2</p>
                </div>
                <div className="col col-md-3 pricing">
                  <p className="price-summary">IDR 24.0</p>
                </div>
              </div>
              <hr className="line" />
              <div className="row">
                <div className="col col-md-6">
                  <p className="subtotal-summary">SUBTOTAL</p>
                  <p className="tax-fees-summary">TAX {"&"} FEES</p>
                  <p className="shipping-summary">SHIPPING</p>
                  <p className="total-order-summary">TOTAL</p>
                </div>
                <div className="col col-md-6">
                  <p className="price-order-summary">IDR 120.000</p>
                  <p className="price-order-summary">IDR 20.000</p>
                  <p className="price-order-summary">IDR 10.000</p>
                  <p className="total-price-summary">IDR 150.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className="row col-md-10">
              <div className="col col-md-10 address-details">
                <h3 className="address-details-title">Address details</h3>
              </div>
              <div className="col col-md-2 edit-address">
                <p className="edit-address">edit</p>
              </div>
            </div>
            <div className="col col-md-10 detail-address-summary">
              <p className="detail-address">Delivery to Iskandar Street</p>
              <p className="address-summary-detail">
                Km 5 refinery road oppsite republic road, effurun, Jakarta
              </p>
              <p className="address-summary-detail">+62 81348287878</p>
            </div>
            <div className="col col-md-10 payment-methods">
              <h3 className="payment-methods-title">Payment-methods</h3>
            </div>
            <div className="row col-md-10 payment-detail-summary">
              <div className="row col-md-10 payment-methods-summary">
                <input type="radio" className="select-card"></input>
                <img src={cardIcon} alt="iconCard" className="iconCard" />
                <p className="select-payment-summary">Card</p>
              </div>
              <div className="row col-md-10 payment-methods-summary">
                <input type="radio" className="select-card"></input>
                <img src={bankIcon} alt="iconCard" className="iconCard" />
                <p className="select-payment-summary">Card</p>
              </div>
              <div className="row col-md-10 payment-methods-summary">
                <input type="radio" className="select-card"></input>
                <img src={cash} alt="iconCard" className="iconCard" />
                <p className="select-payment-summary">Card</p>
              </div>
            </div>
            <div className="col col-md-12 button-payment">
                <button className="btn button-confirm-pay">Confirm and Pay</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Payment;
