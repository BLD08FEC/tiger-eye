/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './OutfitCard.scss';

const OutfitCard = (props) => (
  <div className="add-item" onClick={props.handleClick} onKeyPress={() => {}} role="button" tabIndex={0}>
    +
    <br />
    Add current item to your outfit
  </div>
);


export default OutfitCard;
