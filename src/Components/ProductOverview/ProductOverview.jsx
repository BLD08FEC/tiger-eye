import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductInfo from './ProductInfo/ProductInfo';
import DescriptionFeaturesShare from './DescriptionFeaturesShare/DescriptionFeaturesShare';
import './ProductOverview.css';

class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="product-overview">
        <div className="container-fluid">
          <div className="row">
            <div className="border col-12 col-sm-8 col-lg-8 col-xl-8 image-gallery">
              ImageGallery
            </div>
            <div className="border col-12 col-sm-4 col-lg-4 col-xl-4 product-info">
              <ProductInfo />
            </div>
          </div>
          <div className="row border">
            <DescriptionFeaturesShare />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  productData: state.productDataReducer.productData,
  productStyles: state.productDataReducer.productStyles,
  selectedStyle: state.productDataReducer.selectedStyle,
  selectedPrice: state.productDataReducer.selectedPrice,
  salePrice: state.productDataReducer.salePrice,
});

export default connect(mapStateToProps)(ProductOverview);
