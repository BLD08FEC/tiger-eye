import React from 'react';
import { connect } from 'react-redux';

const Styles = () => (
  <div>
    styles
  </div>
);


const mapStateToProps = (state) => ({
  productStyles: state.productDataReducer.productStyles,
});


export default connect(mapStateToProps)(Styles);
