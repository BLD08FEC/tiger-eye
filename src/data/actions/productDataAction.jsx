/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import axios from 'axios';
import { GET_PRODUCT_DATA_SUCCESS } from '../types/types';

export const getProductData = () => (dispatch) => axios.get('http://3.134.102.30/products/1')
  .then((res) => {
    console.log(res.data);
    return dispatch(getProductDataSuccess(res.data));
  })
  .catch((error) => {
    console.log(error);
  });

export const getProductDataSuccess = (productData) => ({
  type: GET_PRODUCT_DATA_SUCCESS,
  payload: productData,
});
