import React from 'react';
import './search.scss';
import { connect } from 'react-redux';
// import { render } from '@testing-library/react';

const Search = () => (
  <div className="searchContainer">
    <input className="input" type="text" placeholder="search here" />
    <button type="submit" className="searchBtn">Search</button>
  </div>
);

export default Search;
