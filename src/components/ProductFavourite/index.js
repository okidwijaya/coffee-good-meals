import React from 'react';
import {searchList} from '../../utils/https/products';
import LoadingComponent from '../LoadingComponent';
import ProductCard from '../ProductCard';

class ProductFavourite extends React.Component {
  state = {
    isSuccess: false,
    dataProduct: null,
  };
  getProductFavourite = (filter) => {};

  componentDidMount() {
    const filter = '?orderBy=popular&sort=desc&page=1';
    searchList(filter)
      .then((response) => {
        // console.log(response);
        this.setState({
          isSuccess: true,
          dataProduct: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // const [dataProduct, setDataProduct] = useState(null);
  render() {
    const {isSuccess, dataProduct} = this.state;
    // console.log('state peoduct', this.sta);
    return (
      <>
        {isSuccess ? (
          <div className='container product-content-wrapper'>
            <ProductCard dataProduct={dataProduct} />
            {/* <div className='row justify-content-between'>
              <div className='col-5 col-md-3 product-item mx-0 p-0'>
                <img
                  src={productImg}
                  className='img-thumbnail product-img-container'
                  alt='productImg'
                />
                <p className='product-title'>Product Title</p>
                <p className='product-price'>Product Price</p>
              </div>
              <div className='col-5 col-md-3 product-item mx-0 p-0'>
                <img
                  src={productImg}
                  className='img-thumbnail product-img-container'
                  alt='productImg'
                />
                <p className='product-title'>Product Title</p>
                <p className='product-price'>Product Price</p>
              </div>
              <div className='col-5 col-md-3 product-item mx-0 p-0'>
                <img
                  src={productImg}
                  className='img-thumbnail product-img-container'
                  alt='productImg'
                />
                <p className='product-title'>Product Title</p>
                <p className='product-price'>Product Price</p>
              </div>
              <div className='col-5 col-md-3 product-item mx-0 p-0'>
                <img
                  src={productImg}
                  className='img-thumbnail product-img-container'
                  alt='productImg'
                />
                <p className='product-title'>Product Title</p>
                <p className='product-price'>Product Price</p>
              </div>
            </div> */}
          </div>
        ) : (
          <LoadingComponent />
        )}
      </>
    );
  }
}

export default ProductFavourite;
