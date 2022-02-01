import React from 'react';
import './Index.css';
import egg from '../../assets/egg.jpg';
import Navactive from '../../components/navigation/Nav';
import {Link} from 'react-router-dom';

function UnAuthorize() {
  return (
    <>
      <Navactive />
      <div className='forbidden-main'>
        <div className='row w-100 h-100 p-5 justify-content-center'>
          <div className='forbidden-wrapper d-none d-sm-block'>
            <div className='row m-0 w-100 h-100 align-items-center'>
              <div className='col-4 text-right left'>
                <h1>4</h1>
              </div>
              <div className='col-4 middle'>
                <img src={egg} alt='0' className='img-middle' />
              </div>
              <div className='col-4 text-left right'>
                <h1>3</h1>
              </div>
              <div className='col-12 text-center'>
                <h2>Forbidden</h2>
                <h3 className='mb-5'>You don't have access to the page.</h3>
                <button className='button-403 px-3 py-2 mb-5'>
                  Take me Home
                </button>
              </div>
            </div>
          </div>
          <div className='forbidden-wrapper d-block d-sm-none'>
            <div className='row mx-0 my-0 wrapper text-center'>
              <div className='col-12'>
                <h1>403</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-sm-6 left text-center'>
                <h2>FORBIDDEN!</h2>
                <p>You don't have access to the page.</p>
                <Link to='/' className='button-404 px-3 py-2 mb-5'>
                  Take me Home
                </Link>
              </div>
              <div className='col-12 col-sm-6 right'>
                <img src={egg} alt='' className='img-middle' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnAuthorize;
