import React from 'react';

// import data from './dummyData';
// import ProductCard from './components/ProductCard/ProductCard';
import Carousel from './components/Carousel/Carousel';

const RelatedProducts = () => (
  <div className="container related-products">
    <div className="row related-products-title"><em>You might also like...</em></div>
    {/* <ProductCard data={data} /> */}
    <Carousel className="row" />
    <Carousel className="row" />
  </div>
);

export default RelatedProducts;
