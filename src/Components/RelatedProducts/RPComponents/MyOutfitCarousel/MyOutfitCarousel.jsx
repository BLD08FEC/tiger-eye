import React, { Component } from 'react';
import './MyOutfitCarousel.scss';
import OutfitCard from '../OutfitCard/OutfitCard';
import EmptyCard from '../EmptyCard/EmptyCard';

class MyOutfitCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOutfitCarouselIndex: 0,
    };
    this.next = this.next.bind(this);
  }

  next(direction) {
    // direction.preventDefault();
    let changeToCard = this.state.myOutfitCarouselIndex;

    if (direction === 'left') {
      changeToCard -= 1;
    }
    if (direction === 'right') {
      changeToCard += 1;
    }
    if (changeToCard > 3) { // alter this to be dynamic based on number of related products
      changeToCard = 0;
    }
    if (changeToCard < 0) { // alter this to be dynamic based on number of related products
      changeToCard = 2;
    }

    this.setState({ myOutfitCarouselIndex: changeToCard });
  }

  render = () => (
    <div className="container-fluid carousel-main">
      <div className="row">
        <div className="col-xs-1 col-sm-1 carousel-arrow" onClick={() => this.next('left')} onKeyPress={() => {}} role="button" tabIndex={0}><div>&#9664;</div></div>
        <div className="col-xs-10">

          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-3">
                <OutfitCard
                  currentProduct={this.props.currentProduct}
                  cardIndex={this.state.carouselIndex}
                />
              </div>
              <div className="col-xs-3">
                <EmptyCard />
              </div>
              <div className="col-xs-3">
                <EmptyCard />
              </div>
              <div className="col-xs-3">
                <EmptyCard />
              </div>
              {/* <div className="col-xs-3">
                <ProductCard
                currentProduct={this.props.currentProduct}
                cardIndex={this.state.carouselIndex + 1}
                />
                </div>
                <div className="col-xs-3">
                <ProductCard
                currentProduct={this.props.currentProduct}
                cardIndex={this.state.carouselIndex + 2}
                />
                </div>
                <div className="col-xs-3">
                <ProductCard
                currentProduct={this.props.currentProduct}
                cardIndex={this.state.carouselIndex + 3}
                />
              </div> */}
            </div>
          </div>

        </div>
        <div className="col-xs-1 col-sm-1 carousel-arrow" onClick={() => this.next('right')} onKeyPress={() => {}} role="button" tabIndex={0}><div>&#9654;</div></div>
      </div>
    </div>
  )
}

export default MyOutfitCarousel;
