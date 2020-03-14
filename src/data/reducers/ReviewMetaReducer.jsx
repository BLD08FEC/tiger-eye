import { GET_REVIEW_META_DATA, GET_REVIEW_META_DATA_SUCCESS } from '../types/types';

const initialState = {
  reviewMetaData: {},
};

const productIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT_ID:
      return {
        ...state,
        productId: action.productId,
      };
    default:
      return state;
  }
};

export default productIdReducer;
