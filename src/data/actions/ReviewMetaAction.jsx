import { GET_REVIEW_META_DATA, GET_REVIEW_META_DATA_SUCCESS } from '../types/types';

export const getReviewMetaData = () => ({
  type: GET_REVIEW_META_DATA,
});

export const getReviewMetaDataSuccess = (revivewMetaData) => ({
  type: GET_REVIEW_META_DATA_SUCCESS,
  revivewMetaData,
});
