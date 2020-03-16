/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { GET_PRODUCT_DATA_SUCCESS } from '../types/types';

export const getProductData = () => (dispatch) => fetch('http://3.134.102.30/products/1')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return dispatch(getProductDataSuccess(data));
  })
  .catch((error) => {
    console.log(error);
  });

export const getProductDataSuccess = (productData) => ({
  type: GET_PRODUCT_DATA_SUCCESS,
  payload: productData,
});
