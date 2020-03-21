/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

const availableStock = (availableStock) => {
  const stock = [];

  for (let i = 1; i <= availableStock; i++) {
    if (i > 15) {
      break;
    }
    stock.push(<option value={i} key={i}>{i}</option>);
  }
  return stock;
};

const SelectQuantity = ({ selectedStyleSKUS, selectedSize }) => (
  <div>
    <div>Qty:</div>
    {selectedSize !== null
      ? (
        <select id="quantity">
          <option value="" selected="selected" disabled hidden> 1 </option>
          {availableStock(selectedStyleSKUS[selectedSize])}
        </select>
      )
      : (
        <select disabled value=" - ">
          <option> - </option>
        </select>
      )}
  </div>
);

const mapStateToProps = (state) => ({
  selectedStyleSKUS: state.productDataReducer.selectedStyleSKUS,
  selectedSize: state.productDataReducer.selectedSize,
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(SelectQuantity);
