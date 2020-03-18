/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stars from '../../../Shared/Stars';

const ProductInfo = ({ productData }) => (
  <div className="container-fluid">
    <div className="row rating">
      <Stars />
      <a href="#reviews">Read all reviews</a>
    </div>
    <div className="row category">
      {productData.category}
    </div>
    <div className="row product-name">
      {productData.name}
    </div>
    <div className="row price">
      {productData.default_price}
    </div>
    <div className="row styles">
      styles will go here
    </div>
    <div className="row">
      <div className="col-12 col-sm-8">
        select size
      </div>
      <div className="col-12 col-sm-4">
        quantity
      </div>
    </div>
    <div className="row styles">
      <div className="col-12 col-sm-8">
        ADD TO BAG
      </div>
      <div className="col-12 col-sm-4">
        FAVORITE
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  productData: state.productDataReducer.productData,
});

export default connect(mapStateToProps)(ProductInfo);
