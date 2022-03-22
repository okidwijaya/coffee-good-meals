import axios from 'axios';


const URL = process.env.REACT_APP_HOST + '/transactions';

export const getTransactions = (id)=>{
    const urlHistory = `${URL}/${id}`
    return axios.get(urlHistory);
}

export const createTransaction = (token, body) => {
    const URL = process.env.REACT_APP_HOST + '/transaction';
    return axios.post(URL, body, {
        headers: {
            "x-access-token": token,
        }
    })
}
