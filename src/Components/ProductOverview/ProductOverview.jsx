import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductOverview = () => (
  <div className="product-overview">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">ImageGallery</div>
        <div className="col-12 col-md-4">
          <ProductInfo />
        </div>
      </div>
      <div className="row">
        <div className="col-12">Description, Features, and Share</div>
      </div>
    </div>
  </div>
);

export default ProductOverview;
