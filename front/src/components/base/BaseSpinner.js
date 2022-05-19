import React from 'react';

const BaseSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow  text-primary" role="status"></div>
    </div>
  );
};

export default BaseSpinner;