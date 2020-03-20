/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/QuestionsAndAnswers';
import RelatedProducts from './Components/RelatedProducts/RelatedProducts';
import Reviews from './Components/Reviews/Reviews';

// Redux
import { getProductData } from './data/actions/productDataAction';
import { getProductsList } from './data/actions/productsListAction';
import { getReviewMetaData } from './data/actions/reviewMetaDataAction';
import { getRelatedProducts } from './data/actions/relatedProductsAction';

class App extends Component {
  componentDidMount() {
    this.props.getReviewMetaData();
    this.props.getProductData();
    this.props.getProductsList();
    this.props.getRelatedProducts();
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="header">Header</div>
          <div className="row"><ProductOverview /></div>
          <div className="row"><RelatedProducts /></div>
          <div className="row"><QuestionsAndAnswers /></div>
          <div className="row"><Reviews /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  productData: state.productDataReducer.productData,
  productsList: state.productsListReducer.productsList,
  relatedProducts: state.relatedProductsReducer.relatedProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getReviewMetaData: () => dispatch(getReviewMetaData()),
  getProductData: () => dispatch(getProductData()),
  getProductsList: () => dispatch(getProductsList()),
  getRelatedProducts: () => dispatch(getRelatedProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
