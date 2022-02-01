/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import '../style.css';
import defaultImg from '../../../assets/default-img.png';
import Navactive from '../../../components/navigation/Nav';
import {Link, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {addProduct} from '../../../utils/https/products';
import {getCategory} from '../../../utils/https/category';
import {toast} from 'react-toastify';
class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.inputFileRef = React.createRef();
    this.onFileChange = this.handleFileChange.bind(this);
    this.onBtnClick = this.inputImage.bind(this);
  }
  state = {
    image: defaultImg,
    selectedFile: null,
    selectedSize: 'R',
    categories: null,
    deliveryMethods: 'Home Delivery',
  };
  componentDidMount() {
    getCategory()
      .then((response) => {
        console.log(response.data);
        this.setState({
          categories: response.data.result.data,
        });
      })
      .catch();
  }
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
  showCategory(data) {
    const elements = [];
    for (let i = 0; i < data.length; i++) {
      const element = (
        <option value={data[i].id} key={`category-${data[i].id}`}>
          {data[i].category}
        </option>
      );
      elements.push(element);
    }
    return elements;
  }
  render() {
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
      body.append('name', e.target.name.value);
      body.append('price', e.target.price.value);
      body.append('category_id', e.target.category.value);
      body.append('description', e.target.description.value);
      body.append('size', this.state.selectedSize);
      body.append('delivery_methods', this.state.deliveryMethods);
      body.append('delivery_hours_start', e.target.deliveryStart.value);
      body.append('delivery_hours_end', e.target.deliveryEnd.value);
      body.append('stock', e.target.stock.value);
      console.log('body', body);
      addProduct(body, token)
        .then((response) => {
          toast.success('Product Added.', {
            position: 'top-right',
            autoClose: 5000,
          });
          const navigate = this.props.usenavigate;
          navigate('/products');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const {image, categories} = this.state;
    return (
      <>
        <Navactive />
        <div className='Add-product-wrapper'>
          <div aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link className='breadcrumb-page' to='/products'>
                  Favorite & Promo
                </Link>
              </li>
              <li className='breadcrumb-item'>
                <Link className='active-page' to='/product/add'>
                  Add new product
                </Link>
              </li>
            </ol>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='row add-product-content'>
              <aside className='col col-md-4'>
                <div>
                  <img
                    src={image}
                    className='add-image'
                    alt='add pic'
                    onClick={this.inputImage}
                  />
                </div>
                <button
                  className='btn btn-block btn-take-picture'
                  onClick={this.inputImage}>
                  Take a picture
                </button>
                <button
                  className='btn btn-block btn-add-byGallery btn-width-container btn-yellow-color font-brown-color '
                  onClick={this.inputImage}>
                  Choose from gallery
                </button>
                <div className='form-wrapper'>
                  <p className='add-product-title aside-title-input'>
                    Delivery Hour :
                  </p>
                  <div className='delivery-hour'>
                    <input
                      type='file'
                      name='image'
                      id='image'
                      ref={this.inputFileRef}
                      onChange={this.onFileChange}
                      hidden
                    />
                    <input
                      type='time'
                      name='deliveryStart'
                      className='start-hour-btn px-3'
                      ref={this.startHour}
                      defaultValue={'12:00'}
                      placeholder='Select start hour'
                    />
                  </div>
                  <div className='delivery-hour'>
                    <input
                      type='time'
                      name='deliveryEnd'
                      className='start-hour-btn px-3'
                      ref={this.endHour}
                      defaultValue={'21:00'}
                      placeholder='Select end hour'
                    />
                  </div>
                </div>
                <div>
                  <p className='add-product-title aside-title-input'>
                    Input Stock:
                  </p>
                  <div className='stock-input'>
                    <input
                      type='number'
                      min={1}
                      name='stock'
                      className='start-hour-btn px-3'
                      placeholder='Input stock'
                    />
                  </div>
                </div>
              </aside>
              <div className='col col-md-6'>
                <div className='form-group'>
                  <label className='add-product-title' htmlFor='name'>
                    Name :
                  </label>
                  <input
                    type='text'
                    className='form-control add-product-input'
                    id='formGroupExampleInput'
                    placeholder='Type product name min. 50 characters'
                    name='name'
                  />
                </div>
                <div className='form-group'>
                  <label className='add-product-title' htmlFor='category'>
                    Category :
                  </label>
                  <select
                    name='category'
                    id='category'
                    className='form-control add-product-input'>
                    {categories && this.showCategory(categories)}
                  </select>
                </div>
                <div className='form-group'>
                  <label className='add-product-title'>Price :</label>
                  <input
                    type='text'
                    className='form-control add-product-input'
                    id='formGroupExampleInput2'
                    placeholder='Type the price'
                    name='price'
                  />
                </div>
                <div className='form-group'>
                  <label className='add-product-title'>Description :</label>
                  <input
                    type='text'
                    className='form-control add-product-input'
                    id='formGroupExampleInput2'
                    placeholder='Describe your product min. 150 characters'
                    name='description'
                  />
                </div>
                <div className='form-group'>
                  <p className='add-product-title'>Input product size :</p>
                  <p className='form-desc'>
                    Click size you want to use for this product
                  </p>
                  <div>
                    <div
                      className='btn btn-radio btn-yellow-color size-selected'
                      name='size'
                      value='R'>
                      R
                    </div>
                    <div
                      className='btn btn-radio btn-yellow-color'
                      name='size'
                      value='X'>
                      X
                    </div>
                    <div
                      className='btn btn-radio btn-yellow-color'
                      name='size'
                      value='XL'>
                      XL
                    </div>
                    <div
                      className='btn btn-radio-load'
                      name='size'
                      value='200gr'>
                      200
                      <br />
                      gr
                    </div>
                    <div
                      className='btn btn-radio-load'
                      name='size'
                      value='300gr'>
                      300
                      <br />
                      gr
                    </div>
                    <div
                      className='btn btn-radio-load'
                      name='size'
                      value='500gr'>
                      500
                      <br />
                      gr
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <p className='add-product-title'>Input delivery methods :</p>
                  <p className='form-desc'>
                    Click methods you want to use for this product
                  </p>
                  <div className='row w-100 h-25 mx-0'>
                    <button className='col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color'>
                      Home Delivery
                    </button>
                    <button className='col-11 col-md col-lg mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color'>
                      Dine in
                    </button>
                    <button className='col-11 col-md col-lg mx-1 btn-take-away border-0 btn-width-form-input-add'>
                      Take away
                    </button>
                  </div>
                </div>
                <div className="form-group my-5">
                  <button className="col col-md col-lg btn btn-block btn-add-byGallery btn-brown-color font-white-color">
                    Save Product
                  </button>
                  <button className="col col-md col-lg btn btn-block btn-take-away">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
  };
};
function AddProductWrapper(props) {
  const usenavigate = useNavigate();

  return (
    <Addproduct {...props} usenavigate={usenavigate} token={props.token} />
  );
}
export default connect(mapStateToProps)(AddProductWrapper);
