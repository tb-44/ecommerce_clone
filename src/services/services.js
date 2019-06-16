
const axios = require('axios');

export const getItems = (gender, category) => axios.get(`http://localhost:3001/${gender}/${category}`)
    .then(res => res.data);