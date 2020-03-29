import React, { useState, useEffect } from 'react';
import './ProductCard.scss';
// import { connect } from 'react-redux';
import EmptyCard from '../EmptyCard/EmptyCard';
import ProductCardImage from '../ProductCardImage/ProductCardImage';
import Stars from '../../../../Shared/Stars';
// import helperApi from '../../../../Shared/api';

const ProductCard = ({
  mainProductId, cardProductId, carouselType, carouselIndex, buttonType, handleDelete,
}) => {
  const [card, setCard] = useState({ });

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(`http://52.26.193.201:3000/products/${cardProductId}`)
      .then((res) => res.json())
      .then((cardData) => setCard(cardData))
      .catch((err) => err);
  });

  if (card.id === undefined) {
    return (<EmptyCard />);
  }

  return (
    <div className="rp-product-card-main">
      <div className="container">
        <div className="row rp-product-card-img-top">
          <ProductCardImage
            mainProductId={mainProductId}
            cardProductId={card.id}
            carouselType={carouselType}
            carouselIndex={carouselIndex}
            buttonType={buttonType}
            handleDelete={handleDelete}
          />
        </div>
        <div className="row rp-product-card-info-bottom">
          <div className="container-fluid rp-product-card-body">
            <div className="row rp-product-card-category">
              {card.category}
            </div>
            <div className="row rp-product-card-title">
              {card.name}
            </div>
            <div className="row rp-product-card-price">
              $
              {card.default_price}
              .00
            </div>
            <div className="row rp-product-card-star">
              <Stars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
