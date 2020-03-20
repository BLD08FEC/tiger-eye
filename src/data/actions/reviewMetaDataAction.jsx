/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import axios from 'axios';
import { GET_REVIEW_META_DATA_SUCCESS, UPDATE_AVG_RATING } from '../types/types';
import { calcAvgRating } from '../../Shared/HelperFunctions';

export const getReviewMetaData = () => (dispatch) => axios.get('http://3.134.102.30/reviews/1/meta')
  .then((res) => {
    dispatch(getReviewMetaDataSuccess(res.data));
    dispatch(updateAvgRating(res.data.ratings));
  })
  .catch((error) => {
    console.log(error);
  });

export const getReviewMetaDataSuccess = (reviewMetaData) => ({
  type: GET_REVIEW_META_DATA_SUCCESS,
  payload: reviewMetaData,
});

export const updateAvgRating = (ratings) => ({
  type: UPDATE_AVG_RATING,
  payload: calcAvgRating(ratings),
});
