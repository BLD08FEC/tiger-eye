import React from 'react';
import './OutfitCard.scss';

const OutfitCard = (props) => (
  <div className="add-item" onClick={props.handleClick}>
    +
    <br />
    Add current item to your outfit
  </div>
);


export default OutfitCard;
