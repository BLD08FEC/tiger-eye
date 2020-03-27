import React, { useState, useEffect } from 'react';
import './ProductCardImage.scss';

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
      <div className="image">
        <img src="https://www.warnersstellian.com/Content/images/product_image_not_available.png" alt="ALT_IMAGE_TEXT_HERE" />
      </div>
    );
  }
  return (
    <div className="image">
      <img src={imageUrl} alt="ALT_IMAGE_TEXT_HERE" />
    </div>
  );
};

export default ProductCardImage;
