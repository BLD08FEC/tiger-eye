/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

const SelectQuantity = ({ selectedStyleSKUS }) => {

  return (
   <div>
       Quantity selector
   </div>
  );
};

const mapStateToProps = (state) => ({
  selectedStyleSKUS: state.productDataReducer.selectedStyleSKUS,
  selectedSize: state.productDataReducer.selectedSize,
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(SelectQuantity);
