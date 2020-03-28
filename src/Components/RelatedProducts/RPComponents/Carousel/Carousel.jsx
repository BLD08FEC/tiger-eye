/* eslint-disable no-undef */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './Carousel.scss';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {
//   RPincrement, /* RPincrementReset, */ RPdecrement, /* RPdecrementReset, */
// } from '../../../../data/actions/relatedProductsAction';
import ProductCard from '../ProductCard/ProductCard';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex: 0,
      relatedArr: [],
    };
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    fetch(`http://52.26.193.201:3000/products/${this.props.currentProduct}/related`)
      .then((res) => res.json())
      .then((data) => this.setState({ relatedArr: data }))
      .catch((err) => err);
  }

  next(direction) {
    // direction.preventDefault();
    let changeToCard = this.state.carouselIndex;
    const max = this.state.relatedArr.length;

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

    this.setState({ carouselIndex: changeToCard });
  }

  render = () => (
    <div className="container-fluid carousel-main">
      <div className="row">
        <div className="col-xs-1 col-sm-1 carousel-arrow" onClick={() => this.next('left')} onKeyPress={() => {}} role="button" tabIndex={0}><div>&#9664;</div></div>
        <div className="col-xs-10">

          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-3">
                <ProductCard
                  key={"id"}
                  cardProductId={this.state.relatedArr[1]}
                  currentProduct={this.props.currentProduct}
                  cardIndex={this.state.carouselIndex}
                  carouselType="suggestions"
                />
              </div>
              <div className="col-xs-3">
                <ProductCard
                  key={"id"}
                  cardProductId={this.state.relatedArr[2]}
                  currentProduct={this.props.currentProduct}
                  cardIndex={this.state.carouselIndex + 1}
                  carouselType="suggestions"
                />
              </div>
              <div className="col-xs-3">
                <ProductCard
                  key={"id"}
                  cardProductId={this.state.relatedArr[3]}
                  currentProduct={this.props.currentProduct}
                  cardIndex={this.state.carouselIndex + 2}
                  carouselType="suggestions"
                />
              </div>
              <div className="col-xs-3">
                <ProductCard
                  key={"id"}
                  cardProductId={this.state.relatedArr[4]}
                  currentProduct={this.props.currentProduct}
                  cardIndex={this.state.carouselIndex + 3}
                  carouselType="suggestions"
                />
              </div>
            </div>
          </div>

        </div>
        <div className="col-xs-1 col-sm-1 carousel-arrow" onClick={() => this.next('right')} onKeyPress={() => {}} role="button" tabIndex={0}><div>&#9654;</div></div>
      </div>
    </div>
  )
}

export default Carousel;
