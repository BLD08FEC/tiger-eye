/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import '../ProductOverview.css';
import { updateSelectedStyle } from '../../../data/actions/productDataAction';

const Styles = ({
  productStyles, selectedStyleName, selectedStyle_id, updateSelectedStyle,
}) => (
  productStyles.product_id ? (
    <div className="select-checkmark">
      <div className="style-name">
        Style:
        {selectedStyleName}
      </div>
      <div className="styles-all">
        {productStyles.results.map((style, index) => (
          style.skus.null !== null
          && (
          <label className="style-container" key={style.style_id}>
            {selectedStyle_id === style.style_id
              ? <input type="radio" name="style-selector" checked />
              : <input type="radio" name="style-selector" />}
            <span className="checkmark">✔</span>
            <img
              src={style.photos[0].thumbnail_url}
              alt={style.name}
              id={index}
              className="rounded-circle style-pics"
              name="style-selector"
              onClick={() => updateSelectedStyle(productStyles.results[index])}
            />
          </label>
          )
        ))}
      </div>
    </div>
  ) : <div />
);


const mapStateToProps = (state) => ({
  productStyles: state.productDataReducer.productStyles,
  selectedStyleName: state.productDataReducer.selectedStyleName,
  selectedStyle_id: state.productDataReducer.selectedStyle_id,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedStyle: (defaultStyle) => dispatch(updateSelectedStyle(defaultStyle)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Styles);
