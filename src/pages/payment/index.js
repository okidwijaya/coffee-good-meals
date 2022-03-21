import React, { useState } from "react";
import "./index.css";
import Navactive from "../../components/navigation/Nav";
import hazelnut from "../../assets/Haxelnut-latte.png";
import cardIcon from "../../assets/card-icon.png";
import bankIcon from "../../assets/Bank-icon.png";
import cash from "../../assets/Cash-on-deliver-icon.png";
import { useSelector } from "react-redux";
import { profile } from "../../utils/https/users";
import { useEffect } from "react";

const formatPrice = (value) => {
  let price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .replace(/(\.|,)00$/g, "");
  return price;
};

const Payment = () => {
  const dataProduct = useSelector((state) => state.cart.products);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const delivery = useSelector((state) => state.cart.delivery);
  const auth = useSelector((state) => state.auth.userData);
  const [user, setUser] = useState({});
  // console.log(delivery);

  const getUserData = () => {
    // console.log(auth.token)
    profile(auth.token)
      .then((res) => {
        console.log("result", res.data.result.data);
        setUser(res.data.result.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Navactive />
      <main className="payment-page">
        <h1 className="title-payment">
          Checkout your <br /> item now!
        </h1>
        <div className="row col-12 col-md-12">
          <div className="col-12 col-md-6">
            <div className="col col-md-10 order-summary">
              <h2 className="title-order-summary">Order Summary</h2>
              {dataProduct.length > 0 &&
                dataProduct.map((product) => (
                  <div className="row detail-summary mb-3" key={product.id}>
                    <div className="col col-md-3 image-order-summary">
                      <img
                        src={`${process.env.REACT_APP_HOST}/products/${product.image}`}
                        alt="hazelnut"
                        className="hazelnut-image"
                        onError={({ currentTarget }) => {
                          // console.log(currentTarget);
                          currentTarget.onerror = null;
                          currentTarget.src = hazelnut;
                        }}
                      />
                    </div>
                    <div className="col col-md-6 detail-order-summary">
                      <p className="name-order-summary">{product.name}</p>
                      <p className="count-summary">x {product.quantity}</p>
                      <p className="size-summary">
                        {product.size === "R" && "Regular"}
                        {product.size === "X" && "Large"}
                        {product.size === "XL" && "Extra Large"}
                      </p>
                    </div>
                    <div className="col col-md-3 pricing">
                      <p className="price-summary">
                        {formatPrice(product.price * product.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              <hr className="line" />
              <div className="row">
                <div className="col col-md-6">
                  <p className="subtotal-summary">SUBTOTAL</p>
                  <p className="tax-fees-summary">TAX {"&"} FEES</p>
                  <p className="shipping-summary">SHIPPING</p>
                  <p className="total-order-summary">TOTAL</p>
                </div>
                <div className="col col-md-6">
                  <p className="price-order-summary">{formatPrice(subTotal)}</p>
                  <p className="price-order-summary">
                    {formatPrice(subTotal * 0.1)}
                  </p>
                  <p className="price-order-summary">
                    {delivery === "Dine In" || delivery === "Pick Up"
                      ? formatPrice(0)
                      : formatPrice(10000)}
                  </p>
                  <p className="total-price-summary">
                    {formatPrice(
                      subTotal +
                        subTotal * 0.1 +
                        (delivery === "Dine In" || delivery === "Pick Up"
                          ? 0
                          : 10000)
                    )}
                  </p>
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
            {delivery !== "Pick Up" && (
              <div className="col col-md-10 detail-address-summary">
                <p className="detail-address">
                  Delivery to{" "}
                  {delivery === "Dine In" ? "Table 4" : user.address}
                </p>
                {/* <p className="address-summary-detail">
                Km 5 refinery road oppsite republic road, effurun, Jakarta
              </p> */}
                <p className="address-summary-detail">{user.phone}</p>
              </div>
            )}
            <div className="col col-md-10 payment-methods">
              <h3 className="payment-methods-title">Payment-methods</h3>
            </div>
            <div className="row col-md-10 payment-detail-summary">
              <div className="row col-md-10 payment-methods-summary">
                <input
                  type="radio"
                  className="select-card"
                  name="payment"
                ></input>
                <img src={cardIcon} alt="iconCard" className="iconCard" />
                <p className="select-payment-summary">Card</p>
              </div>
              <div className="row col-md-10 payment-methods-summary">
                <input
                  type="radio"
                  className="select-card"
                  name="payment"
                ></input>
                <img src={bankIcon} alt="iconCard" className="iconCard" />
                <p className="select-payment-summary">Bank Account</p>
              </div>
              <div className="row col-md-10 payment-methods-summary">
                <input
                  type="radio"
                  className="select-card"
                  name="payment"
                ></input>
                <img src={cash} alt="iconCard" className="iconCard" />
                <p className="select-payment-summary">Cash on Delivery</p>
              </div>
            </div>
            <div className="col col-md-12 button-payment">
              <button className="btn button-confirm-pay">
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Payment;
