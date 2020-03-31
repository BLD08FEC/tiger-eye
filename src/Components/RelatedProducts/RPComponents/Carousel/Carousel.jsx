import React, { Component } from 'react';
import './Carousel.scss';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {
//   RPincrement, /* RPincrementReset, */ RPdecrement, /* RPdecrementReset, */
// } from '../../../../data/actions/relatedProductsAction';
import SuggestionsCarousel from '../SuggestionsCarousel/SuggestionsCarousel';
import MyOutfitCarousel from '../MyOutfitCarousel/MyOutfitCarousel';
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
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
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
    let numberOfCards = 4;

    if (carouselType === 'myOutfit') {
      changeToCard = myOutfitIndex;
      max = myOutfitArr.length;
      numberOfCards = 3;
    }

    if (direction === 'left') {
      changeToCard -= 1;
    }
    if (direction === 'right') {
      changeToCard += 1;
    }
    if (changeToCard > max - numberOfCards) { // alter this to be dynamic based on number of related products
      changeToCard = 0;
    }
    if (changeToCard < 0) { // alter this to be dynamic based on number of related products
      changeToCard = max - numberOfCards;
    }

    if (carouselType === 'myOutfit') {
      this.setState({ myOutfitIndex: changeToCard });
    }
    this.setState({ suggestionsIndex: changeToCard });
  }

  addToOutfit() {
    const { mainProductId, carouselType } = this.props;
    const { myOutfitArr } = this.state;

    if (carouselType === 'myOutfit') {
      const newOutfit = myOutfitArr.slice();

      newOutfit.unshift(mainProductId);

      this.setState({ myOutfitArr: newOutfit });
    }
  }

  removeFromOutfit(id) {
    const { carouselType } = this.props;
    const { myOutfitArr, myOutfitIndex } = this.state;

    const newOutfit = myOutfitArr.slice();

    if (carouselType === 'myOutfit') {
      newOutfit.splice(id + myOutfitIndex, 1);

      this.setState({ myOutfitArr: newOutfit });
    }
  }

  render = () => {
    const { mainProductId, carouselType } = this.props;
    const {
      myOutfitArr, myOutfitIndex, suggestionsArr, suggestionsIndex,
    } = this.state;

    if (carouselType === 'myOutfit') {
      return (
        <MyOutfitCarousel
          mainProductId={mainProductId}
          carouselType={carouselType}
          carouselArr={myOutfitArr}
          carouselIndex={myOutfitIndex}
          nextClick={this.next}
          handleClick={() => {}}
          handleDelete={this.removeFromOutfit}
          handleAdd={this.addToOutfit}
        />
      );
    }
    return (
      <SuggestionsCarousel
        mainProductId={mainProductId}
        carouselType={carouselType}
        carouselArr={suggestionsArr}
        carouselIndex={suggestionsIndex}
        nextClick={this.next}
        handleClick={() => {}}
        handleDelete={() => {}}
        handleAdd={() => {}}
      />
    );
  }
}

export default Carousel;
