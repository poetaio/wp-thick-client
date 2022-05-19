import React from 'react';
import { Container } from 'react-bootstrap';

const CenterInnerLayout = ({ children, style={} }) => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: "1 1",
        height: '100%',
        ...style
      }}
    >
      {children}
    </Container>
  );
};

export default CenterInnerLayout;