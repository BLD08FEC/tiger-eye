import React from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

const Stars = ({ avgRating }) => (
  <div>
    <StarRatings
      rating={avgRating}
      starDimension="1em"
      starSpacing="1px"
    />
  </div>
);

const mapStateToProps = (state) => ({
  avgRating: state.reviewMetaReducer.avgRating,
});

export default connect(mapStateToProps)(Stars);
