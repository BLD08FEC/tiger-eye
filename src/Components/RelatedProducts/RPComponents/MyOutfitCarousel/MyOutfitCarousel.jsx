import React, { Component } from 'react';
import './MyOutfitCarousel.scss';
import OutfitCard from '../OutfitCard/OutfitCard';
import ProductCard from '../ProductCard/ProductCard';

class MyOutfitCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOutfitArr: [9, 8, 7, 6, 5, 4, 3, 2],
      myOutfitIndex: 0,
    };
    this.next = this.next.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  next(direction) {
    const { myOutfitIndex, myOutfitArr } = this.state;

    let changeToCard = myOutfitIndex;
    const max = myOutfitArr.length;

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

    this.setState({ myOutfitIndex: changeToCard });
  }

  addToOutfit() {
    const { mainProductId } = this.props;
    const { myOutfitArr } = this.state;

    const newOutfit = myOutfitArr.slice();

    newOutfit.unshift(mainProductId);

    this.setState({ myOutfitArr: newOutfit });
  }

  removeFromOutfit() {
    const { myOutfitArr } = this.state;
    const newOutfit = myOutfitArr.slice();

    newOutfit.splice(0, 1);

    this.setState({ myOutfitArr: newOutfit });
  }

  render = () => {
    const { mainProductId, carouselType } = this.props;
    const { myOutfitArr, myOutfitIndex } = this.state;

    const cardDeck = myOutfitArr.slice();
    let showHand = cardDeck;

    if (cardDeck.length < 3) {
      for (let i = cardDeck.length; i <= 3; i += 1) {
        showHand.push(0);
      }
    }
    if (cardDeck.length > 3) {
      showHand = cardDeck.slice(myOutfitIndex, myOutfitIndex + 3);
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
                    mainProductId={mainProductId}
                    cardIndex={myOutfitIndex}
                    handleClick={() => this.addToOutfit()}
                  />
                </div>
                {showHand.map((i, id) => (
                  <ProductCard
                    key={i}
                    mainProductId={mainProductId}
                    cardProductId={showHand[id]}
                    carouselType={carouselType}
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
