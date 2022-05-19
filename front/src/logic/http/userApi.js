import { customLocalStorage } from "../../utils/localStorage";
import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';

export const login = async (username, password) => {
  const { data : {token} } = await $host.post('/api/auth/login', {
    username,
    password
  });
  customLocalStorage.setAuthToken(token);
  return jwt_decode(token);
};
