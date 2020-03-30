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
      myOutfit: [9, 8, 7, 6, 5, 4, 3, 2],
      myOutfitCarouselIndex: 0,
    };
    this.next = this.next.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  next(direction) {
    let changeToCard = this.state.myOutfitCarouselIndex;
    const max = this.state.myOutfit.length;

    if (direction === 'left') {
      changeToCard -= 1;
    }
    if (direction === 'right') {
      changeToCard += 1;
    }
    if (changeToCard > max - 3) {
      changeToCard = 0;
    }
    if (changeToCard < 0) {
      changeToCard = max - 3;
    }

    this.setState({ myOutfitCarouselIndex: changeToCard });
  }

  addToOutfit() {
    const newOutfit = this.state.myOutfit.slice();

    newOutfit.unshift(this.props.mainProductId);

    this.setState({ myOutfit: newOutfit });
  }

  removeFromOutfit() {
    const newOutfit = this.state.myOutfit.slice();

    newOutfit.splice(0, 1);

    this.setState({ myOutfit: newOutfit });
  }

  render = () => {
    const cardDeck = this.state.myOutfit.slice();
    let showHand = cardDeck;

    if (cardDeck.length < 3) {
      for (let i = cardDeck.length; i <= 3; i += 1) {
        showHand.push(0);
      }
    }
    if (cardDeck.length > 3) {
      showHand = cardDeck.slice(this.state.myOutfitCarouselIndex, this.state.myOutfitCarouselIndex + 3);
    }

    return (
      <div className="container-fluid rp-carousel-main">
        <div className="row">
          <div
            className="col-xs-1 col-sm-1 rp-carousel-arrow"
            onClick={() => this.next('left')}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
          >
            <div>&#9664;</div>
          </div>
          <div className="col-xs-10">

            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-3">
                  <OutfitCard
                    mainProductId={this.props.mainProductId}
                    cardIndex={this.state.myOutfitCarouselIndex}
                    handleClick={() => this.addToOutfit()}
                  />
                </div>
                {showHand.map((i, id) => (
                  <ProductCard
                    key={i}
                    mainProductId={this.props.mainProductId}
                    cardProductId={showHand[id]}
                    carouselType="myOutfit"
                    carouselIndex={i}
                    buttonType="x"
                    handleDelete={this.removeFromOutfit}
                  />
                ))}
              </div>
            </div>

          </div>
          <div
            className="col-xs-1 col-sm-1 rp-carousel-arrow"
            onClick={() => this.next('right')}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
          >
            <div>&#9654;</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyOutfitCarousel;
