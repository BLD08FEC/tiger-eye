/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

const DescriptionFeatShare = ({ productData }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-sm-8">
        {productData.slogan}
        <br></br>
        {productData.description}
      </div>
      <div className="col-12 col-sm-4">
          Features
        {console.log(productData.features)}
        {/* {productData.features[0].feature} */}
        {/* {productData.features.map((feature) => {
            feature.value ? <div>{feature.value} : {feature.feature}</div> : null
        })} */}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  productData: state.productDataReducer.productData,
});

export default connect(mapStateToProps)(DescriptionFeatShare);
