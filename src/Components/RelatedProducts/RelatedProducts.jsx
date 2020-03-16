import React from 'react';

import Carousel from './components/Carousel/Carousel';

const RelatedProducts = () => (
  <div className="container related-products">
    <div className="row related-products-title"><em>You might also like...</em></div>
    <Carousel className="row related-products-carousel" isRelated="true" />
    <div className="row related-products-title"><em>Build your own outfit.</em></div>
    <Carousel className="row my-outfit-carousel" />
  </div>
);

export default RelatedProducts;
