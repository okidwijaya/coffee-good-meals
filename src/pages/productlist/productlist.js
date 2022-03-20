import React from 'react';
import './index.css';
// import { Link, Outlet } from "react-router-dom";
import Navactive from '../../components/navigation/Nav';
import DetailCard from '../../components/cardDetail';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {getDetailProduct, deleteProducts} from '../../utils/https/products';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import {toast} from 'react-toastify';
import SelectRound from '../../components/SelectRound';

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
      imgProduct: require('../../assets/Veggie-tomato-mix.png'),
      selectedSize: 'R',
      selectedMethods: 'Dine In',
    };
    this.target = React.createRef();
  }
  // state = {
  // };

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
        if (image !== null && typeof image !== 'undefined') {
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
      icon: 'error',
      title: 'Are you sure you want to delete this product?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        const token = this.props.token;
        const id = this.props.id;
        console.log('delete', token);
        deleteProducts(id, token)
          .then((response) => {
            const usenavigate = this.props.usenavigate;
            toast.success('Product deleted.', {
              position: 'bottom-right',
              autoClose: 5000,
            });
            usenavigate('/products');
          })
          .catch((error) => {
            console.log(error.response);
            toast.error(error.response.data.msg, {
              position: 'bottom-right',
              autoClose: 5000,
            });
          });
      }
    });
  };
  render() {
    const {name, price, description} = this.state.detailProduct;
    const {imgProduct, selectedMethods} = this.state;
    const role = this.props.role;
    const id = this.props.id;
    console.log('role', role);
    const formatPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
    return (
      <>
        <Navactive />
        <section className='row'>
          <div className='col-12 col-md-6 image-detail-product'>
            <p className='title-productDetail'>
              <Link to='/products'> Favorite {'&'} Promo </Link> {'/'} {name}
            </p>
            <img
              src={imgProduct}
              alt='coffee cold'
              className='coffee-productDetail rounded-circle mb-2'
              onError={({currentTarget}) => {
                console.log(currentTarget);
                currentTarget.onerror = null;
                currentTarget.src = require('../../assets/Veggie-tomato-mix.png');
              }}
            />
            <p className='brand-coffee'>{name}</p>
            <p className='price-coffee'>{formatPrice}</p>
            {role === '1' ? (
              <>
                <button className='btn button-addCart'>Add to Cart</button>
                <button className='btn button-askStaff'>Ask a Staff</button>
              </>
            ) : (
              <>
                <button className='btn button-addCart mb-3'>Add to Cart</button>
                <Link
                  className='btn button-editCart'
                  to={`/product/edit/${id}`}>
                  Edit Product
                </Link>
                <button
                  className='btn button-askStaff'
                  onClick={this.onDelete}
                  type='button'>
                  Delete
                </button>
              </>
            )}
          </div>
          <div className='col col-md-6 detail-delivery'>
            <div className='col col-md-10 detail-name'>
              <p className='delivery-time'>
                Delivery only on <b>Monday to friday</b> at <b>12 - 8 pm</b>
              </p>
              <p className='detail-name-delivery'>{description}</p>
              <p className='choose-size'>Choose a size</p>
              <div className='button-size-choose'>
                <SelectRound
                  value='R'
                  isSelected={this.state.selectedSize === 'R'}
                  onChange={(val) => {
                    this.onChangeSize(val);
                  }}
                />
                <SelectRound
                  value='X'
                  isSelected={this.state.selectedSize === 'X'}
                  onChange={(val) => {
                    this.onChangeSize(val);
                  }}
                />
                <SelectRound
                  value='XL'
                  isSelected={this.state.selectedSize === 'XL'}
                  onChange={(val) => {
                    this.onChangeSize(val);
                  }}
                />
              </div>
            </div>
            <p className='methods-delivery'>Choose Delivery Methods</p>
            <div className='button-methods'>
              <button
                className={`btn delivery-methods ${
                  selectedMethods === 'Dine In' && 'active-delivery'
                }`}
                onClick={() => {
                  this.setState({
                    selectedMethods: 'Dine In',
                  });
                }}>
                Dine n
              </button>
              <button
                className={`btn delivery-methods ${
                  selectedMethods === 'Door Delivery' && 'active-delivery'
                }`}
                onClick={() => {
                  this.setState({
                    selectedMethods: 'Door Delivery',
                  });
                }}>
                Door Delivery
              </button>
              <button
                className={`btn delivery-methods ${
                  selectedMethods === 'Pick Up' && 'active-delivery'
                }`}
                onClick={() => {
                  this.setState({
                    selectedMethods: 'Pick Up',
                  });
                }}>
                Pick Up
              </button>
            </div>
            <div className='col col-md-8 set-time-choose'>
              <label htmlFor='date' className='form-set-time mx-2'>
                Set Time :
              </label>
              <input
                type='text'
                className='set-time'
                name='set-time'
                ref={this.target}
                placeholder='Enter the time you arrived'
                // onChange={this.handleChange}
                onFocus={() => (this.target.current.type = 'time')}
                onBlur={() => (this.target.current.type = 'text')}
              />
            </div>
          </div>
        </section>
        <DetailCard detailProduct={this.state.detailProduct} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.userData.role,
    token: state.auth.userData.token,
  };
};

export default connect(mapStateToProps)(ProductDetail);
// export default ProductDetail;
