/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Carousel.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  RPincrement, /* RPincrementReset, */ RPdecrement, /* RPdecrementReset, */
} from '../../../../data/actions/relatedProductsAction';
import ProductCard from '../ProductCard/ProductCard';
// import Next from '';

class Carousel extends React.Component {
  constructor({
    RPproductData, RPrelatedProducts, RPcurrentCard,
  }) {
    super(
      {
        RPproductData, RPrelatedProducts, RPcurrentCard,
      },
    );
  }

  // const Carousel = ({ relatedProducts, currentCard }) => {})

  render() {
    // eslint-disable-next-line no-console
    // console.log(this.RPrelatedProducts);
    // eslint-disable-next-line no-console
    // console.log(this.RPrelatedProducts);

    return (
      <div className="container-fluid carousel-main">
        <div className="row">
          <div className="col-xs-1 col-sm-1 carousel-arrow" direction="left" pointer="&#9654;" onClick={this.props.RPdecrement}><div>&#9664;</div></div>
          <div className="col-xs-10 col-sm-10 card-group">
            <div className="container-fluid">
              <div className="row">
                {/* {for (let i = this.RPcurrentCard; i < this.RPcurrentCard + 4; i++) {<ProductCard className="col-sm-3 carousel-card" productId={id} />)} */}
                <ProductCard className="col-sm-3 carousel-card" /* relatedProductId={} */ />
                <ProductCard className="col-sm-3 carousel-card" />
                <ProductCard className="col-sm-3 carousel-card" />
                <ProductCard className="col-sm-3 carousel-card" />
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 carousel-arrow" direction="right" pointer="&#9664;" onClick={this.props.RPincrement}>&#9654;</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  RPproductData: state.relatedProductsReducer.RPproductData,
  RPrelatedProducts: state.relatedProductsReducer.RPrelatedProducts,
  RPcurrentCard: state.relatedProductsReducer.RPcurrentCard,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    RPincrement,
    RPdecrement,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
