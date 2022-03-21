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