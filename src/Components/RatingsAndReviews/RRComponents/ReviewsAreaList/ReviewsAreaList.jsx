import React from 'react';
import './ReviewsAreaList.scss';
import ReviewsAreaListTile from '../ReviewsAreaListTile/ReviewsAreaListTile';

const ReviewsAreaList = ({ reviewsList }) => (
  <div>
    {reviewsList.results ? reviewsList.results.map((i, id) => <ReviewsAreaListTile key={id} data={i} />) : <div>Review Not Available</div>}
  </div>
);


export default ReviewsAreaList;
