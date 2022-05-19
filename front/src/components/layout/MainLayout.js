import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUserFromToken } from '../../logic/auth';
import jwt_decode from 'jwt-decode';
import { customLocalStorage } from '../../utils/localStorage';
import { Header } from '../base';
import HorizontalCenterLayout from './HorizontalCenterLayout';
import '../../assets/css/main_layout.css';

const MainLayout = () => {
  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getUserFromToken()
      .then((user) => setUser(user))
      .catch(ignored => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div style={{marginTop: '100px'}} className="d-flex justify-content-center">
        <div className="spinner-grow  text-primary" role="status"></div>
      </div>
    );

  return (
    <HorizontalCenterLayout>
      <Header user={user} setUser={setUser}/>
      <div className='main_layout__content_wrapper'>
        <Outlet/>
      </div>
    </HorizontalCenterLayout>
  );
};

export default MainLayout;