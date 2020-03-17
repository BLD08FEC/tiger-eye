import React from 'react';
import './ProductCard.scss';

// eslint-disable-next-line arrow-body-style
const ProductCard = ({ data, isRelated }) => {
  let photo = 0;
  if (isRelated === 'true') {
    photo = 1;
  }

  return (
    <div className="card" style={{ width: 95, height: 275 }}>
      <img className="card-img-top" src={data.styles[0].photos[photo].url} alt="CARD_IMG_CAP_HERE" style={{ height: 95 }} />
      <div className="card-body">
        <div className="row">
          <div className="card-title">{data.name}</div>
        </div>
        <div className="row">
          <div className="card-text">{data.category}</div>
        </div>
        <div className="row">
          <div className="card-star">card star</div>
        </div>
        <div className="row">
          <div className="card-price">{data.default_price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
