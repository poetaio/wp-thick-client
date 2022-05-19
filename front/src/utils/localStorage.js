export const customLocalStorage = {
  setAuthToken: (authToken) => localStorage.setItem('token', authToken),
  getAuthToken: () => localStorage.getItem('token')
};
