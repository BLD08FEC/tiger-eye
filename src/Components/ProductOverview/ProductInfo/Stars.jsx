import React from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

const Stars = ({ reviewMetaData }) => {
  const calcAvgRating = (ratings) => {
    let sum = 0;
    let total = 0;
    const average = null;
    if (ratings !== undefined) {
      const keys = Object.keys(ratings);
      for (let i = 0; i < keys.length; i++) {
        sum += (Number(keys[i]) * ratings[keys[i]]);
        total += ratings[keys[i]];
      }
      console.log(total);
    }

    return average;
  };
  calcAvgRating(reviewMetaData.ratings);

  return (
    <div>
      <StarRatings
        rating={4.25}
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
