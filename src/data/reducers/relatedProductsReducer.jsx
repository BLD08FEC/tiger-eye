// import {
//   RP_GET_PRODUCT_DATA, RP_GET_RELATED_PRODUCTS, RP_GET_STYLES, RP_INCREMENT, RP_DECREMENT,
// } from '../types/types';

// const initialState = {
//   RPproductData: {},
//   RPproductName: null,
//   RPproductCategory: null,
//   RPproductPrice: null,
//   RPproductThumbnails: null,
//   RPrelatedProducts: {},
//   RPcurrentCard: 0,
// };

// const relatedProductsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case RP_GET_PRODUCT_DATA:
//       return {
//         ...state,
//         RPproductData: action.payload,
//         RPproductName: action.payload.name,
//         RPproductCategory: action.payload.category,
//         RPproductPrice: action.payload.default_price,
//       };
//     case RP_GET_RELATED_PRODUCTS:
//       return { ...state, RPrelatedProducts: action.payload };
//     case RP_GET_STYLES:
//       return { ...state, RPproductThumbnails: action.payload.results[0].photos[0].thumbnail_url };
//     case RP_INCREMENT:
//       console.log('stuff has now increased');
//       console.log(`current card is: ${state.RPcurrentCard}`);
//       return { ...state, RPcurrentCard: state.RPcurrentCard + 1 };
//     case RP_DECREMENT:
//       console.log('stuff is decrementing');
//       console.log(`current card is: ${state.RPcurrentCard}`);
//       return { ...state, RPcurrentCard: state.RPcurrentCard - 1 };
//     default:
//       return state;
//   }
// };

// export default relatedProductsReducer;
