/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Review = ({ review }) => (
  <div>
    <div className="review-rating"><em><strong>{review.rating}</strong></em></div>
    <div className="review-summary"><em><strong>{review.summary}</strong></em></div>
    <div className="review-body"><em>{review.body}</em></div>
    <div className="review-recommend"><em>{review.recommend}</em></div>
    <div className="review-reviewer-name"><em>{review.reviewer_name}</em></div>
    <div className="review-response"><em>{review.response}</em></div>
  </div>
);

export default Review;
