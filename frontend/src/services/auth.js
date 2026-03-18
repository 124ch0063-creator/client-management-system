/**
 * Authentication Service
 * Handles token management and user session
 */

const AUTH_TOKEN_KEY = "authToken";
const USER_KEY = "user";

export const authTokenService = {
  // Set token in localStorage
  setToken: (token) => {
    if (token) {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    }
  },

  // Get token from localStorage
  getToken: () => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Remove token from localStorage
  removeToken: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  },

  // Check if token exists
  hasToken: () => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Set user data
  setUser: (user) => {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  },

  // Get user data
  getUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Remove user data
  removeUser: () => {
    localStorage.removeItem(USER_KEY);
  },

  // Clear all auth data (logout)
  clearAuth: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  }
};

export default authTokenService;
