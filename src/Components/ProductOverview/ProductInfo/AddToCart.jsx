/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../../data/actions/productDataAction';

const buildOrder = (productName, product_id, styleName, style_id, size, quantity = 1, price, salePrice, cart, updateCart) => {
    if (!quantity) {
        quantity = 1;
    }

    const order = {
        name: productName,
        product_id: product_id,
        styleName: styleName,
        style_id: style_id,
        size: size,
        quantity: quantity,
    };

    if (salePrice > 0) {
        order.price = salePrice;
    } else {
        order.price = price;
    }

    cart.push(order);
    updateCart(cart);

    return;
}

const AddToCart = ({ selectedStyleSKUS, selectedSize, selectedQuantity, productData, selectedStyleName, selectedStyle_id, selectedPrice, salePrice, cart, updateCart}) => (
  <div>
    {selectedStyleSKUS[null] === null ? <div /> : 
    <button 
        className='add-to-cart'
        onClick={() => buildOrder(productData.name, productData.id, selectedStyleName, selectedStyle_id, selectedSize, selectedQuantity, selectedPrice, salePrice, cart, updateCart)}
        >
          Add to Cart yo
    </button>
    }
  </div>
);

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
    updateCart: (cart) => dispatch(updateCart(cart)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
