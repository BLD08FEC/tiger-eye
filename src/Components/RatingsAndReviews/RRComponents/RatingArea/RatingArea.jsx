import React from 'react';
import './RatingArea.scss';
import RatingsAreaAverage from '../RatingAreaAverage/RatingAreaAverage';
import RatingsAreaRecommendations from '../RatingAreaRecommendations/RatingAreaRecommendations';
import RatingsAreaBreakdown from '../RatingAreaBreakdown/RatingAreaBreakdown';

const RatingArea = () => (
  <div className="container-fluid">
    <div className="row">
      <RatingsAreaAverage />
    </div>
    <div className="row">
      <RatingsAreaRecommendations />
    </div>
    <div className="row">
      <RatingsAreaBreakdown />
    </div>
  </div>
);

export default RatingArea;
