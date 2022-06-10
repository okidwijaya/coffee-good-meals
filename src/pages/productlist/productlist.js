import React from "react";
import "./index.css";
// import { Link, Outlet } from "react-router-dom";
import Navactive from "../../components/navigation/Nav";
import DetailCard from "../../components/cardDetail";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetailProduct, deleteProducts } from "../../utils/https/products";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import SelectRound from "../../components/SelectRound";
import LoadingComponent from "../../components/LoadingComponent";
import { dataCart } from "../../redux/actions/cart";

function ProductDetail(props) {
  const params = useParams();
  const usenavigate = useNavigate();
  return <ProductList id={params.id} usenavigate={usenavigate} {...props} />;
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailProduct: {},
      imgProduct: require("../../assets/Veggie-tomato-mix.png"),
      selectedSize: "R",
      selectedMethods: "Dine In",
      setTime: "",
      qty: 1,
    };
    this.target = React.createRef();
  }

  onChangeSize = (value) => {
    this.setState({
      selectedSize: value,
    });
  };

  componentDidMount() {
    const productId = this.props.id;
    //  console.log('product id', productId)

    getDetailProduct(productId)
      .then((res) => {
        const data = res.data.result.data;
        const image = res.data.result.data.image;
        //  console.log('detail img', image);
        if (image !== null && typeof image !== "undefined") {
          this.setState({
            imgProduct: process.env.REACT_APP_HOST + `/products/${image}`,
          });
        }
        this.setState({
          detailProduct: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  onDelete = () => {
    Swal.fire({
      icon: "error",
      title: "Are you sure you want to delete this product?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = this.props.token;
        const id = this.props.id;
        console.log("delete", token);
        deleteProducts(id, token)
          .then((response) => {
            console.log(response);
            const usenavigate = this.props.usenavigate;
            toast.success("Product deleted.");
            usenavigate("/products");
          })
          .catch((error) => {
            console.log(error.response);
            toast.error(error.response.data.msg);
          });
      }
    });
  };

  counter = (data) => {
    // console.log("data", data);
    this.setState({ qty: data });
  };

  addCart = () => {
    const data = 
      // ...this.props.cart,
      {
        // product: this.state.detailProduct,
        delivery: this.state.selectedMethods,
        name: this.state.detailProduct.name,
        price: this.state.detailProduct.price,
        image: this.state.detailProduct.image,
        size: this.state.selectedSize,
        time: this.state.setTime,
        product_id: this.state.detailProduct.id,
        quantity: this.state.qty,
      }
    // ];
    console.log("cart", data);
    this.props.dispatch(dataCart(data));
    toast.success("Added to cart");

    // console.log(this.state.qty, "counter");
  };
  render() {
    // console.log("props", this.props.token, this.props.role);
    const { name, price, description } = this.state.detailProduct;
    const { imgProduct, selectedMethods } = this.state;

    const role = this.props.role;
    const id = this.props.id;
    // console.log("role", role);
    const formatPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price).replace(/(\.|,)00$/g, "");

    // console.log("size", this.state.selectedSize);
    // console.log("method", this.state.selectedMethods);
    // console.log("time", this.state.setTime);
    return (
      <>
        <Navactive />
        {this.state.detailProduct.name ? (
          <>
            <section className="row">
              <div className="col-12 col-md-6 image-detail-product">
                <p className="title-productDetail">
                  <Link to="/products"> Favorite {"&"} Promo </Link> {"/"}{" "}
                  {name}
                </p>
                <img
                  src={imgProduct}
                  alt="coffee cold"
                  className="coffee-productDetail rounded-circle mb-2"
                  onError={({ currentTarget }) => {
                    console.log(currentTarget);
                    currentTarget.onerror = null;
                    currentTarget.src = require("../../assets/Veggie-tomato-mix.png");
                  }}
                />
                <p className="brand-coffee">{name}</p>
                <p className="price-coffee">{formatPrice}</p>
                {role === "1" ? (
                  <>
                    {/* <Link to={"/payment"}> */}
                    <button
                      className="btn button-addCart"
                      onClick={this.addCart}
                    >
                      Add to Cart
                    </button>
                    {/* </Link> */}
                    <button className="btn button-askStaff">Ask a Staff</button>
                  </>
                ) : (
                  <>
                    <button className="btn button-addCart mb-3">
                      Add to Cart
                    </button>
                    {this.props.token && this.props.role === "2" && (
                      <>
                        <Link
                          className="btn button-editCart"
                          to={`/product/edit/${id}`}
                        >
                          Edit Product
                        </Link>
                        <button
                          className="btn button-askStaff"
                          onClick={this.onDelete}
                          type="button"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="col col-md-6 detail-delivery">
                <div className="col col-md-10 detail-name">
                  <p className="delivery-time">
                    Delivery only on <b>Monday to friday</b> at <b>12 - 8 pm</b>
                  </p>
                  <p className="detail-name-delivery">{description}</p>
                  <p className="choose-size">Choose a size</p>
                  <div className="button-size-choose">
                    <SelectRound
                      value="R"
                      isSelected={this.state.selectedSize === "R"}
                      onChange={(val) => {
                        this.onChangeSize(val);
                      }}
                    />
                    <SelectRound
                      value="X"
                      isSelected={this.state.selectedSize === "X"}
                      onChange={(val) => {
                        this.onChangeSize(val);
                      }}
                    />
                    <SelectRound
                      value="XL"
                      isSelected={this.state.selectedSize === "XL"}
                      onChange={(val) => {
                        this.onChangeSize(val);
                      }}
                    />
                  </div>
                </div>
                <p className="methods-delivery">Choose Delivery Methods</p>
                <div className="button-methods">
                  <button
                    className={`btn delivery-methods ${
                      selectedMethods === "Dine In" && "active-delivery"
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedMethods: "Dine In",
                      });
                    }}
                  >
                    Dine In
                  </button>
                  <button
                    className={`btn delivery-methods ${
                      selectedMethods === "Door Delivery" && "active-delivery"
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedMethods: "Door Delivery",
                      });
                    }}
                  >
                    Door Delivery
                  </button>
                  <button
                    className={`btn delivery-methods ${
                      selectedMethods === "Pick Up" && "active-delivery"
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedMethods: "Pick Up",
                      });
                    }}
                  >
                    Pick Up
                  </button>
                </div>
                <div className="col col-md-8 set-time-choose">
                  <label htmlFor="date" className="form-set-time mx-2">
                    Set Time :
                  </label>
                  <input
                    type="text"
                    className="set-time"
                    name="time"
                    ref={this.target}
                    placeholder="Enter the time you arrived"
                    onChange={(e) => this.setState({ setTime: e.target.value })}
                    onFocus={() => (this.target.current.type = "time")}
                    onBlur={() => (this.target.current.type = "text")}
                  />
                </div>
              </div>
            </section>
            <DetailCard
              detailProduct={this.state.detailProduct}
              quantity={this.counter}
            />
          </>
        ) : (
          <LoadingComponent />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.userData.role,
    token: state.auth.userData.token,
    cart: state.cart.item,
  };
};

export default connect(mapStateToProps)(ProductDetail);
// export default ProductDetail;
