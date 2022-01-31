import React from 'react';
import coffeeLoading from '../../assets/coffee-and-doughnut-loading.gif';
import './index.css';

function index() {
  return (
    <div className='container product-content-wrapper my-5 py-5'>
      <div className='row justify-content-center'>
        <div className='col'>
          <img src={coffeeLoading} alt='loading' className='coffee-loading' />
        </div>
      </div>
    </div>
  );
}

export default index;
