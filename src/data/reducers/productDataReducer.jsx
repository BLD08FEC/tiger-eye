import { GET_PRODUCT_DATA_SUCCESS } from '../types/types';

const initialState = {
  productData: {},
};

const productDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    default:
      return state;
  }
};

export default productDataReducer;
