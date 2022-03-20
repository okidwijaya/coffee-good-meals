import axios from 'axios';


const URL = process.env.REACT_APP_HOST + '/transactions';

export const getTransactions = (id)=>{
    const urlHistory = `${URL}/${id}`
    return axios.get(urlHistory);
}
