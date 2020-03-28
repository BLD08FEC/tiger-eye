import React from 'react';
import './OutfitCard.scss';

const OutfitCard = (props) => (
  <button type="button" className="add-item" onClick={() => props.handleClick}>
    +
    <br />
    Add current item to your outfit
  </button>
);


export default OutfitCard;
