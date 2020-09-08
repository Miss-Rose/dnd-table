import axios from 'axios';

export const get = async (url) => {
    return await axios.get(url)
        .then(res => res.data)
        .catch(err => err);
};

export const post = async (url, data) => {
    await axios.delete(`${url}/${data.id}`)
        .then(res => res.data)
        .catch(err => err);
    return axios.post(url, data)
        .then(() => data)
        .catch(err => err);
};


export const deleteApi = async (ulr) => {
    await axios.delete(ulr)
        .then(() => console.log('delete'))
        .catch(err => err);
};

