import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import chat from '../../assets/chat-icon.png';
import imgProfile from '../../assets/profile-bg.png';

// export default
function NavActive(props) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState('');
  const host = process.env.REACT_APP_HOST;
  const photo = host + '/users/' + props.image;
  const location = useLocation();
  console.log('photo', photo);
  const [image, setImage] = useState(photo);
  console.log('props:', props.image);
  useEffect(() => {
    console.log(typeof image);
    if (image === null) {
      console.log('null');
      setImage(imgProfile);
    }
  }, [image]);
  useEffect(() => {
    setKeyword(searchParams.get('keyword') || '');
  }, [location.search]);
  console.log('nav location', location);
  return (
    <>
      <form
        className='form-inline my-2 my-lg-0 search-nav'
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.keyword.value);
          const keyword = e.target.keyword.value;
          navigate({pathname: '/products', search: `?keyword=${keyword}`});
        }}>
        <input
          defaultValue={keyword}
          className='form-control mr-sm-2'
          type='search'
          name='keyword'
          placeholder='Search'
        />
        {/* <button className="btn btn-search">Search</button> */}
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
