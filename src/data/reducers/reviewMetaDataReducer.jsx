import { GET_REVIEW_META_DATA, GET_REVIEW_META_DATA_SUCCESS } from '../types/types';

const initialState = {
  reviewMetaData: {},
};

const reviewMetaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_META_DATA:
      return {
        ...state,
      };

    case GET_REVIEW_META_DATA_SUCCESS:
      return {
        ...state,
        reviewMetaData: action.payload,
      };
    default:
      return state;
  }
};

export default reviewMetaReducer;
