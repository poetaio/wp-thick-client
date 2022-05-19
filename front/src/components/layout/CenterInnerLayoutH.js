import React from 'react';
import { Container } from 'react-bootstrap';

const CenterInnerLayoutH = ({ style, children }) => {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        ...style
      }}
    >
      {children}
    </Container>
  );
};

export default CenterInnerLayoutH;