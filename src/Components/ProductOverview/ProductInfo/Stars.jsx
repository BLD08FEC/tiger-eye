import React from 'react';
import { connect } from 'react-redux';

const Stars = ({ reviewMetaData }) => {

  // const calAvgRating = (reviewMetaData) => {
  // };
  return (
    <div>
      <p>*****</p>
      {console.log(reviewMetaData.ratings)}
    </div>
  )
};

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
});

export default connect(mapStateToProps)(Stars);
