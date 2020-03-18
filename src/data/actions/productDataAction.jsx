/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import axios from 'axios';
import { GET_PRODUCT_DATA_SUCCESS } from '../types/types';

export const getProductData = (product_id = 1) => (dispatch) => axios.get(`http://3.134.102.30/products/${product_id}`)
  .then((res) => dispatch(getProductDataSuccess(res.data)))
  .catch((error) => {
    console.log(error);
  });

export const getProductDataSuccess = (productData) => ({
  type: GET_PRODUCT_DATA_SUCCESS,
  payload: productData,
});
