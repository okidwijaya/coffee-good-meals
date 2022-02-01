import React from 'react';
import {connect} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

const useAuthRoles = (role) => {
  let isUser = true;
  if (role !== '1') isUser = false;
  return isUser;
};

function UserOnly(props) {
  const isAuthorized = useAuthRoles(props.role);
  return isAuthorized ? <Outlet /> : <Navigate to='/403' replace={true} />;
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.userData.role,
  };
};
export default connect(mapStateToProps)(UserOnly);
