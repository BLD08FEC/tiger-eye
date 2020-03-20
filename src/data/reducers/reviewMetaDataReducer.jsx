import { GET_REVIEW_META_DATA, GET_REVIEW_META_DATA_SUCCESS, UPDATE_AVG_RATING } from '../types/types';

const initialState = {
  reviewMetaData: {},
  avgRating: 0,
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

    case UPDATE_AVG_RATING:
      return {
        ...state,
        avgRating: action.payload,
      };
    default:
      return state;
  }
};

export default reviewMetaReducer;
