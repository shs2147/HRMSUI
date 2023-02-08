import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';


const WithAuth = (Component) => {
  const auth = useContext(AuthContext);
  return (props) => {
    
    if (!auth.isAuthenticated) {
      return <Navigate to='/SignIn' />;
    }
    return <Component {...props} />;
  };
};

export default WithAuth;
