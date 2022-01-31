import React from 'react';
import productImg from '../../assets/Veggie-tomato-mix.png';

const loopCard = (data) => {
  const elements = [];
  if (data.length === 0) {
    return (
      <>
        <div className='col-12 mx-auto my-5'>
          <h3 className='empty-product'>
            Sorry, we can't find any mathces, please try something different.
          </h3>
        </div>
      </>
    );
  }
  for (let i = 0; i < data.length; i++) {
    const image = data[i].image ? data[i].image : productImg;
    const element = (
      <div
        className='col-5 col-md-3 product-item mx-0 p-0'
        key={`product-${i}`}>
        <img
          src={image}
          className='img-thumbnail product-img-container'
          alt='productImg'
          onError={({currentTarget}) => {
            console.log(currentTarget);
            currentTarget.onerror = null;
            currentTarget.src = require('../../assets/Veggie-tomato-mix.png');
          }}
        />
        <p className='product-title'>{data[i].name}</p>
        <p className='product-price'>Rp. {data[i].price}</p>
      </div>
    );
    elements.push(element);
  }
  return elements;
};

function ProductCard(props) {
  console.log('props: ', props);
  const data = props.dataProduct.data;
  //   const elements = loopCard(dataProduct.data);
  return (
    <>
      <div className='row justify-content-between'>
        {loopCard(data)}
        {/* <div className='col-5 col-md-3 product-item mx-0 p-0'>
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
        </div> */}
      </div>
    </>
  );
}

export default ProductCard;
