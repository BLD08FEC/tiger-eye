import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductOverview = () => (
  <div className="product-overview">
    <div className="container">
      <div className="row">
        <span className="border border-secondary">
          <div className="col-12 col-md-8 image-gallery">ImageGallery</div>
        </span>
        <span className="border border-secondary">
          <div className="col-12 col-md-4 product-info">
            <ProductInfo />
          </div>
        </span>
      </div>
      <div className="row">
        <span className="border border-secondary">
          <div className="col-12">Description, Features, and Share</div>
        </span>
      </div>
    </div>
  </div>
);

export default ProductOverview;
