import React, {useState} from 'react';
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import { login } from '../logic/http/userApi';
// import {login} from "../http/userApi";
import { customLocalStorage } from '../utils/localStorage';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/routesNames';

const LoginPage = () => {
  const [isValidationMessageVisible, setIsValidationMessageVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);

  const navigate = useNavigate();
  const { state } = useLocation();
  const location = state?.location;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChange = () => {
    if (isValidationMessageVisible) {
      setIsValidationMessageVisible(false);
    }
  }

  const click = async () => {
      try {
        await login(username, password);
        navigate(location || HOME_ROUTE);
      } catch (e) {
        const {status} = e.response;
        if (status === 401) {
          setValidationMessage("Login or password is incorrect");
        } else {
          setValidationMessage("Oops. Sorry. Something went wrong :(");
        }
        setIsValidationMessageVisible(true);
        setTimeout(() => setIsValidationMessageVisible(false), 2000);
      }
  }
  const isLogin = true;

  return (
      <Container
          className="d-flex justify-content-center  align-items-center"
          style={{height: window.innerHeight - 54}}
      >
        {isValidationMessageVisible &&
          <Alert style={{position: "absolute", alignSelf: "flex-start", marginTop: "20px"}} variant="danger">
            {validationMessage}
          </Alert>
        }
          <Card style={{width: 600}}  className="p-5">
              <h2 className="m-auto">Login</h2>
              <Form className="d-flex  flex-column">
                  <Form.Control
                      className="mt-5"
                      placeholder="Enter your username"
                      onChange={e => {onChange(); setUsername(e.target.value)}}
                  />
                  <Form.Control
                      className="mt-2"
                      placeholder="Enter your password"
                      onChange={e => {onChange(); setPassword(e.target.value)}}
                      type='password'
                  />
                  <div className="d-flex flex-row justify-content-between mt-4 pl-3 pr-3">
                      <Button
                          variant="outline-success"
                          onClick={click}
                      >
                          Login
                      </Button>
                  </div>

              </Form>
          </Card>
      </Container>
  );
};

export default LoginPage;