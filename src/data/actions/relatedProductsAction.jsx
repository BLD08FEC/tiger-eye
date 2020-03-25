/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  RP_GET_PRODUCT_DATA, RP_GET_RELATED_PRODUCTS, RP_GET_STYLES, /* RP_GET_PRODUCT_DATA_SUCCESS, RP_GET_RELATED_PRODUCTS_SUCCESS, */ RP_INCREMENT, RP_DECREMENT,
} from '../types/types';

export const RPgetProductData = (productId = 1) => (dispatch) => axios.get(`http://3.134.102.30/products/${productId}`)
  .then((res) => {
    // console.log(`product id: ${productId} has name: ${res.data.name}`);
    return dispatch(RPgetProductDataSuccess(res.data));
  })
  .catch((error) => {
    console.log(error);
  });

export const RPgetProductDataSuccess = (productData) => ({
  // which method is correect
  type: RP_GET_PRODUCT_DATA,
  // type: RP_GET_PRODUCT_DATA_SUCCESS,
  payload: productData,
});

export const RPgetRelatedProducts = (productId = 1) => (dispatch) => axios.get(`http://3.134.102.30/products/${productId}/related`)
  .then((res) => {
    // console.log(`product id: ${productId} has related products: ${res.data}`);
    return dispatch(RPgetRelatedProductsSuccess(res.data));
  })
  .catch((error) => {
    console.log(error);
  });

export const RPgetRelatedProductsSuccess = (relatedProducts) => ({
  // which method is correect
  type: RP_GET_RELATED_PRODUCTS,
  // type: RP_GET_RELATED_PRODUCTS_SUCCESS,
  payload: relatedProducts,
});

export const RPgetStyles = (productId = 1) => (dispatch) => axios.get(`http://52.26.193.201:3000/products/${productId}/styles`)
  .then((res) => {
    // console.log(`product id: ${productId} has ${res.data.results.length} styles`);
    return dispatch(RPgetStylesSuccess(res.data));
  })
  .catch((err) => {
    console.log(err);
  });

export const RPgetStylesSuccess = (styleThumbs) => ({
  // which method is correect
  type: RP_GET_STYLES,
  // type: RP_GET_STYLES,
  payload: styleThumbs,
});

export const RPincrement = (/* count */) => {
  // console.log("woo-hoo for incrementation");
  return ({
    type: RP_INCREMENT,
    // payload: count + 1,
  });
};

// export const RPincrementReset = (/* count */) => ({
//   type: RP_INCREMENT_RESET,
//   // payload: 0,
// });

export const RPdecrement = (count) => {
  // console.log("woot 4 decrement");
  return ({
    type: RP_DECREMENT,
    payload: count,
  });
};

// export const RPdecrementReset = (/* newNum */) => ({
//   type: RP_DECREMENT_RESET,
//   // payload: newNum,
// });
