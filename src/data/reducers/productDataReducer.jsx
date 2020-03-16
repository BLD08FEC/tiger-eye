import { GET_PRODUCT_DATA, GET_PRODUCT_DATA_SUCCESS, GET_REVIEW_META_DATA } from '../types/types';

const initialState = {
  productData: {},
};

const productDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_META_DATA:
      return {
        ...state,
      };

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
