import React, { Component } from 'react';
import './RatingArea.scss';
import RatingsAreaAverage from '../RatingAreaAverage/RatingAreaAverage';
import RatingsAreaRecommendations from '../RatingAreaRecommendations/RatingAreaRecommendations';
import RatingsAreaBreakdown from '../RatingAreaBreakdown/RatingAreaBreakdown';

const RatingArea = ({
  ratings, recommended, characteristics,
}) => (
  <div className="container-fluid">
    <div className="row">
      <RatingsAreaAverage data={ratings} />
    </div>
    <div className="row">
      <RatingsAreaRecommendations data={recommended} />
    </div>
    <div className="row">
      <RatingsAreaBreakdown data={characteristics} />
    </div>
  </div>
);


export default RatingArea;
