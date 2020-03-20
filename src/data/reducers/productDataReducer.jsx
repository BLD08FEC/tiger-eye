import { GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_STYLES_SUCCESS, UPDATE_SELECTED_STYLE } from '../types/types';

const initialState = {
  productData: {},
  productStyles: {},
  selectedStyle_id: null,
  selectedStylePhotos: [],
  selectedStyleSKUS: {},
  selectedPrice: null,
  salePrice: null,
  selectedStyleName: null,
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
      return {
        ...state,
        selectedStyle_id: action.payload.style_id,
        selectedStylePhotos: action.payload.photos,
        selectedStyleSKUS: action.payload.skus,
        selectedPrice: action.payload.original_price,
        salePrice: action.payload.sale_price,
        selectedStyleName: action.payload.name,
      };
    default:
      return state;
  }
};

export default productDataReducer;
