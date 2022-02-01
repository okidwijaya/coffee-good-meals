import React from 'react';
import {searchList} from '../../utils/https/products';
import LoadingComponent from '../LoadingComponent';
import ProductCard from '../ProductCard';

class ProductFoods extends React.Component {
  state = {
    isSuccess: false,
    dataProduct: null,
  };

  componentDidMount() {
    const filter = '?keyword=&orderBy=date&category=2&sort=desc';
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
  render() {
    const {isSuccess, dataProduct} = this.state;
    return (
      <>
        {isSuccess ? (
          <div className='container product-content-wrapper'>
            <ProductCard dataProduct={dataProduct} />
          </div>
        ) : (
          <LoadingComponent />
        )}
      </>
    );
  }
}

export default ProductFoods;
