import React, { Component } from 'react';
import './RelatedProducts.scss';
import Carousel from './RPComponents/Carousel/Carousel';
import MyOutfitCarousel from './RPComponents/MyOutfitCarousel/MyOutfitCarousel';
import ModalDashboard from './RPComponents/modal/ModalDashboard/ModalDashboard';

class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 7,
      myOutfit: [],
    };
  }

  render() {
    return (
      <div className="container-fluid related-products-main">
        <div className="row carousel-title"><em>You might also like...</em></div>
        <div className="row related-products-carousel-parent">
          <Carousel currentProduct={this.state.currentProduct} />
        </div>
        <div className="row carousel-title"><em>Build your own outfit.</em></div>
        <div className="row my-outfit-carousel-parent">
          <MyOutfitCarousel currentProduct={this.state.currentProduct} myOutfit={this.state.myOutfit} />
        </div>
        <div className="row modal-dashboard-parent">
          <ModalDashboard />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
