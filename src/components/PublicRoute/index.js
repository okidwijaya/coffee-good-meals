import React from 'react';
import {connect} from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom';

const useAuth = (token) => {
  let loggedIn = true;
  if (!token || token === '') loggedIn = false;
  return loggedIn;
};

function PublicRoutes(props) {
  const isAuth = useAuth(props.token);
  return isAuth ? <Navigate to='/' replace={true} /> : <Outlet />;
}

// export default PublicRoutes;
const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
  };
};
export default connect(mapStateToProps)(PublicRoutes);
