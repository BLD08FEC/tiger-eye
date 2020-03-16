import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductCard = ({ data }) => {
//   console.log(props.data.name);
//   console.log(props.data.category);
//   console.log(props.data.default_price);
//   console.log(props.data.styles[0].photos[0].thumbnail_url);
  return (
    <div className="card">
      <img className="card-img-top" src={data.styles[0].photos[0].thumbnail_url} alt="CARD_IMG_CAP_HERE" />
      <div className="card-body">
        <div className="row">
          <h6 className="card-title">{data.name}</h6>
          <div className="card-text">{data.category}</div>
        </div>
        <div className="row">
          <div className="card-star">card star</div>
          <div className="card-price">{data.default_price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
