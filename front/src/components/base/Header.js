import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { customLocalStorage } from '../../utils/localStorage';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/routesNames';
import '../../assets/css/header.css';
import '../../assets/css/navbar.css';

const Header = ({ user, setUser, displayLogin = true }) => {
  // if authorized - display profile icon
  // otherwise - display login button + logout button

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    customLocalStorage.setAuthToken(null);
    setUser(null);
    navigate(LOGIN_ROUTE, { state: { location }});
  }

  return (
    <Navbar
      bg="primary"
      variant="dark"
      style={{
        width: "100%",
        // position: "absolute",
        height: "50px",
        zIndex: '0',
        // backgroundColor: '#383845'
      }}
    >
      <Container>
        <NavLink style={{textDecoration: 'none', color: 'white'}} to={HOME_ROUTE}>Simple Post</NavLink>
        {user ?
            <Nav
              className="ml-auto"
              style={{
                color: 'white',
                display: 'flex',
                alignItems: "center"
              }}
            >
                <Button
                    variant={"outline-light"}
                    className="ms-md-3"
                    onClick={() => logout()}
                    style={{
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "5px"
                    }}
                >
                    Log out
                </Button>
            </Nav>
            :
            displayLogin ?
            <Nav>
                <Button
                    variant={"outline-light"}
                    onClick={() => navigate(LOGIN_ROUTE)}
                    style={{
                      height: "30px",
                      display: "flex",
                      alignItems: "center"
                    }}
                >
                    Login
                </Button>
            </Nav>
            : <></>
        }
      </Container>
    </Navbar>
  );
};

export default Header;