/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedSize } from '../../../data/actions/productDataAction';

const SelectSize = ({ selectedStyleSKUS, updateSelectedSize }) => {
  const availableSizes = Object.keys(selectedStyleSKUS);

  return (
    availableSizes[0] !== 'null' ?
    <select id="available-sizes" onChange={(e) => updateSelectedSize(e.target.value)}>
      <option value="" selected="selected" disabled hidden>Select Size</option>
      {availableSizes.map((size) => (
        <option value={size} key={size}>{size}</option>)
      )}
    </select>
      : 
    <select disabled value="OUT OF STOCK">
        <option>OUT OF STOCK</option>
    </select>
  );
};

const mapStateToProps = (state) => ({
  selectedStyleSKUS: state.productDataReducer.selectedStyleSKUS,
});

const mapDispatchToProps = (dispatch) => ({
    updateSelectedSize: (size) => dispatch(updateSelectedSize(size)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectSize);
