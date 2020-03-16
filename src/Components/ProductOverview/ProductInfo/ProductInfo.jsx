import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stars from './Stars';

const ProductInfo = (props) => (
  <div>
    Product Info
    {props.reviewMetaData.product_id}
    <Stars />
  </div>
);

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  error: state.reviewMetaReducer.error,
});

// const mapDispatchToProps = (dispatch) => ({
//   getReviewMetaData: () => dispatch(getReviewMetaData()),
// });

export default connect(mapStateToProps)(ProductInfo);
