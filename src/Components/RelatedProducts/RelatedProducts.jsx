import React, { Component } from 'react';
// import { Connect } from 'react-redux';
import './RelatedProducts.scss';
import Carousel from './RPComponents/Carousel/Carousel';


class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProductId: 7,
    };
  }

  render() {
    const { mainProductId } = this.state;
    return (
      <div className="related-products-main">
        <div className="container-fluid">
          <div className="row carousel-title"><em>You might also like...</em></div>
          <div className="row related-products-carousel-parent">
            <Carousel mainProductId={mainProductId} carouselType="suggestions" />
          </div>
          <div className="row carousel-title"><em>Build your own outfit.</em></div>
          <div className="row my-outfit-carousel-parent">
            <Carousel mainProductId={mainProductId} carouselType="myOutfit" />
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
