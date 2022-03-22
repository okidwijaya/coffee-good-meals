import axios from 'axios';

const URL = process.env.REACT_APP_HOST + '/transaction';

export const getHistory = (token) => {
  return axios.get(URL, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const deleteHistory = (body, token) => {
  return axios.delete(URL, {
    headers: {
      'x-access-token': token,
    },
    data: {id: body.id},
  });
};

export const getTransactions = (id) => {
  const urlHistory = `${URL}/${id}`;
  return axios.get(urlHistory);
};

export const createTransaction = (token, body) => {
  const URL = process.env.REACT_APP_HOST + '/transaction';
  return axios.post(URL, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const getStatistic = (token) => {
  const urlStats = URL + '/statistic';
  return axios.get(urlStats, {
    headers: {
      'x-access-token': token,
    },
  });
};
