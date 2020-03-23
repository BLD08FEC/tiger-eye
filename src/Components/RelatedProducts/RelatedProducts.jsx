import React from 'react';
import './RelatedProducts.scss';
import Carousel from './RPComponents/Carousel/Carousel';
import ModalDashboard from './RPComponents/modal/ModalDashboard/ModalDashboard';

const RelatedProducts = () => (
  <div className="container-fluid related-products-main">
    <div className="row carousel-title"><em>You might also like...</em></div>
    <Carousel className="row related-products-carousel-parent" />
    <div className="row carousel-title"><em>Build your own outfit.</em></div>
    <Carousel className="row my-outfit-carousel-parent" />
    <ModalDashboard className="row modal-dashboard-parent" />
  </div>
);

export default RelatedProducts;
