/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
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

  addToOutfit() {
    const newOutfit = this.state.myOutfit.slice();

    newOutfit.unshift(this.props.currentProduct);
    console.log(newOutfit);
    this.setState({ myOutfit: newOutfit });
  }

  render = () => {
    const cardDeck = this.state.myOutfit.slice();
    let showHand = cardDeck;

    if (cardDeck.length < 3) {
      for (let i = cardDeck.length; i <= 3; i += 1) {
        cardDeck.push(0);
      }
    }
    if (cardDeck.length >= 3) {
      showHand = cardDeck.slice(0, 3);
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
                    onClick={() => this.addToOutfit()}
                  />
                </div>
                {showHand.map((i, id) => <ProductCard key={id} currentProduct={this.props.currentProduct} cardProductId={i} carouselType="myOutfit" />)}
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
