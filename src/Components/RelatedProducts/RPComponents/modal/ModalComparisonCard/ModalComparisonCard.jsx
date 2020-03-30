import React, { useState, useEffect } from 'react';
import './ModalComparisonCard.scss';
// import { connect } from 'react-redux';
import EmptyCard from '../../EmptyCard/EmptyCard';
// import ProductCardImage from '../../ProductCardImage/ProductCardImage';
import Stars from '../../../../../Shared/Stars';
// import helperApi from '../../../../Shared/api';

const ModalComparisonCard = ({
  mainProductId, cardProductId, carouselType, carouselIndex, buttonType,
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
    <div className="rp-modal-comparison-card-main">
      <div className="container">
        <div className="row rp-modal-comparison-card-img-top">
          {/* <ProductCardImage
            mainProductId={mainProductId}
            cardProductId={card.id}
            carouselType={carouselType}
            carouselIndex={carouselIndex}
            buttonType={buttonType}
          /> */}
        </div>
        <div className="row rp-modal-comparison-card-info-bottom">
          <div className="container-fluid">
            <div className="row rp-modal-comparison-card-category">
              {card.category}
            </div>
            <div className="row rp-modal-comparison-card-title">
              {card.name}
            </div>
            <div className="row rp-modal-comparison-card-price">
              $
              {card.default_price}
              .00
            </div>
            {card.slogan}
            {card.description}
            {/* {card.features} */}
            <div className="row rp-modal-comparison-card-star">
              <Stars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComparisonCard;
