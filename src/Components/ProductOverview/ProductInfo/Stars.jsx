import React from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

const Stars = ({ reviewMetaData }) => {
  const calcAvgRating = (ratings) => {
    let sum = 0;
    let total = 0;
    let avgRating = 0;
    if (ratings) {
      const keys = Object.keys(ratings);
      for (let i = 0; i < keys.length; i++) {
        sum += (Number(keys[i]) * ratings[keys[i]]);
        total += ratings[keys[i]];
      }
      avgRating = sum / total;
    }
    console.log(avgRating);
    return avgRating;
  };
  const avgRating = calcAvgRating(reviewMetaData.ratings);

  return (
    <div>
      <StarRatings
        rating={avgRating}
        starDimension="15px"
        starSpacing="1px"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
});

export default connect(mapStateToProps)(Stars);
