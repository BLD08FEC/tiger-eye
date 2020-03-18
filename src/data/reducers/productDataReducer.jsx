import { GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_STYLES_SUCCESS, UPDATE_SELECTED_STYLE } from '../types/types';

const initialState = {
  productData: {},
  productStyles: {},
  stylePrice: null,
  selectedStyle: 1,
};

const productDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case GET_PRODUCT_STYLES_SUCCESS:
      return {
        ...state,
        productStyles: action.payload,
      };
    case UPDATE_SELECTED_STYLE:
      console.log(action.payload);
      return {
        ...state,
        selectedStyle: action.payload,
      };
    default:
      return state;
  }
};

export default productDataReducer;
