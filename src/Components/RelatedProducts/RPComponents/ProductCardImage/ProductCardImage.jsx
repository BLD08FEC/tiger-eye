/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './ProductCardImage.scss';
import ModalDashboard from '../modal/ModalDashboard/ModalDashboard';
// import helperApi from '../../../../Shared/api';

const ProductCardImage = (props) => {
  const [imageUrl, setImageUrl] = useState({ });

  useEffect(() => {
    fetch(`http://52.26.193.201:3000/products/${props.cardProduct}/styles`)
      .then((res) => res.json())
      .then((data) => setImageUrl(data.results[0].photos[0].thumbnail_url))
      .catch((err) => err);
  });

  if (imageUrl == null) {
    return (
      <div className="card-image" onClick={() => {}} onKeyPress={() => { /* if {props.carouselType} === suggested, then redirect entire page to this card's product id */ }} role="button" tabIndex={0}>
        <div className="button-overlay" onClick={() => { /* if {props.carouselType} === suggested, then open modal; if {props.carouselType} === myOutfit, then remove from myOutfit */ }} onKeyPress={() => {}} role="button" tabIndex={0}><ModalDashboard buttonType={props.buttonType} carouselType={props.carouselType} /></div>
        <img src="https://www.warnersstellian.com/Content/images/product_image_not_available.png" alt="not available" />
      </div>
    );
  }
  return (
    <div className="card-image" onClick={() => { /* if {props.carouselType} === suggested, then redirect entire page to this card's product id */ }} onKeyPress={() => {}} role="button" tabIndex={0}>
      <div className="button-overlay" onClick={() => { /* if {props.carouselType} === suggested, then redirect entire page to this card's product id */ }} onKeyPress={() => {}} role="button" tabIndex={0}><ModalDashboard buttonType={props.buttonType} carouselType={props.carouselType} /></div>
      <img src={imageUrl} alt="product" />
    </div>
  );
};

export default ProductCardImage;
