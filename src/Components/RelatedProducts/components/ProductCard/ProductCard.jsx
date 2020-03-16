import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductCard = ({ data, isRelated }) => {
//   console.log(props.data.name);
//   console.log(props.data.category);
//   console.log(props.data.default_price);
//   console.log(props.data.styles[0].photos[0].thumbnail_url);
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
