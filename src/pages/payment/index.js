import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { editProfile, profile } from "../../utils/https/users";
import { createTransaction } from "../../utils/https/transactions";
import { logoutAction } from "../../redux/actions/auth";

import "./index.css";
import Navactive from "../../components/navigation/Nav";
import hazelnut from "../../assets/Haxelnut-latte.png";
import cardIcon from "../../assets/card-icon.png";
import bankIcon from "../../assets/Bank-icon.png";
import cash from "../../assets/Cash-on-deliver-icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/actions/cart";

const formatPrice = (value) => {
  let price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .replace(/(\.|,)00$/g, "");
  return price;
};

function WrapperPayment(props) {
  const navigate = useNavigate();

  return <Payment {...props} navigate={navigate} />;
}

const Payment = (props) => {
  const input1 = useRef();
  const input2 = useRef();
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.cart.products);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const delivery = useSelector((state) => state.cart.delivery);
  const auth = useSelector((state) => state.auth.userData);
  const [user, setUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const promo = useSelector((state) => state.promo);

  const getUserData = () => {
    profile(auth.token)
      .then((res) => {
        setUser(res.data.result.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  const handleSubmit = () => {
    let data = {};
    const listProduct = [];
    const products = dataProduct;
    Array.isArray(products) &&
      products.forEach((product) => {
        data = {
          id_products: product.product_id,
          quantity: product.quantity,
        };
        listProduct.push(data);
      });
    // console.log('list', list)
    const body = {
      user_id: user.id,
      sub_total: subTotal,
      tax_fee: subTotal * 0.1,
      shipping: delivery === "Dine In" || delivery === "Pick Up" ? 0 : 10000,
      total:
        subTotal +
        subTotal * 0.1 +
        (delivery === "Dine In" || delivery === "Pick Up" ? 0 : 10000),
      list: listProduct,
    };
    // console.log("body", body);

    createTransaction(auth.token, body)
      .then((res) => {
        console.log(res.data);
        toast.success("Payment success");
        dispatch(emptyCart());
        const { navigate } = props;
        return navigate("/history", { replace: true });
      })
      .catch((err) => {
        console.error(err.response);
        if (err.response.data.err_code) {
          if (
            err.response.data.err_code === "TOKEN_EXPIRED" ||
            err.response.data.err_code === "INVALID_TOKEN"
          ) {
            this.props.dispatch(logoutAction());
            toast.warning("Token Expired");
          }
        }
      });
  };

  const saveAddress = (e) => {
    e.preventDefault();

    setIsEdit(false);
    const body = {
      address: input1.current.value,
      phone: input2.current.value,
    };
    // console.log("address", input1.current);
    // console.log("phone", input2.current);
    // console.log('body', body)

    editProfile(body, auth.token)
      .then((res) => {
        console.log(res);
        getUserData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserData();
  });
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
              {dataProduct.length === 0 ? (
                <p className="cart-empty">- Your cart is empty -</p>
              ) : (
                <>
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
                      <p className="shipping-summary">COUPON</p>
                      <p className="total-order-summary">TOTAL</p>
                    </div>
                    <div className="col col-md-6">
                      <p className="price-order-summary">
                        {formatPrice(subTotal)}
                      </p>
                      <p className="price-order-summary">
                        {formatPrice(subTotal * 0.1)}
                      </p>
                      <p className="price-order-summary">
                        {delivery === "Dine In" || delivery === "Pick Up"
                          ? formatPrice(0)
                          : formatPrice(10000)}
                      </p>
                      <p className="price-order-summary">
                        {formatPrice(subTotal * (promo.discount/100))}
                      </p>
                      <p className="total-price-summary">
                        {formatPrice(
                          subTotal -
                          (subTotal * (promo.discount/100)) +
                            subTotal * 0.1 +
                            (delivery === "Dine In" || delivery === "Pick Up"
                              ? 0
                              : 10000)
                        )}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col col-md-6">
            {delivery !== "Pick Up" && (
              <>
                <div className="row col-md-10">
                  <div className="col col-md-10 address-details">
                    <h3 className="address-details-title">Address details</h3>
                  </div>
                  <div className="col col-md-2 edit-address">
                    {!isEdit ? (
                      <p
                        className="edit-address"
                        onClick={() => setIsEdit(true)}
                      >
                        edit
                      </p>
                    ) : (
                      <p className="edit-address" onClick={saveAddress}>
                        save
                      </p>
                    )}
                  </div>
                </div>

                <div className="col col-md-10 detail-address-summary">
                  {!isEdit ? (
                    <>
                      <p className="detail-address">
                        Delivery to{" "}
                        {delivery === "Dine In" ? "Table 4" : user.address}
                      </p>
                      {/* <p className="address-summary-detail">
                  Km 5 refinery road oppsite republic road, effurun, Jakarta
                </p> */}
                      <p className="address-summary-detail">{user.phone}</p>
                    </>
                  ) : (
                    <>
                      <form>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          defaultValue={user.address}
                          placeholder="Address"
                          ref={input1}
                        />
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          defaultValue={user.phone}
                          placeholder="Phone number"
                          ref={input2}
                        />
                      </form>
                    </>
                  )}
                </div>
              </>
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
              <button className="btn button-confirm-pay" onClick={handleSubmit}>
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WrapperPayment;
