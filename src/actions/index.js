import axios from 'axios';

import { baseUrl, wrapAxiosRequest } from './utils';

export async function createNewOrder(cart) {
  return wrapAxiosRequest(axios.post(`${baseUrl}/order/add`, cart));
}

export async function getAllShops() {
  return wrapAxiosRequest(axios.get(`${baseUrl}/shop/all`));
}

export async function getAllOrders() {
  return wrapAxiosRequest(axios.get(`${baseUrl}/order/all`));
}
