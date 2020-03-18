import React from 'react';
import { connect } from 'react-redux';
import '../ProductOverview.css';

const Styles = ({ productStyles }) => (
  productStyles.product_id ? (
    <div className="style-pics">
      {productStyles.results.map((style) => (
        <img src={style.photos[0].thumbnail_url} alt={style.name} className="rounded-circle w-25" key={style.style_id} />
      ))}
    </div>
  ) : <div />
);


const mapStateToProps = (state) => ({
  productStyles: state.productDataReducer.productStyles,
});


export default connect(mapStateToProps)(Styles);
