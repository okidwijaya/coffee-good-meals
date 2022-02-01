import React from 'react';
import {connect} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

const useAuthRoles = (role) => {
  let isAdmin = true;
  if (role !== '2') isAdmin = false;
  return isAdmin;
};

function AdminOnly(props) {
  const isAuthorized = useAuthRoles(props.role);
  return isAuthorized ? <Outlet /> : <Navigate to='/403' replace={true} />;
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.userData.role,
  };
};
export default connect(mapStateToProps)(AdminOnly);
