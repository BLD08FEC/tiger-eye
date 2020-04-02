import React from 'react';
import StarRatings from 'react-star-ratings';
import './ReviewsAreaListTile.scss';

const ReviewsAreaListTile = ({ data }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-2">
        <div className="rr-ralt-tile-stars">
          <StarRatings
            rating={data.rating}
            starDimension="1em"
            starSpacing="1px"
            starRatedColor="rgb(50, 54, 57)"
          />
        </div>
      </div>
      <div className="rr-ralt-tile-reviewer-name-date">
        {data.reviewer_name}
        ,
      </div>
      <div>
        {/* {new Intl.DateTimeFormat('en-US').format(data.date)} */}
      </div>
    </div>
    <div className="row rr-ralt-tile-title">
      <h6>{data.summary}</h6>
    </div>
    <div className="row rr-ralt-tile-body">
      {data.body}
    </div>
    <div className="row">
      Recommend
    </div>
    <div className="row">
      Response
    </div>
    <div className="row">
      <div className="rr-ralt-tile-helpfulness">
        Helpful?
        {' '}
        <a href="#">Yes</a>
        {' '}
        (
        {data.helpfulness}
        )
      </div>
      <div> | </div>
      <div className="rr-ralt-tile-report">
        <a href="#">Report</a>
      </div>
    </div>
    <div className="row"> -------------------------------------- </div>
  </div>
);

export default ReviewsAreaListTile;
