import React from 'react';
import './RelatedProducts.scss';
import Carousel from './RPComponents/Carousel/Carousel';
import ModalDashboard from './RPComponents/modal/ModalDashboard/ModalDashboard';

const RelatedProducts = (props) => (
  <div className="container-fluid related-products-main">
    <div className="row carousel-title"><em>You might also like...</em></div>
    <div className="row related-products-carousel-parent">
      <Carousel />
    </div>
    <div className="row carousel-title"><em>Build your own outfit.</em></div>
    <div className="row my-outfit-carousel-parent">
      <Carousel />
    </div>
    <div className="row modal-dashboard-parent">
      <ModalDashboard />
    </div>
  </div>
);

export default RelatedProducts;
