import React, { Component } from 'react';
import './Carousel.scss';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {
//   RPincrement, /* RPincrementReset, */ RPdecrement, /* RPdecrementReset, */
// } from '../../../../data/actions/relatedProductsAction';
import ProductCard from '../ProductCard/ProductCard';
// import helperAPI from '../../../../Shared/api';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOutfitArr: [9, 8, 7, 6, 5, 4, 3, 2],
      myOutfitIndex: 0,
      suggestionsIndex: 0,
      suggestionsArr: [],
    };
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    const { mainProductId } = this.props;

    // eslint-disable-next-line no-undef
    fetch(`http://52.26.193.201:3000/products/${mainProductId}/related`)
      .then((res) => res.json())
      .then((data) => this.setState({ suggestionsArr: data }))
      .catch((err) => err);
  }

  next(direction) {
    const { carouselType } = this.props;
    const {
      myOutfitArr, myOutfitIndex, suggestionsArr, suggestionsIndex,
    } = this.state;

    let changeToCard = suggestionsIndex;
    let max = suggestionsArr.length;

    if (carouselType === 'myOutfit') {
      changeToCard = myOutfitIndex;
      max = myOutfitArr.length;
    }

    if (direction === 'left') {
      changeToCard -= 1;
    }
    if (direction === 'right') {
      changeToCard += 1;
    }
    if (changeToCard > max - 4) { // alter this to be dynamic based on number of related products
      changeToCard = 0;
    }
    if (changeToCard < 0) { // alter this to be dynamic based on number of related products
      changeToCard = max - 4;
    }

    if (carouselType === 'myOutfit') {
      this.setState({ myOutfitIndex: changeToCard });
    }
    this.setState({ suggestionsIndex: changeToCard });
  }

  addToOutfit() {
    const { mainProductId, carouselType } = this.props;
    const { myOutfitArr } = this.state;

    if (carouselType === '') {
      const newOutfit = myOutfitArr.slice();

      newOutfit.unshift(mainProductId);

      this.setState({ myOutfitArr: newOutfit });
    }
  }

  removeFromOutfit() {
    const { carouselType } = this.props;
    const { myOutfitArr } = this.state;

    const newOutfit = myOutfitArr.slice();

    if (carouselType === '') {
      newOutfit.splice(0, 1);

      this.setState({ myOutfitArr: newOutfit });
    }
  }

  render = () => {
    const { mainProductId, carouselType } = this.props;
    const { suggestionsArr, suggestionsIndex } = this.state;

    const cardDeck = suggestionsArr.slice();
    let showHand = cardDeck;

    if (cardDeck.length < 4) {
      for (let i = cardDeck.length; i <= 4; i += 1) {
        showHand.push(0);
      }
    }
    if (cardDeck.length > 4) {
      showHand = cardDeck.slice(suggestionsIndex, suggestionsIndex + 4);
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
                {showHand.map((i, id) => (
                  <div className="col-xs-3">
                    <ProductCard
                      // eslint-disable-next-line no-sequences
                      key={i, id}
                      mainProductId={mainProductId}
                      cardProductId={showHand[id]}
                      carouselType={carouselType}
                      suggestionsIndex={i}
                      buttonType="+"
                    />
                  </div>
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

export default Carousel;
