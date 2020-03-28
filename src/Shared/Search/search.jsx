import React from 'react';
import './search.scss';
import { connect } from 'react-redux';
// import { render } from '@testing-library/react';

const Search = () => (
  <div className="searchContainer">
    <input className="input" type="text" placeholder="search here" />
    <button type="submit" className="searchBtn">Search</button>
    <i className="fa fa-shopping-cart" />
  </div>
);

export default Search;
