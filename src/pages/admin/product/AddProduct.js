/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import '../style.css';
import defaultImg from '../../../assets/default-img.png';
import Navactive from '../../../components/navigation/Nav';

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
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.size.value);
      const body = new FormData();
      
    };
    const {image} = this.state;
    return (
      <>
        <Navactive />
        <div className='Add-product-wrapper'>
          <div aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a className='breadcrumb-page' href='#'>
                  Favorite & Promo
                </a>
              </li>
              <li className='breadcrumb-item'>
                <a className='active-page' href='#'>
                  Add new product
                </a>
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
                      type='text'
                      name='time'
                      className='start-hour-btn px-3'
                      ref={this.startHour}
                      placeholder='Select start hour'
                    />
                  </div>
                  <div className='delivery-hour'>
                    <input
                      type='text'
                      name='time'
                      className='start-hour-btn px-3'
                      ref={this.endHour}
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
                      type='text'
                      name='stock'
                      className='start-hour-btn px-3'
                      placeholder='Input stock'
                    />
                  </div>
                </div>
              </aside>

              <div className='col col-md-6'>
                <div className='form-group'>
                  <label className='add-product-title'>Name :</label>
                  <input
                    type='text'
                    className='form-control add-product-input'
                    id='formGroupExampleInput'
                    placeholder='Type product name min. 50 characters'
                  />
                </div>
                <div className='form-group'>
                  <label className='add-product-title'>Price :</label>
                  <input
                    type='text'
                    className='form-control add-product-input'
                    id='formGroupExampleInput2'
                    placeholder='Type the price'
                  />
                </div>
                <div className='form-group'>
                  <label className='add-product-title'>Description :</label>
                  <input
                    type='text'
                    className='form-control add-product-input'
                    id='formGroupExampleInput2'
                    placeholder='Describe your product min. 150 characters'
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
                    <button className='col mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color'>
                      Home Delivery
                    </button>
                    <button className='col mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color'>
                      Dine in
                    </button>
                    <button className='col mx-1 btn-take-away border-0 btn-width-form-input-add'>
                      Take away
                    </button>
                  </div>
                </div>
                <div className='form-group my-5'>
                  <button className='col col-md-auto btn btn-block btn-add-byGallery btn-brown-color font-white-color'>
                    Save Product
                  </button>
                  <button className='col col-md-auto btn btn-block btn-take-away'>
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

export default Addproduct;
