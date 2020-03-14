import { CHANGE_PRODUCT_ID } from '../types/types';

const initialState = {
  productId: 1,
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
