import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import DescriptionFeaturesShare from './DescriptionFeaturesShare/DescriptionFeaturesShare';
import './ProductOverview.css';

const ProductOverview = () => (
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

export default ProductOverview;
