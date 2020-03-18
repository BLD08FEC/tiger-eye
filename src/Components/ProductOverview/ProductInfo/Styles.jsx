import React from 'react';
import { connect } from 'react-redux';

const Styles = ({ productStyles }) => (
  productStyles.product_id ? (
    <div>
      {productStyles.results.map((style, index) => (
        <img src={style.photos[0].thumbnail_url} alt={style.name} className="rounded-circle w-25 style-pics" />
      ))}
    </div>
  ) : <div />
//   <div>styles</div>
);


const mapStateToProps = (state) => ({
  productStyles: state.productDataReducer.productStyles,
});


export default connect(mapStateToProps)(Styles);
