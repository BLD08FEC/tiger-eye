import React/* , { Component } */ from 'react';
import { connect } from 'react-redux';
import './ProductCard.scss';
import Stars from '../../../../Shared/Stars';

// class ProductCard extends React.Component {
//   state = { RPProductData }
// }

const ProductCard = ({
  RPproductCategory, RPproductName, RPproductPrice, RPproductThumbnails,
}) => (
  <div className="container-fluid product-card-main">
    <img className="row product-card-img-top" src={RPproductThumbnails} alt="ALT_MESSAGE" />
    <div className="container-fluid product-card-body">
      <div className="row product-card-category">
        { RPproductCategory }
      </div>
      <div className="row product-card-title">
        { RPproductName }
      </div>
      <div className="row product-card-price">
        $
        { RPproductPrice }
        .00
      </div>
      <div className="row product-card-star">
        <Stars />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  RPproductData: state.relatedProductsReducer.RPproductData,
  RPproductCategory: state.relatedProductsReducer.RPproductCategory,
  RPproductName: state.relatedProductsReducer.RPproductName,
  RPproductPrice: state.relatedProductsReducer.RPproductPrice,
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  RPproductThumbnails: state.relatedProductsReducer.RPproductThumbnails,
});

export default connect(mapStateToProps)(ProductCard);
