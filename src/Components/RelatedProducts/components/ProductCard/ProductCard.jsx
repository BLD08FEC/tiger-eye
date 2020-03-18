import React from 'react';
import './ProductCard.scss';
import { connect } from 'react-redux';

// eslint-disable-next-line arrow-body-style
const ProductCard = ({ data, isRelated }) => {
  let photo = 0;
  if (isRelated === 'true') {
    photo = 1;
  }

  return (
    <div className="container-fluid card-main">
      <img className="row card-img-top" src={data.styles[0].photos[photo].url} alt="CARD_IMG_CAP_HERE" />
      <div className="card-body">
        <div className="row card-title">
          {data.name}
        </div>
        <div className="row card-text">
          {data.category}
        </div>
        <div className="row card-star">
          card star
        </div>
        <div className="row card-price">
          ${ data.default_price - 1 }.99
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
