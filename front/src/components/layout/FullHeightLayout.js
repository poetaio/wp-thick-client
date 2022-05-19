import React from 'react';

const FullHeightLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      {children}
    </div>
  );
};

export default FullHeightLayout;