/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildOrder, availableStock } from '../../../Shared/HelperFunctions';
import { updateSelectedQuantity, updateCart, updateSelectedSize } from '../../../data/actions/productDataAction';

export class OrderSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartError: false,
    };
    this.showCartError = this.showCartError.bind(this);
    this.hideCartError = this.hideCartError.bind(this);
  }

  showCartError(e, selectedSize) {
    e.preventDefault();
    if (selectedSize === null) {
      this.setState({ showCartError: true });
    }
  }

  hideCartError(e) {
    e.preventDefault();
    this.setState({ showCartError: false });
  }

  resetQuantity(availableStock, selectedQuantity, updateSelectedQuantity) {
    if (availableStock < selectedQuantity) {
      updateSelectedQuantity(1);
    }
  }


    renderSelectSize = ({
      selectedStyleSKUS, updateSelectedSize, updateSelectedQuantity, selectedQuantity, selectedSize,
    }) => {
      const availableSizes = Object.keys(selectedStyleSKUS);

      return (
        <div>
          {this.state.showCartError && <div className="cart-error">Select a size!</div>}
          <div>Size:</div>
          {availableSizes[0] !== 'null'
            ? (
              <select
                className="select-size"
                id="available-sizes"
                onChange={(e) => {
                  updateSelectedSize(e.target.value);
                  this.hideCartError(e);
                }}
              >
                <option value="" selected="selected" disabled hidden>Select Size</option>
                {availableSizes.map((size) => (
                  <option value={size} key={size}>{size}</option>))}
              </select>
            )
            : (
              <select className="out-of-stock" disabled value="OUT OF STOCK">
                <option>OUT OF STOCK</option>
              </select>
            )}
          {this.resetQuantity(selectedStyleSKUS[selectedSize], selectedQuantity, updateSelectedQuantity)}
        </div>
      );
    }

    renderSelectQuantity = ({ selectedStyleSKUS, selectedSize, updateSelectedQuantity }) => (
      <div>
        <div>Qty:</div>
        {selectedSize !== null
          ? (
            <select className="select-quantity" id="quantity" onChange={(e) => updateSelectedQuantity(e.target.value)}>
              <option value="1" selected="selected" disabled hidden> 1 </option>
              {availableStock(selectedStyleSKUS[selectedSize])}
            </select>
          )
          : (
            <select className="select-quantity" disabled value=" - ">
              <option> - </option>
            </select>
          )}
      </div>
    )

    renderAddToCart = ({
      selectedStyleSKUS, selectedSize, selectedQuantity, productData, selectedStyleName, selectedStyle_id, selectedPrice, salePrice, cart, updateCart,
    }) => (
      <div>
        <div>
          {this.state.showCartError && <div className="cart-error">Size must be selected to add item to your cart</div>}
        </div>
        {selectedStyleSKUS.null === null ? <div />
          : (
            <button
              className="add-to-cart btn"
              type="button"
              onClick={(e) => {
                this.showCartError(e, selectedSize);
                buildOrder(productData.name, productData.id, selectedStyleName, selectedStyle_id, selectedSize, selectedQuantity, selectedPrice, salePrice, cart, updateCart);
              }}
            >
              Add to Cart
            </button>
          )}
      </div>
    )

    render() {
      return (
        <div className="order-selection">
          <div className="row">
            <div className="col-6 col-sm-6">
              {this.renderSelectSize(this.props)}
            </div>
            <div className="col-6 col-sm-6">
              {this.renderSelectQuantity(this.props)}
            </div>
          </div>
          <div className="row">
            <div className="col-12 cart">
              {this.renderAddToCart(this.props)}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  selectedStyleSKUS: state.productDataReducer.selectedStyleSKUS,
  selectedSize: state.productDataReducer.selectedSize,
  selectedQuantity: state.productDataReducer.selectedQuantity,
  productData: state.productDataReducer.productData,
  selectedStyleName: state.productDataReducer.selectedStyleName,
  selectedStyle_id: state.productDataReducer.selectedStyle_id,
  selectedPrice: state.productDataReducer.selectedPrice,
  salePrice: state.productDataReducer.salePrice,
  cart: state.productDataReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedSize: (size) => dispatch(updateSelectedSize(size)),
  updateSelectedQuantity: (quantity) => dispatch(updateSelectedQuantity(quantity)),
  updateCart: (cart) => dispatch(updateCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSelection);
