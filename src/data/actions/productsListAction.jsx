/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import axios from 'axios';
import { GET_PRODUCTS_LIST_SUCCESS } from '../types/types';

export const getProductsList = () => (dispatch) => axios.get('http://3.134.102.30/products/list')
  .then((res) => dispatch(getProductsListSuccess(res.data)))
  .catch((error) => {
    console.log(error);
  });

export const getProductsListSuccess = (productsList) => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: productsList,
});
