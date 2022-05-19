import React, { useEffect, useState } from 'react';
import { Header, NavbarWrapper } from '../components/base';
import jwt_decode from 'jwt-decode';
import { customLocalStorage } from '../utils/localStorage';
import { getUserFromToken } from '../logic/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/routesNames';
import { Container } from 'react-bootstrap';
import { InnerLogin } from '../components';
import { CenterInnerLayoutH, FullHeightLayout, HorizontalCenterLayout } from '../components/layout';

const NotFoundPage = () => {

  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { state } = useLocation();
  const location = state?.location;

  useEffect(() => {
    getUserFromToken().then(user => {
      setUser(user);
    })
      .catch(ignored => {})
      .finally(() => setLoading(false));
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    customLocalStorage.setAuthToken(null);
    setUser(null);
  }

  if (loading)
    return (
      <div style={{marginTop: '100px'}} className="d-flex justify-content-center">
        <div className="spinner-grow  text-primary" role="status"></div>
      </div>
    );

    return (
      <HorizontalCenterLayout
        style={{
          // alignItems: "normal"
        }}
      >
          <Header displayLogin={false} user={user} setUser={setUser}/>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              width: "100%"
            }}
          >
            <CenterInnerLayoutH
              style={{
                width: "70%",
                flexGrow: 0
              }}
            >
              NOT FOUND :(
            </CenterInnerLayoutH>
            {!user && <CenterInnerLayoutH>
              <InnerLogin location={location}/>
            </CenterInnerLayoutH>}
          </div>
      </HorizontalCenterLayout>
    );
};

export default NotFoundPage;