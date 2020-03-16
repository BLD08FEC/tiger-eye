import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stars from './Stars';

const ProductInfo = ({ reviewMetaData }) => (
  <div>
    Product Info
    <br />
    {reviewMetaData.product_id}
    <br />
    <Stars />
  </div>
);

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
});

// const mapDispatchToProps = (dispatch) => ({
//   getReviewMetaData: () => dispatch(getReviewMetaData()),
// });

export default connect(mapStateToProps)(ProductInfo);
