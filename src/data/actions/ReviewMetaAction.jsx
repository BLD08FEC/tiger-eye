/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { GET_REVIEW_META_DATA, GET_REVIEW_META_DATA_SUCCESS, GET_REVIEW_META_DATA_FAILURE } from '../types/types';

export const getReviewMetaData = () => {
  return (dispatch) => {
    return fetch(`http://3.134.102.30/reviews/1/meta`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return dispatch(getReviewMetaDataSuccess(data));
      })
      .catch((error) => {
        return dispatch(getReviewMetaDataFailure(error));
      });
  };
};

export const getReviewMetaDataSuccess = (revivewMetaData) => ({
  type: GET_REVIEW_META_DATA_SUCCESS,
  payload: revivewMetaData,
});

export const getReviewMetaDataFailure = (error) => ({
  type: GET_REVIEW_META_DATA_FAILURE,
  payloaod: error,
});
