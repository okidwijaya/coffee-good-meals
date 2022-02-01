import React from "react";
import "./index.css";
// import { Link, Outlet } from "react-router-dom";
import Navactive from "../../components/navigation/Nav";
import DetailCard from "../../components/cardDetail";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../utils/https/products";

function ProductDetail(props) {
  const params = useParams();
  return <ProductList id={params.id} />;
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailProduct: {},
      imgProduct: require("../../assets/avocado..jpg"),
    };
    this.target = React.createRef();
  }

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

  render() {
    const { name, price, description } = this.state.detailProduct;
    const { imgProduct } = this.state;

    const formatPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
    return (
      <>
        <Navactive />
        <section className="row">
          <div className="col-12 col-md-6 image-detail-product">
            <p className="title-productDetail">
              Favorite {"&"} Promo {">"} {name}
            </p>
            <img
              src={imgProduct}
              alt="coffee cold"
              className="coffee-productDetail rounded-circle mb-2"
            />
            <p className="brand-coffee">{name}</p>
            <p className="price-coffee">{formatPrice}</p>
            <button className="btn button-addCart">Add to Cart</button>
            <button className="btn button-askStaff">Ask a Staff</button>
          </div>
          <div className="col col-md-6 detail-delivery">
            <div className="col col-md-10 detail-name">
              <p className="delivery-time">
                Delivery only on <b>Monday to friday</b> at <b>12 - 8 pm</b>
              </p>
              <p className="detail-name-delivery">{description}</p>
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
              <label htmlFor="date" className="form-set-time mx-2">
                Set Time :
              </label>
              <input
                type="text"
                className="set-time"
                name="set-time"
                ref={this.target}
                placeholder="Enter the time you arrived"
                // onChange={this.handleChange}
                onFocus={() => (this.target.current.type = "time")}
                onBlur={() => (this.target.current.type = "text")}
              />
            </div>
          </div>
        </section>
        <DetailCard detailProduct={this.state.detailProduct} />
      </>
    );
  }
}

export default ProductDetail;
