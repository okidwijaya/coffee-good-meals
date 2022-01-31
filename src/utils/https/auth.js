import axios from "axios";

// login
const loginURL = process.env.REACT_APP_HOST + "/auth/login";
export const login = (body) => {
  return axios.post(loginURL, body);
};

// register
const registerURL = process.env.REACT_APP_HOST + "/auth/register";
export const register = (body) => {
  return axios.post(registerURL, body);
};

// logout
const URL = process.env.REACT_APP_HOST + "/auth";
export const logout = (token) => {
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

// forgotPass
const forgotPassURL = process.env.REACT_APP_HOST + "/auth/forgot-password";
export const forgotPass = (body) => {
  return axios.post(forgotPassURL, body);
};

// verify otp
const verifyURL = process.env.REACT_APP_HOST + "/auth/checkOTP";
export const verifyOTP = (body) => {
  return axios.post(verifyURL, body);
};

// resetPass
const resetURL = process.env.REACT_APP_HOST + "/auth/reset-password";
export const resetPassword = (body) => {
  return axios.post(resetURL, body);
};
