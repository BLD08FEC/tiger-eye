/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import './DescriptionFeaturesShare.scss'

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
    <div className="row description-features">
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
    <div className="row share">
      <div className="col-12 col-sm-12">
        <div className="share-text">Like it? Share it!</div>
        <div className="social-share">
          <a
            target="_blank"
            className="fa fa-facebook"
            type="button"
            role="button"
            href={`http://www.facebook.com/sharer.php?u=${window.location.href}`}
          />
          <a
            target="_blank"
            className="fa fa-twitter"
            type="button"
            role="button"
            href={`https://twitter.com/intent/tweet?text=Check+out+this+${productData.name};url=${window.location.href}`}
          />
          <a
            target="_blank"
            className="fa fa-pinterest"
            type="button"
            role="button"
            href={`http://pinterest.com/pin/create/button/?url=${window.location.href}&description=${productData.name}`}
          />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  productData: state.productDataReducer.productData,
});

export default connect(mapStateToProps)(DescriptionFeatShare);
