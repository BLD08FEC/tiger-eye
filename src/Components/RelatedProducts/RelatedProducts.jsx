import React from 'react';
import './RelatedProducts.scss';
import Carousel from './components/Carousel/Carousel';
import ModalDashboard from './components/modal/ModalDashboard/ModalDashboard';

const RelatedProducts = () => (
  <div className="container related-products">
    <div className="row related-products-title"><em>You might also like...</em></div>
    <Carousel className="row related-products-carousel" isRelated="true" />
    <div className="row related-products-title"><em>Build your own outfit.</em></div>
    <Carousel className="row my-outfit-carousel" />
    <ModalDashboard className="row" />
  </div>
);

export default RelatedProducts;
