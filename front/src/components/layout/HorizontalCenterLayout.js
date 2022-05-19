import React from 'react';
import { Container } from 'react-bootstrap';

const HorizontalCenterLayout = ({ children, style = {} }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        maxHeight: '100vh',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalCenterLayout;