import React from 'react';
import './RatingsAndReviews.scss';
import RatingArea from './RRComponents/RatingArea/RatingArea';
import ReviewsArea from './RRComponents/ReviewsArea/ReviewsArea';

const RatingsAndReviews = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-4">
        <RatingArea />
      </div>
      <div className="col-xs-8">
        <ReviewsArea />
      </div>
    </div>
  </div>
);

export default RatingsAndReviews;
