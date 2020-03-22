/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Carousel.scss';
import { connect } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
// import Next from '';

class Carousel extends React.Component {
  constructor({ currentCard, relatedProducts }) {
    super({ currentCard, relatedProducts });
    this.state = {
      relatedProducts,
      currentCard,
    };
    this.next = this.next.bind(this);
  }

  // const Carousel = ({ relatedProducts, currentCard }) => {})

  next(direction) {
    let changeTo = this.state.currentCard;
    const maxx = this.state.relatedProducts.length;

    if (direction === 'left') {
      changeTo -= 1;
      if (changeTo < 0) {
        changeTo = (maxx - 4);
      }
    }
    if (direction === 'right') {
      changeTo += 1;
      if (changeTo + 3 >= maxx) {
        changeTo = 0;
      }
    }
    return ({ currentCard: changeTo });
  }

  render() { // { relatedProducts, currentCard }
    console.log(this.state.relatedProducts, this.state.relatedProducts.length);
    return (
      <div className="container-fluid carousel-main">
        <div className="row">
          <div className="col-xs-1 col-sm-1 carousel-arrow" direction="left" pointer="&#9654;" onClick={() => this.next('left')}><div>&#9664;</div></div>
          <div className="col-xs-10 col-sm-10 card-group">
            <div className="container-fluid">
              <div className="row">
                {/* {this.state.relatedProducts.map((i, id) => <ProductCard className="col-sm-3 carousel-card" productId={id} />)} */}
                <ProductCard className="col-sm-3 carousel-card" productStyle={this.state.relatedProducts[this.state.currentCard + 1]} isRelated={this.props.isRelated} />
                <ProductCard className="col-sm-3 carousel-card" productStyle={this.state.relatedProducts[this.state.currentCard + 1]} isRelated={this.props.isRelated} />
                <ProductCard className="col-sm-3 carousel-card" productStyle={this.state.relatedProducts[this.state.currentCard + 2]} isRelated={this.props.isRelated} />
                <ProductCard className="col-sm-3 carousel-card" productStyle={this.state.relatedProducts[this.state.currentCard + 3]} isRelated={this.props.isRelated} />
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 carousel-arrow" direction="right" pointer="&#9664;" onClick={() => this.next('right')}>&#9654;</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productData: state.productDataReducer.productData,
  relatedProducts: state.relatedProductsReducer.relatedProducts,
  // currentCard: state.currentCardReducer.currentCard,
});

export default connect(mapStateToProps)(Carousel);

// {/* <ProductCard className="col-sm-3 carousel-card" productId={this.state.relatedProducts[this.state.currentCard]} isRelated={this.props.isRelated} />
// <ProductCard className="col-sm-3 carousel-card" productId={this.state.relatedProducts[this.state.currentCard + 1]} isRelated={this.props.isRelated} />
// <ProductCard className="col-sm-3 carousel-card" productId={this.state.relatedProducts[this.state.currentCard + 2]} isRelated={this.props.isRelated} />
// <ProductCard className="col-sm-3 carousel-card" productId={this.state.relatedProducts[this.state.currentCard + 3]} isRelated={this.props.isRelated} /> */}
