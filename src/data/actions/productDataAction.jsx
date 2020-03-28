/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import axios from 'axios';
import { defaultStyleFinder } from '../../Shared/HelperFunctions';
import {
  GET_PRODUCT_DATA_SUCCESS,
  GET_PRODUCT_STYLES_SUCCESS,
  UPDATE_SELECTED_STYLE,
  UPDATE_SELECTED_SIZE,
  UPDATE_SELECTED_QUANTITY,
  UPDATE_CART,
} from '../types/types';

export const getProductData = (product_id = 1) => (dispatch) => axios.get(`http://52.26.193.201:3000/products/${product_id}`)
  .then((res) => dispatch(getProductDataSuccess(res.data)))
  .catch((error) => {
    console.log(error);
  });

export const getProductDataSuccess = (productData) => ({
  type: GET_PRODUCT_DATA_SUCCESS,
  payload: productData,
});

export const getProductStyles = (product_id = 1) => (dispatch) => axios.get(`http://52.26.193.201:3000/products/${product_id}/styles`)
  .then((res) => {
    dispatch(getProductStylesSuccess(res.data));
    const defaultStyle = defaultStyleFinder(res.data.results);
    dispatch(updateSelectedStyle(defaultStyle));
  })
  .catch((error) => {
    console.log(error);
  });

export const getProductStylesSuccess = (productStyles) => ({
  type: GET_PRODUCT_STYLES_SUCCESS,
  payload: productStyles,
});

export const updateSelectedStyle = (selectedStyleData) => ({
  type: UPDATE_SELECTED_STYLE,
  payload: selectedStyleData,
});

export const updateSelectedSize = (selectedSize) => ({
  type: UPDATE_SELECTED_SIZE,
  payload: selectedSize,
});

export const updateSelectedQuantity = (selectedQuantity) => ({
  type: UPDATE_SELECTED_QUANTITY,
  payload: selectedQuantity,
});

export const updateCart = (cart) => ({
  type: UPDATE_CART,
  payload: cart,
});
