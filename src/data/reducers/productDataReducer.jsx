import { GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_STYLES_SUCCESS } from '../types/types';

const initialState = {
  productData: {},
  productStyles: {},
};

const productDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case GET_PRODUCT_STYLES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        productStyles: action.payload,
      };
    default:
      return state;
  }
};

export default productDataReducer;
