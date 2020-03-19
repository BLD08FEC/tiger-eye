/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React from 'react';
import { connect } from 'react-redux';

function renderProductFeatures(features) {
  if (features) {
    return features.map((feature, index) => (
      <li key={index}>
        {feature.feature}
        {' '}
        {feature.value && `- ${feature.value}`}
      </li>
    ));
  }
}

const DescriptionFeatShare = ({ productData }) => (
  <div className="container-fluid">
    <div className="row description-features-share">
      <div className="col-12 col-sm-8">
        <p className="slogan">
          {productData.slogan}
        </p>
        <p className="description">
          {productData.description}
        </p>
      </div>
      <ul className="col-12 col-sm-4 list-checkmarks">
        {renderProductFeatures(productData.features)}
      </ul>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  productData: state.productDataReducer.productData,
});

export default connect(mapStateToProps)(DescriptionFeatShare);
