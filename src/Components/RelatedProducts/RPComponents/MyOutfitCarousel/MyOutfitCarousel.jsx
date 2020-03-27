/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './MyOutfitCarousel.scss';
import OutfitCard from '../OutfitCard/OutfitCard';
import ProductCard from '../ProductCard/ProductCard';

class MyOutfitCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOutfit: [],
      myOutfitCarouselIndex: 0,
    };
    this.next = this.next.bind(this);
    this.addToOutfit = this.addToOutfit(this);
  }

  next(direction) {
    // direction.preventDefault();
    let changeToCard = this.state.myOutfitCarouselIndex;
    const max = this.state.myOutfit.length;

    if (direction === 'left') {
      changeToCard -= 1;
    }
    if (direction === 'right') {
      changeToCard += 1;
    }
    if (changeToCard >= max - 3) { // alter this to be dynamic based on number of related products
      changeToCard = 0;
    }
    if (changeToCard < 0) { // alter this to be dynamic based on number of related products
      changeToCard = max - 4;
    }

    this.setState({ myOutfitCarouselIndex: changeToCard });
  }

  addToOutfit(productId) {
    const newOutfit = this.state.myOutfit;

    newOutfit.push(productId);
    console.log(newOutfit);
    this.setState({ myOutfit: newOutfit });
  }

  render = () => {
    const showCards = this.state.myOutfit.slice(this.state.myOutfitCarouselIndex, this.state.myOutfitCarouselIndex + 3);

    for (let i = 0; i < 3; i += 1) {
      if (showCards.length < 3) {
        showCards.push(0);
      }
    }

    return (
      <div className="container-fluid carousel-main">
        <div className="row">
          <div className="col-xs-1 col-sm-1 carousel-arrow" onClick={() => this.next('left')} onKeyPress={() => {}} role="button" tabIndex={0}><div>&#9664;</div></div>
          <div className="col-xs-10">

            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-3">
                  <OutfitCard
                    currentProduct={this.props.currentProduct}
                    cardIndex={this.state.myOutfitCarouselIndex}
                    onClick={() => this.addToOutfit(this.props.currentProduct)}
                  />
                </div>
                {this.state.myOutfit.map((i, id) => <ProductCard key={id} currentProduct={this.props.currentProduct} cardIndex={this.state.myOutfitCarouselIndex} />)}
                {/* {for (let i = myOutfitCarouselIndex; i < (myOutfitCarouselIndex + 3); i++) {
                    (<ProductCard currentProduct={this.props.currentProduct} cardIndex={this.state.myOutfitCarouselIndex} />)
                }} */}
                {/* <div className="col-xs-3">
                    <EmptyCard />
                </div>
                <div className="col-xs-3">
                    <EmptyCard />
                </div>
                <div className="col-xs-3">
                    <EmptyCard />
                </div> */}
              </div>
            </div>

          </div>
          <div className="col-xs-1 col-sm-1 carousel-arrow" onClick={() => this.next('right')} onKeyPress={() => {}} role="button" tabIndex={0}><div>&#9654;</div></div>
        </div>
      </div>
    );
  }
}

export default MyOutfitCarousel;
