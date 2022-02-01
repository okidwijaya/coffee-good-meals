import axios from 'axios';
const url = process.env.REACT_APP_HOST + '/transaction';

export const getTransactions = (id)=>{
    const urlDetail = `${url}/${id}`
    return axios.get(urlDetail);
}
