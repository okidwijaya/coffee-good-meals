import React from 'react';
import {Link} from 'react-router-dom';
import './Index.css';
import coffee from '../../assets/coffee-bg-cropped.png';
import Navactive from "../../components/navigation/NavActive";

function InvalidRoute() {
  return (
    <>
      <Navactive />
      <div className='invalid-main'>
        <div className='row mx-0 my-0 wrapper text-center'>
          <div className='col-12'>
            <h1>404</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 left text-center'>
            <h2>WHOOPS!</h2>
            <p>We can't find the page you're looking for.</p>
            <Link to='/'>
              <button className='button-404 px-3 py-2'>Take me Home</button>
            </Link>
          </div>
          <div className='col-12 col-sm-6 right'>
            <img src={coffee} alt='' className='coffee' />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvalidRoute;
