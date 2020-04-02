import React, { Component } from 'react';
import './ReviewsArea.scss';
import ReviewsAreaList from '../ReviewsAreaList/ReviewsAreaList';

const ReviewsArea = ({
  reviewsList, product, count, results,
}) => (
  <div className="container-fluid">
    <div className="row">
      {count}
      reviews, sorted by
    </div>
    <div classNAme="row">
      <ReviewsAreaList reviewsList={reviewsList} />
    </div>
    <div className="row">
      <div className="col-xs-3 rr-ra-more-reviews-btn">
        MORE REVIEWS
      </div>
      <div className="col-xs-3 rr-ra-add-review-btn">
        ADD A REVIEW +
      </div>
    </div>
  </div>
);


export default ReviewsArea;
