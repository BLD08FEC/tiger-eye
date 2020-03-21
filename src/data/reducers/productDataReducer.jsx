import {
  GET_PRODUCT_DATA_SUCCESS,
  GET_PRODUCT_STYLES_SUCCESS,
  UPDATE_SELECTED_STYLE,
  UPDATE_SELECTED_SIZE,
  UPDATE_SELECTED_QUANTITY,
  UPDATE_CART,
} from '../types/types';

const initialState = {
  productData: {},
  productStyles: {},
  selectedStyle_id: null,
  selectedStylePhotos: [],
  selectedStyleSKUS: {},
  selectedPrice: null,
  salePrice: null,
  selectedStyleName: null,
  selectedSize: null,
  selectedQuantity: null,
  cart: [],
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
    case UPDATE_SELECTED_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    case UPDATE_SELECTED_QUANTITY:
      console.log(action.payload);
      return {
        ...state,
        selectedQuantity: action.payload,
      };
    case UPDATE_CART:
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default productDataReducer;
