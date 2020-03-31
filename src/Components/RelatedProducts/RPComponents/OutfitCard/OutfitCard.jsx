import React from 'react';
import './OutfitCard.scss';

const OutfitCard = ({ handleClick }) => (
  <div
    className="rp-add-item-button"
    onClick={handleClick}
    onKeyPress={() => {}}
    role="button"
    tabIndex={0}
  >
    +
    <br />
    Add current item to your outfit
  </div>
);


export default OutfitCard;
