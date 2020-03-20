import React from 'react';
import './ProductCard.scss';
import { connect } from 'react-redux';
import Stars from '../../../../Shared/Stars';

// eslint-disable-next-line arrow-body-style
const ProductCard = ({ productData, productId }) => (
  <div className="container-fluid product-card-main">
    <img className="row product-card-img-top" src="#THIS WILL REQUIRE AN DIFFERENT API CALL" alt="CARD_IMG_CAP_HERE" />
    <div className="container-fluid product-card-body">
      <div className="row product-card-category">
        {productData.category}
      </div>
      <div className="row product-card-title">
        {productData.name}
      </div>
      <div className="row product-card-price">
        { productData.default_price }
      </div>
      <div className="row product-card-star">
        <Stars />
      </div>
    </div>
  </div>
);


const mapStateToProps = (state) => ({
  productData: state.productDataReducer.productData,
});

export default connect(mapStateToProps)(ProductCard);
