import axios from 'axios';

export function getProducts(gender, category, count) {
    return axios.get(`/items/${gender}/${category}`).then(products => products.data);
};

export function getLimitedProducts(gender, category, count) {
    return axios.get(`/items/${gender}/${category}?count=${count}`).then(products => products.data);
};

export function getProductById(product_id) {
    return axios.get(`/item/product/${product_id}`).then(product => product.data);
};