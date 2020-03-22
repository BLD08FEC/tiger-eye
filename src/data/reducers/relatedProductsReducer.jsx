import { GET_RELATED_PRODUCTS_SUCCESS, GET_CURRENT_CARD_SUCCESS, UPDATE_CURRENT_CARD } from '../types/types';

const initialState = {
  relatedProducts: {},
  currentCard: 0,
};

const relatedProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RELATED_PRODUCTS_SUCCESS:
      return {
        ...state,
        relatedProducts: action.payload,
      };
    case GET_CURRENT_CARD_SUCCESS:
      return {
        ...state,
        currentCard: action.payload, // with no API call is this still '.payload'
      };
    case UPDATE_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.payload,
      };
    default:
      return state;
  }
};

export default relatedProductsReducer;
