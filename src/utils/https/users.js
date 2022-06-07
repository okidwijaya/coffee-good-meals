import axios from "axios";

const getProfile = process.env.REACT_APP_HOST + "/user";
export const profile = (token) => {
  return axios.get(getProfile, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editProfile = (body, token) => {
  return axios.patch(getProfile, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

const URL = process.env.REACT_APP_HOST + "/user/edit-password";
export const editPassword = (data, token) => {
  return axios.patch(URL, data, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const deletePhoto = (token) => {
  return axios.delete(getProfile, {
    headers: {
      "x-access-token": token,
    },
  });
};
