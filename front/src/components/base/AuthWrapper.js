import React, { useState, useEffect } from 'react';
import { Header, NavbarWrapper } from '.';
import jwt_decode from 'jwt-decode';
import { customLocalStorage } from '../../utils/localStorage';
import { getUserFromToken } from '../../logic/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { NOT_FOUND_ROUTE } from '../../utils/routesNames';


const AuthWrapper = ({ children, roles }) => {
  const [ loading, setLoading ] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getUserFromToken()
      .then(user => {
        if (!roles.includes(user.role))
          navigate(NOT_FOUND_ROUTE, { state: { location } });

        setLoading(false);
      })
      .catch(e => navigate(NOT_FOUND_ROUTE, { state: { location } }));
  }, []);

  if (loading) {
    return (
      <div style={{marginTop: '100px'}} className="d-flex justify-content-center">
        <div className="spinner-grow  text-primary" role="status"></div>
      </div>
    );
  }

  return children;
};

export default AuthWrapper;