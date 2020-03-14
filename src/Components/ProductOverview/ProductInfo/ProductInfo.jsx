import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stars from './Stars';
import { getReviewMetaData, getReviewMetaDataSuccess } from '../../../data/actions/reviewMetaAction';

export class ProductInfo extends Component {

  componentDidMount() {
    console.log('error state', this.props.error)
    this.props.getReviewMetaData();
  }

  renderProductDetails(productDetails){
    console.log("details", productDetails)
    return (
      <div>
        
      </div>
    )
  }

  render() {
    return (
      <div>
        Product Info
        {this.renderProductDetails(this.props.reviewMetaData)}
        <Stars />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviewMetaData: state.reviewMetaReducer.reviewMetaData,
  error: state.reviewMetaReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getReviewMetaData: () => dispatch(getReviewMetaData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
