import jwt_decode from 'jwt-decode';
import { customLocalStorage } from '../utils/localStorage';

export const getUserFromToken = async () => {
  return jwt_decode(customLocalStorage.getAuthToken());
};
