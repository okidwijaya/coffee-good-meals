import React from 'react';
import {connect} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

const useAuth = (token) => {
  let loggedIn = true;
  if (!token || token === '') loggedIn = false;
  return loggedIn;
};

function PrivateRoutes(props) {
  const isAuth = useAuth(props.token);
  return isAuth ? <Outlet /> : <Navigate to='/' replace={true} />;
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
  };
};
export default connect(mapStateToProps)(PrivateRoutes);
