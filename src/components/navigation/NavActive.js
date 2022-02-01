import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import chat from '../../assets/chat-icon.png';
import imgProfile from '../../assets/profile-bg.png';

// export default
function NavActive(props) {
  const [image, setImage] = useState(props.image);
  console.log('props:', props.image);
  useEffect(() => {
    console.log(typeof image);
    if (image === null) {
      console.log('null');
      setImage(imgProfile);
    }
  }, [image]);
  return (
    <>
      <form className='form-inline my-2 my-lg-0 search-nav'>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search'
        />
      </form>
      <button className='btn chat-nav'>
        <Link to='/chat'>
          <img src={chat} alt='chat icon' className='chat-img-nav' />
        </Link>
      </button>
      <button className='btn btn-profile-nav'>
        <Link to='/profile'>
          <img
            src={image}
            className='profile-img-nav'
            alt='chat icon'
            onError={({currentTarget}) => {
              console.log(currentTarget);
              currentTarget.onerror = null;
              currentTarget.src = require('../../assets/avatar.jpg');
            }}
          />
        </Link>
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    image: state.auth.userData.photo,
  };
};
export default connect(mapStateToProps)(NavActive);
