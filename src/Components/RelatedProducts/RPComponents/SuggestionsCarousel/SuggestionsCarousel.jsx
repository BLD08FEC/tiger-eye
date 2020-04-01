import React from 'react';
import './SuggestionsCarousel.scss';
import ProductCard from '../ProductCard/ProductCard';

const SuggestionsCarousel = ({
  carouselArr, carouselIndex, mainProductId, carouselType, nextClick,
}) => {
  const cardDeck = carouselArr.slice();
  let showHand = cardDeck;

  if (cardDeck.length < 4) {
    for (let i = cardDeck.length; i <= 4; i += 1) {
      showHand.push(0);
    }
  }
  if (cardDeck.length > 4) {
    showHand = cardDeck.slice(carouselIndex, carouselIndex + 4);
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
              {showHand.map((i, id) => (
                <div className="col-xs-3">
                  <ProductCard
                      // eslint-disable-next-line no-sequences
                    key={i}
                    mainProductId={mainProductId}
                    cardProductId={showHand[id]}
                    carouselType={carouselType}
                    suggestionsIndex={i}
                    buttonType="+"
                  />
                </div>
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

export default SuggestionsCarousel;
