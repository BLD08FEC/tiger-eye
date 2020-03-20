/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

const SelectSize = ({ selectedStyleSKUS }) => {
  const availableSizes = Object.keys(selectedStyleSKUS);
  console.log(availableSizes);

  return (
    availableSizes[0] !== 'null' ?
    <select id="available-sizes">
      <option value="" selected="selected" disabled hidden>Select Size</option>
      {availableSizes.map((size) => <option value={size} key={size}>{size}</option>)} 
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
//     updateSelectedStyle: (defaultStyle) => dispatch(updateSelectedStyle(defaultStyle)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectSize);
