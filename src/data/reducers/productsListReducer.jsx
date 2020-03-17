import { GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_SUCCESS } from '../types/types';

const initialState = {
  productsList: [],
};

const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
      };

    case GET_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        productsList: action.payload,
      };
    default:
      return state;
  }
};

export default productsListReducer;
