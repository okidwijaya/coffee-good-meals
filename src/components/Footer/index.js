import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icon.svg';
import twitterIcon from '../../assets/Twitter.svg';
import facebookIcon from '../../assets/Facebook.svg';
import instagramIcon from '../../assets/Instagram.svg';
import './style.css';

const Footer = () => {
  return (
    <footer className='row mx-0 my-0'>
      <div className='col-12 col-md-8'>
        <div className='navbar-brand footer-logo'>
          <Link to='/' className='text-decoration-none'>
          <img src={logo} alt='logo' width='30' height='24' />
          <strong>Coffee Shop</strong>
          </Link>
        </div>
        <p className='footer-text'>
          Coffee Shop is a store that sells some good <br /> meals, and
          especially coffee. We provide
          <br /> high quality beans
        </p>
        <div className='footer-icon'>
          <img src={facebookIcon} alt='fIcon' />
          <img src={twitterIcon} alt='tIcon' />
          <img src={instagramIcon} alt='iICon' />
        </div>
        <p className='footer-copyright-text'>©2020CoffeeStore</p>
      </div>

      <div className='col-6 col-md-2 footer-list-content'>
        <p className='footer-list-title'>
          <strong>Product</strong>
        </p>
        <ul className='list-group'>
          <li className='list-group-item'>Download</li>
          <li className='list-group-item'>Pricing</li>
          <li className='list-group-item'>Locations</li>
          <li className='list-group-item'>Countries</li>
          <li className='list-group-item'>Blog</li>
        </ul>
      </div>

      <div className='col-6 col-md-2 footer-list-content'>
        <p className='footer-list-title'>
          <strong>Engage</strong>
        </p>
        <ul className='list-group'>
          <li className='list-group-item'>Coffee Shop</li>
          <li className='list-group-item'>FAQ</li>
          <li className='list-group-item'>About Us</li>
          <li className='list-group-item'>Policy</li>
          <li className='list-group-item'>Term of Service</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
