/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style.css';
import defaultImg from '../../../assets/cold-brew-hd.png';
import Navactive from '../../../components/navigation/Nav';
import {
  deleteProducts,
  getDetailProduct,
  updateProduct,
} from '../../../utils/https/products';
import {toast} from 'react-toastify';
import {connect} from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom';
import LoadingComponent from '../../../components/LoadingComponent';
import Swal from 'sweetalert2';
import {logoutAction} from '../../../redux/actions/auth';

class Editproduct extends React.Component {
  constructor(props) {
    super(props);
    this.inputFileRef = React.createRef();
    this.onFileChange = this.handleFileChange.bind(this);
    this.onBtnClick = this.inputImage.bind(this);
  }
  state = {
    image: defaultImg,
    counter: 1,
    isSaved: false,
    selectedFile: null,
    selectedSize: 'R',
    productDetail: null,
    deliveryMethods: 'Home Delivery',
  };
  getBase64(e) {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        image: reader.result,
      });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  inputImage = (e) => {
    this.inputFileRef.current.click();
  };
  handleFileChange(e) {
    this.getBase64(e);
    this.setState({
      selectedFile: e.target.files[0],
    });
  }

  componentDidMount() {
    const id = this.props.id;
    console.log('id', id);
    getDetailProduct(id)
      .then((response) => {
        console.log(response.data);
        const newImage =
          process.env.REACT_APP_HOST +
          '/products/' +
          response.data.result.data.image;
        this.setState({
          productDetail: response.data.result.data,
          counter: response.data.result.data.stock,
          image: newImage,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `Something went wrong.
        Please refresh the page.`,
          {
            position: 'top-right',
            autoClose: 5000,
          },
        );
      });
  }
  handleDeleteItem = () => {
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
            if (error.response.data.err_code) {
              if (
                error.response.data.err_code === 'TOKEN_EXPIRED' ||
                error.response.data.err_code === 'INVALID_TOKEN'
              ) {
                this.props.dispatch(logoutAction());
                toast.warning('Token Expired', {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 3000,
                });
              }
            } else {
              console.log(error.response);
              toast.error(error.response.data.msg, {
                position: 'bottom-right',
                autoClose: 5000,
              });
            }
          });
      }
    });
  };
  render() {
    const {counter, productDetail, image} = this.state;
    console.log('pd', productDetail);
    const handleSubmit = (e) => {
      e.preventDefault();
      const token = this.props.token;
      const body = new FormData();
      if (this.state.selectedFile !== null) {
        body.append(
          'image',
          this.state.selectedFile,
          this.state.selectedFile.name,
        );
      }
      const id = this.props.id;
      body.append('id', id);
      body.append('name', e.target.name.value);
      body.append('price', e.target.price.value);
      body.append('description', e.target.description.value);
      body.append('delivery_hours_start', e.target.deliveryStart.value);
      body.append('delivery_hours_end', e.target.deliveryEnd.value);
      body.append('stock', this.state.counter);
      console.log('body', body);
      updateProduct(body, token)
        .then((response) => {
          toast.success('Product Updated.', {
            position: 'top-right',
            autoClose: 5000,
          });
          this.setState({
            isSaved: true,
          });
          // const navigate = this.props.usenavigate;
          // navigate('/products');
        })
        .catch((error) => {
          if (error.response.data.err_code) {
            if (
              error.response.data.err_code === 'TOKEN_EXPIRED' ||
              error.response.data.err_code === 'INVALID_TOKEN'
            ) {
              this.props.dispatch(logoutAction());
              toast.warning('Token Expired', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
              });
            }
          } else {
            console.log(error.response);
            toast.success('Something went wrong.', {
              position: 'top-right',
              autoClose: 5000,
            });
          }
        });
    };
    return (
      <>
        <Navactive />
        {productDetail ? (
          <div className='Add-product-wrapper'>
            <div aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link to='/products' className='breadcrumb-page'>
                    Favorite & Promo
                  </Link>
                </li>
                <li className='breadcrumb-item'>
                  <Link
                    to={`/product/detail/${productDetail.id}`}
                    className='active-page'>
                    {productDetail.name}
                  </Link>
                </li>
                <li className='breadcrumb-item'>
                  <span className='active-page'>Edit product</span>
                </li>
              </ol>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='row add-product-content'>
                <aside className='col-11 col-sm-11 col-md-10 col-lg-5'>
                  <div className='product-img-edit'>
                    <img
                      src={image}
                      className='edit-image'
                      alt='product'
                      onClick={this.inputImage}
                      onError={({currentTarget}) => {
                        console.log(currentTarget);
                        currentTarget.onerror = null;
                        currentTarget.src = require('../../../assets/Veggie-tomato-mix.png');
                      }}
                    />
                  </div>
                  <button
                    className='btn change-img-btn'
                    type='button'
                    onClick={() => {
                      this.handleDeleteItem();
                    }}>
                    <i className='bi bi-trash'></i>
                  </button>
                  <p className='product-time-desc'>
                    Delivery only on <strong>Monday to</strong> <br />
                    <strong>friday</strong> at <strong>1 - 7 pm</strong>
                  </p>
                </aside>
                <input
                  type='file'
                  name='image'
                  id='image'
                  hidden
                  ref={this.inputFileRef}
                  onChange={this.onFileChange}
                />
                <div className='col-11 col-sm-11 col-md-10 col-lg-6 mx-auto'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control edit-product-input'
                      id='formGroupExampleInput'
                      name='name'
                      maxLength={50}
                      placeholder='Type product name min. 50 characters'
                      defaultValue={productDetail.name}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='number'
                      name='price'
                      defaultValue={productDetail.price}
                      className='form-control edit-product-input-price'
                      id='formGroupExampleInput2'
                      placeholder='Type the price'
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      type='description'
                      className='form-control description-product-input'
                      id='formGroupExampleInput2'
                      name='description'
                      maxLength={150}
                      defaultValue={productDetail.description}
                      placeholder='Describe your product min. 150 characters'
                    />
                  </div>

                  <div>
                    <div className='dropdown'>
                      <input
                        type='time'
                        className='btn start-hour-btn'
                        name='deliveryStart'
                        defaultValue={productDetail.delivery_hours_start}
                        placeholder='Select Start Hour'
                      />
                    </div>
                    <div className='dropdown'>
                      <input
                        defaultValue={productDetail.delivery_hours_end}
                        className='btn start-hour-btn'
                        type='time'
                        name='deliveryEnd'
                      />
                    </div>
                  </div>

                  <div className='form-group'>
                    {/* counter btn */}
                    <div className='row mx-0'>
                      <div className='col-4 col-md-3 count-wrapper d-flex align-items-md-center'>
                        <div
                          className='btn edit-product-btn-count'
                          onClick={() => {
                            if (counter > 1) {
                              const newValue = counter - 1;
                              this.setState({
                                counter: newValue,
                              });
                            }
                          }}>
                          -
                        </div>
                        <div className='edit-product-number'>{counter}</div>
                        <div
                          className='btn edit-product-btn-count'
                          onClick={() => {
                            const newValue = counter + 1;
                            this.setState({
                              counter: newValue,
                            });
                          }}>
                          +
                        </div>
                      </div>
                      <button
                        className='col-5 col-md-5 btn-add-toCart border-0 btn-width-form-input-add btn-yellow-color font-brown-color'
                        disabled>
                        Add to cart
                      </button>
                    </div>
                    {!this.state.isSaved ? (
                      <button
                        className='col col-md-auto btn btn-block btn-add-byGallery btn-brown-color font-white-color save-change-btn'
                        type='submit'>
                        Save Changes
                      </button>
                    ) : (
                      <button
                        className='col col-md-auto btn btn-block btn-add-byGallery btn-brown-color font-white-color save-change-btn'
                        type='submit'
                        disabled={true}>
                        Saved
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <LoadingComponent />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
  };
};
function EditProductWrapper(props) {
  const params = useParams();
  const usenavigate = useNavigate();
  console.log('props-wrapper', props.id);
  return (
    <Editproduct
      {...props}
      id={params.id}
      usenavigate={usenavigate}
      token={props.token}
    />
  );
}
export default connect(mapStateToProps)(EditProductWrapper);
