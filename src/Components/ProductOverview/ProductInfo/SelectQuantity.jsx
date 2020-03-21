/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedQuantity } from '../../../data/actions/productDataAction';

const availableStock = (availableStock, updateSelectedQuantity) => {
  const stock = [];

  for (let i = 1; i <= availableStock; i++) {
    if (i > 15) {
      break;
    }
    stock.push(<option value={i} key={i}>{i}</option>);
  }
  return stock;
};

const SelectQuantity = ({ selectedStyleSKUS, selectedSize, updateSelectedQuantity }) => (
  <div>
    <div>Qty:</div>
    {selectedSize !== null
      ? (
        <select className="select-quantity" id="quantity" onChange={(e) => updateSelectedQuantity(e.target.value)}>
          <option value="1" selected="selected" disabled hidden> 1 </option>
          {availableStock(selectedStyleSKUS[selectedSize], updateSelectedQuantity)}
        </select>
      )
      : (
        <select className="select-quantity" disabled value=" - ">
          <option> - </option>
        </select>
      )}
  </div>
);

const mapStateToProps = (state) => ({
  selectedStyleSKUS: state.productDataReducer.selectedStyleSKUS,
  selectedSize: state.productDataReducer.selectedSize,
  selectedQuantity: state.productDataReducer.selectedQuantity,
});

const mapDispatchToProps = (dispatch) => ({
    updateSelectedQuantity: (quantity) => dispatch(updateSelectedQuantity(quantity)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectQuantity);
