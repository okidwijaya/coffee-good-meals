import axios from 'axios';
const url = process.env.REACT_APP_HOST + '/category';

export const getCategory = () => {
  return axios.get(url);
};
