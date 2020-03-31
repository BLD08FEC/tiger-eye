import React, { Component } from 'react';
import './MyOutfitCarousel.scss';
import OutfitCard from '../OutfitCard/OutfitCard';
import ProductCard from '../ProductCard/ProductCard';

const MyOutfitCarousel = ({
  carouselArr, carouselIndex, mainProductId, carouselType, nextClick, handleDeleteFromOutfit, handleAddToOutfit,
}) => {
  const cardDeck = carouselArr.slice();
  let showHand = cardDeck;

  if (cardDeck.length < 3) {
    for (let i = cardDeck.length; i <= 3; i += 1) {
      showHand.push(0);
    }
  }
  if (cardDeck.length > 3) {
    showHand = cardDeck.slice(carouselIndex, carouselIndex + 3);
  }

  return (
    <div className="container-fluid rp-carousel-main">
      <div className="row">
        <div
          className="col-xs-1 col-sm-1 rp-carousel-arrow"
          onClick={() => nextClick('left')}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          <div>&#9664;</div>
        </div>
        <div className="col-xs-10">

          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-3">
                <OutfitCard
                  mainProductId={mainProductId}
                  cardIndex={carouselIndex}
                  handleClick={() => handleAddToOutfit()}
                />
              </div>
              {showHand.map((i, id) => (
                <ProductCard
                  key={i}
                  mainProductId={mainProductId}
                  cardProductId={showHand[id]}
                  carouselType={carouselType}
                  carouselIndex={i}
                  buttonType="x"
                  handleDelete={() => handleDeleteFromOutfit()}
                />
              ))}
            </div>
          </div>

        </div>
        <div
          className="col-xs-1 col-sm-1 rp-carousel-arrow"
          onClick={() => nextClick('right')}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          <div>&#9654;</div>
        </div>
      </div>
    </div>
  );
};


export default MyOutfitCarousel;
