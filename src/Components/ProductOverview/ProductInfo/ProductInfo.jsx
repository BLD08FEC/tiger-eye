/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import Stars from '../../../Shared/Stars';
import Styles from './Styles';
import SelectSize from './SelectSize';

const ProductInfo = ({ productData, selectedPrice, salePrice }) => (
  <div className="container-fluid">
    <div className="row rating">
      <Stars />
      <a className="review-link" href="#reviews"><u>Read all reviews</u></a>
    </div>
    <div className="row category">
      {productData.category}
    </div>
    <div className="row product-name">
      {productData.name}
    </div>
    <div className="row price">
      {salePrice > 0
        ? (
          <div>
            <strike className="strike-price">${selectedPrice}</strike>
            <div className="sale-price">${salePrice}</div>
          </div>
        ) : <div>${selectedPrice}</div>}
    </div>
    <div className="row product-styles">
      <Styles />
    </div>
    <div className="row">
      <div className="col-12 col-sm-8">
        <SelectSize />
      </div>
      <div className="col-12 col-sm-4">
        quantity
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-8 cart">
        ADD TO BAG
      </div>
      <div className="col-12 col-sm-4 favorite">
        FAVORITE
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  productData: state.productDataReducer.productData,
  productStyles: state.productDataReducer.productStyles,
  selectedStyle_id: state.productDataReducer.selectedStyle_id,
  selectedPrice: state.productDataReducer.selectedPrice,
  salePrice: state.productDataReducer.salePrice,
});

export default connect(mapStateToProps)(ProductInfo);
