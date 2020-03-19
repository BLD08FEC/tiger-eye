/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import '../ProductOverview.css';
import { updateSelectedStyle } from '../../../data/actions/productDataAction';

const Styles = (props) => (
  props.productStyles.product_id ? (
    <div>
      <div className="style-name">Style: {props.selectedStyleName}</div>
      {props.productStyles.results.map((style, index) => (
        <img
          src={style.photos[0].thumbnail_url}
          alt={style.name}
          id={index}
          className="rounded-circle style-pics"
          key={style.style_id}
          onClick={() => props.updateSelectedStyle(props.productStyles.results[index])}
        />
      ))}
    </div>
  ) : <div />
);


const mapStateToProps = (state) => ({
  productStyles: state.productDataReducer.productStyles,
  selectedStyleName: state.productDataReducer.selectedStyleName,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedStyle: (defaultStyle) => dispatch(updateSelectedStyle(defaultStyle)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Styles);
