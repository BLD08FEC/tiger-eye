/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import axios from 'axios';
import { GET_REVIEW_META_DATA_SUCCESS, GET_REVIEW_META_DATA_FAILURE } from '../types/types';

export const getReviewMetaData = () => (dispatch) => axios.get('http://3.134.102.30/reviews/1/meta')
  .then((res) => {
    return dispatch(getReviewMetaDataSuccess(res.data));
  })
  .catch((error) => {
    console.log(error);
  });

export const getReviewMetaDataSuccess = (revivewMetaData) => ({
  type: GET_REVIEW_META_DATA_SUCCESS,
  payload: revivewMetaData,
});

// export const getReviewMetaDataFailure = (error) => ({
//   type: GET_REVIEW_META_DATA_FAILURE,
//   payloaod: error,
// });
