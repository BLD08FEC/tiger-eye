/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/QuestionsAndAnswers';
import RelatedProducts from './Components/RelatedProducts/RelatedProducts';
import Reviews from './Components/Reviews/Reviews';
import { getReviewMetaData } from './data/actions/reviewMetaAction';
import { getProductData } from './data/actions/productDataAction';
import { getProductsList } from './data/actions/productsListAction';

class App extends Component {
  componentDidMount() {
    this.props.getReviewMetaData();
    this.props.getProductData();
    this.props.getProductsList();
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row"><ProductOverview /></div>
          <div className="row"><QuestionsAndAnswers /></div>
          <div className="row"><RelatedProducts /></div>
          <div className="row"><Reviews /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  error: state.reviewMetaReducer.error,
  productData: state.productDataReducer.productData,
  productsList: state.productsListReducer.productsList,
});

const mapDispatchToProps = (dispatch) => ({
  getReviewMetaData: () => dispatch(getReviewMetaData()),
  getProductData: () => dispatch(getProductData()),
  getProductsList: () => dispatch(getProductsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
