/* eslint-disable */
import React from 'react';

export const calcAvgRating = (ratings) => {
  let sum = 0;
  let total = 0;
  let avgRating = 0;
  if (ratings) {
    const keys = Object.keys(ratings);
    for (let i = 0; i < keys.length; i++) {
      sum += (Number(keys[i]) * ratings[keys[i]]);
      total += ratings[keys[i]];
    }
    avgRating = sum / total;
  }
  return avgRating;
};

export const defaultStyleFinder = (stylesArr) => {
  for (let i = 0; i < stylesArr.length; i++) {
    if (stylesArr[i]['default?'] === 1) {
      return stylesArr[i];
    } else {
      return stylesArr[0];
    }
  }
};

export const availableStock = (availableStock) => {
  const stock = [];

  for (let i = 1; i <= availableStock; i++) {
    if (i > 15) {
      break;
    }
    stock.push(<option value={i} key={i}>{i}</option>);
  }
  return stock;
};

export const buildOrder = (productName, product_id, styleName, style_id, size, quantity = 1, price, salePrice, cart, updateCart) => {
  if (size === null) {
    return;
  }
  
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
};
