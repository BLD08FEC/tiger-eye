/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

function renderProductFeatures(features){
    if(features){
      console.log(features);
      return features.map((feature, index ) => {
          return (
            <div key={index}>
                <div>
                  {feature.feature}
                </div>
                {feature.value && <div> - {feature.value} </div>}
            </div>
          )
      })
    }
}

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
        {renderProductFeatures(productData.features)}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  productData: state.productDataReducer.productData,
});

export default connect(mapStateToProps)(DescriptionFeatShare);
