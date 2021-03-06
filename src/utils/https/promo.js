import axios from "axios";
const url = process.env.REACT_APP_HOST + "/promos";

export const addPostPromo = (body, token) => {
  return axios.post(url, body, {
    headers: {
      "x-access-token": token,
      "content-type": "multipart/form-data",
    },
  });
};

export const getPromos = () => {
  return axios.get(url);
};

export const getPromoDetail = (id) => {
  const urlDetail = `${url}/${id}`;
  return axios.get(urlDetail);
};

export const editPromoCoupon = (body, token) => {
  return axios.patch(url, body, {
    headers: {
      "x-access-token": token,
    },
  });
};
