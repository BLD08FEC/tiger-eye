import React, { useState, useEffect } from 'react';
import './ProductCard.scss';
// import { connect } from 'react-redux';
import EmptyCard from '../EmptyCard/EmptyCard';
import ProductCardImage from '../ProductCardImage/ProductCardImage';
import Stars from '../../../../Shared/Stars';

const ProductCard = (props) => {
  const [card, setCard] = useState({ });

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(`http://52.26.193.201:3000/products/${props.currentProduct}/related`)
      .then((res) => res.json())
      .then((relatedData) => {
        // eslint-disable-next-line no-undef
        fetch(`http://52.26.193.201:3000/products/${relatedData[props.cardIndex]}`)
          .then((res) => res.json())
          .then((cardData) => setCard(cardData))
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  });

  if (card.id === undefined) {
    return (<EmptyCard />);
  }
  return (
    <div className="product-card-main">
      <div className="container-fluid">
        <div className="row product-card-img-top">
          <ProductCardImage cardProduct={card.id} />
        </div>
        <div className="row product-card-info-bottom">
          <div className="container-fluid product-card-body">
            <div className="row product-card-category">
              {card.category}
            </div>
            <div className="row product-card-title">
              {card.name}
            </div>
            <div className="row product-card-price">
              $
              {card.default_price}
              .00
            </div>
            <div className="row product-card-star">
              <Stars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
