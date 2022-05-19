import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NOT_FOUND_ROUTE } from '../utils/routesNames';

const SaveLocationNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => navigate(NOT_FOUND_ROUTE, { state: { location } }));
  return <></>;
};

export default SaveLocationNotFound;