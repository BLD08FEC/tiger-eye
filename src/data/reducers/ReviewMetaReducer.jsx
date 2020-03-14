import { GET_REVIEW_META_DATA, GET_REVIEW_META_DATA_SUCCESS, GET_REVIEW_META_DATA_FAILURE } from '../types/types';

const initialState = {
  reviewMetaData: {},
  error: false,
};

const reviewMetaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_META_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_REVIEW_META_DATA_SUCCESS:
      return {
        ...state,
        reviewMetaData: action.payload
      };

    case GET_REVIEW_META_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        reviewMetaData: {},
      };
    default:
      return state;
  }
};

export default reviewMetaReducer;
