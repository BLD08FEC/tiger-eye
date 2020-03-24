import {
  RP_GET_PRODUCT_DATA, RP_GET_RELATED_PRODUCTS, RP_GET_STYLES, RP_GET_CURRENT_CARD, RP_UPDATE_CURRENT_CARD,
} from '../types/types';

const initialState = {
  RPproductData: {},
  RPproductName: null,
  RPproductCategory: null,
  RPproductPrice: null,
  RPproductThumbnails: null,
  RPrelatedProducts: {},

  RPcurrentCard: 0,
};

const relatedProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RP_GET_PRODUCT_DATA:
      return {
        ...state,
        RPproductData: action.payload,
        RPproductName: action.payload.name,
        RPproductCategory: action.payload.category,
        RPproductPrice: action.payload.default_price,
      };
    case RP_GET_RELATED_PRODUCTS:
      return { ...state, RPrelatedProducts: action.payload };
    case RP_GET_STYLES:
      return { ...state, RPproductThumbnails: action.payload.results[0].photos[0].thumbnail_url };
    case RP_GET_CURRENT_CARD:
      return { ...state, RPcurrentCard: action.payload };
    case RP_UPDATE_CURRENT_CARD:
      return { ...state, RPcurrentCard: action.payload };
    default:
      return state;
  }
};

export default relatedProductsReducer;
