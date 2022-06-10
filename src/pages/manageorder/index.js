import React from "react";
import "./index.css";
import Navactive from "../../components/navigation/Nav";
import hazelnut from "../../assets/Haxelnut-latte.png";
import cardIcon from "../../assets/card-icon.png";
import bankIcon from "../../assets/Bank-icon.png";
import cash from "../../assets/Cash-on-deliver-icon.png"

const ManageOrder = () => {
  return (
    <>
      <Navactive />
      <main className="manage-page">
        <h1 className="title-manage">
          Finish your <br /> customer order now.
        </h1>
        <div className="row">
          <div className="col col-md-6 aside-manage-order">
            <div className="col col-md-10 delivery-order">
              <h2 className="title-manage-order">Delivery Order</h2>
              <div className="row detail-summary">
                <div className="col col-md-3 image-manage-order">
                  <img
                    src={hazelnut}
                    alt="hazelnut"
                    className="hazelnut-image"
                  />
                </div>
                <div className="col col-md-6 detail-manage-order">
                  <p className="name-manage-order">Hazelnut Latte</p>
                  <p className="count-manage-order">x1</p>
                  <p className="size-manage-order">Regular</p>
                </div>
                <div className="col col-md-3 pricing">
                  <p className="price-manage-order">IDR 24.0</p>
                </div>
              </div>
              <div className="row detail-manage-second">
                <div className="col col-md-3 image-manage-order">
                  <img
                    src={hazelnut}
                    alt="hazelnut"
                    className="hazelnut-image"
                  />
                </div>
                <div className="col col-md-6 detail-manage-order">
                  <p className="name-manage-order">Chicken Fire Wings</p>
                  <p className="count-manage-order">x2</p>
                </div>
                <div className="col col-md-3 pricing">
                  <p className="price-manage-order">IDR 24.0</p>
                </div>
              </div>
              <hr className="line-manage-order" />
              <div className="row">
                <div className="col col-md-6">
                  <p className="subtotal-manage-order">SUBTOTAL</p>
                  <p className="tax-fees-manage-order">TAX {"&"} FEES</p>
                  <p className="shipping-manage-order">SHIPPING</p>
                  <p className="total-manage-order">TOTAL</p>
                </div>
                <div className="col col-md-6">
                  <p className="price-manage-order">IDR 120.000</p>
                  <p className="price-manage-order">IDR 20.000</p>
                  <p className="price-manage-order">IDR 10.000</p>
                  <p className="total-price-manage-order">IDR 150.000</p>
                </div>
              </div>
            </div>
            <button className="btn bg-warning swipe-up">Swipe up to upcoming orders</button>
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
              <hr className="line-address"/>
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
                <p className="select-payment-summary">Bank Account</p>
              </div>
              <div className="row col-md-10 payment-methods-summary">
                <input type="radio" className="select-card"></input>
                <img src={cash} alt="iconCard" className="iconCard" />
                <p className="select-payment-summary">Cash on delivery</p>
              </div>
            </div>
            <div className="col col-md-12 button-payment">
                <button className="btn button-done">Mark as done</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ManageOrder;
