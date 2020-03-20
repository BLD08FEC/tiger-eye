/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import { GET_RELATED_PRODUCTS_SUCCESS, GET_CURRENT_CARD_SUCCESS } from '../types/types';

export const getRelatedProducts = (productId = 1) => (dispatch) => axios.get(`http://3.134.102.30/products/${productId}/related`)
  .then((res) => {
    console.log(`product id: ${productId} has related products: ${res.data}`);
    return dispatch(getRelatedProductsSuccess(res.data));
  })
  .catch((error) => {
    console.log(error);
  });

export const getRelatedProductsSuccess = (relatedProducts) => ({
  type: GET_RELATED_PRODUCTS_SUCCESS,
  payload: relatedProducts,
});
