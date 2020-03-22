/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductOverview from './Components/ProductOverview/ProductOverview';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/QuestionsAndAnswers';
import RelatedProducts from './Components/RelatedProducts/RelatedProducts';
import Reviews from './Components/Reviews/Reviews';
import logo from './Shared/Logo/tigerEye.png';
import Search from './Shared/Search/search';
import './Shared/Logo/logo.scss';
import './Shared/Header/header.scss';
// import './Shared/Search/search.scss';


// Redux
import { getProductData, getProductStyles } from './data/actions/productDataAction';
import { getProductsList } from './data/actions/productsListAction';
import { getReviewMetaData } from './data/actions/reviewMetaDataAction';

class App extends Component {
  componentDidMount() {
    this.props.getReviewMetaData();
    this.props.getProductData();
    this.props.getProductsList();
    this.props.getProductStyles();
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="header">
            <img src={logo} alt="Tiger Eye Logo" className="logo" />
            <Search />
          </div>
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
});

const mapDispatchToProps = (dispatch) => ({
  getReviewMetaData: () => dispatch(getReviewMetaData()),
  getProductData: () => dispatch(getProductData()),
  getProductsList: () => dispatch(getProductsList()),
  getProductStyles: () => dispatch(getProductStyles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
