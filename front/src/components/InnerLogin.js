import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../logic/http/userApi';
import { HOME_ROUTE } from '../utils/routesNames';

const InnerLogin = ({ location }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
      try {
        await login(email, password);
        navigate(location || HOME_ROUTE);
      } catch (e) {
          alert(e.response.data.error.description);
      }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          marginBottom: "15px"
        }}
      >
        Would you like to sign in?
      </h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          variant="primary"
          onClick={click}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default InnerLogin;