/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { GET_PRODUCTS_LIST_SUCCESS } from '../types/types';

export const getProductsList = () => (dispatch) => fetch('http://3.134.102.30/products/list')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return dispatch(getProductsListSuccess(data));
  })
  .catch((error) => {
    console.log(error);
  });

export const getProductsListSuccess = (productsList) => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: productsList,
});
