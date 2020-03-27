/* eslint-disable import/no-named-as-default */
import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import DescriptionFeaturesShare from './DescriptionFeaturesShare/DescriptionFeaturesShare';
import ImageGallery from './ImageGallery/ImageGallery';
import './ProductOverview.scss';

const ProductOverview = () => (
  <div className="product-overview">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8 col-xl-8 image-gallery">
          <ImageGallery />
        </div>
        <div className="col-12 col-md-4 col-lg-4 col-xl-4 product-info">
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
